package com.bookverse.service.impl;

import com.bookverse.domain.BookLoanStatus;
import com.bookverse.exception.BookException;
import com.bookverse.exception.UserException;
import com.bookverse.mapper.BookMapper;
import com.bookverse.modal.Book;
import com.bookverse.modal.Genre;
import com.bookverse.modal.User;
import com.bookverse.payload.dto.BookDTO;
import com.bookverse.payload.request.BookSearchRequest;
import com.bookverse.payload.response.PageResponse;
import com.bookverse.repository.BookLoanRepository;
import com.bookverse.repository.BookRepository;
import com.bookverse.repository.GenreRepository;
import com.bookverse.repository.ReservationRepository;
import com.bookverse.service.BookService;
import com.bookverse.service.UserService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Implementation of BookService interface.
 * Handles all business logic for book catalog operations.
 *
 * SIMPLIFIED VERSION - Uses unified search approach
 */
@Service
@Transactional
@RequiredArgsConstructor
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;
    private final BookMapper bookMapper;
    private final BookLoanRepository bookLoanRepository;
    private final UserService userService;
    private final ReservationRepository reservationRepository;
    private final GenreRepository genreRepository;

    // ==================== CRUD OPERATIONS ====================

    @Override
    public BookDTO createBook(BookDTO bookDTO) throws BookException {

        // 1ï¸âƒ£ ISBN uniqueness
        if (bookRepository.existsByIsbn(bookDTO.getIsbn())) {
            throw new BookException(
                    "Book with ISBN " + bookDTO.getIsbn() + " already exists");
        }

        // 2ï¸âƒ£ DTO â†’ Entity
        Book book = bookMapper.toEntity(bookDTO);

        // 3ï¸âƒ£ ðŸ”¥ SET GENRE (THIS WAS MISSING)
        Genre genre = genreRepository.findById(bookDTO.getGenreId())
                .orElseThrow(() -> new BookException("Genre not found"));

        book.setGenre(genre);
        book.setCoverImageUrl(bookDTO.getCoverImageUrl());

        // 4ï¸âƒ£ Validate copies (FIXED LOGIC)
        if (!book.isAvailableCopiesValid()) {
            throw new BookException("Available copies cannot exceed total copies");
        }

        // 5ï¸âƒ£ Save
        Book savedBook = bookRepository.save(book);

        return bookMapper.toDTO(savedBook);
    }

    @Override
    public List<BookDTO> createBooksBulk(List<BookDTO> bookDTOs) throws BookException {

        if (bookDTOs == null || bookDTOs.isEmpty()) {
            throw new BookException("Book list cannot be null or empty");
        }

        // 1ï¸âƒ£ Check duplicate ISBNs inside request
        long distinctIsbnCount = bookDTOs.stream()
                .map(BookDTO::getIsbn)
                .distinct()
                .count();

        if (distinctIsbnCount != bookDTOs.size()) {
            throw new BookException("Duplicate ISBN found in bulk request");
        }

        // 2ï¸âƒ£ Validate each DTO
        for (BookDTO dto : bookDTOs) {

            if (bookRepository.existsByIsbn(dto.getIsbn())) {
                throw new BookException("Book with ISBN " + dto.getIsbn() + " already exists");
            }

            if (dto.getGenreId() == null) {
                throw new BookException("Genre ID is required for ISBN: " + dto.getIsbn());
            }

            if (dto.getAvailableCopies() > dto.getTotalCopies()) {
                throw new BookException(
                        "Available copies cannot exceed total copies for ISBN: " + dto.getIsbn());
            }
        }

        // 3ï¸âƒ£ Convert DTO â†’ Entity + SET GENRE (CRITICAL)
        List<Book> booksToSave = new ArrayList<>();

        for (BookDTO dto : bookDTOs) {

            Book book = bookMapper.toEntity(dto);

            Genre genre = genreRepository.findById(dto.getGenreId())
                    .orElseThrow(() -> new BookException("Genre not found for ISBN: " + dto.getIsbn()));

            book.setGenre(genre);
            book.setActive(true);

            booksToSave.add(book);
        }

        // 4ï¸âƒ£ Save in batch
        List<Book> savedBooks = bookRepository.saveAll(booksToSave);

        // 5ï¸âƒ£ Convert back to DTOs
        return savedBooks.stream()
                .map(bookMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public BookDTO getBookById(Long bookId) throws BookException, UserException {
        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new BookException("Book not found with id: " + bookId));
        BookDTO bookDTO = bookMapper.toDTO(book);

        User currentUser = userService.getCurrentUser();
        boolean alreadyHasLoan = bookLoanRepository
                .existsByUserIdAndBookIdAndStatus(
                        currentUser.getId(), bookId,
                        BookLoanStatus.CHECKED_OUT);
        boolean alreadyHaveReservation = reservationRepository
                .findActiveReservationByUserAndBook(currentUser.getId(), bookId).isPresent();

        bookDTO.setAlreadyHaveLoan(alreadyHasLoan);
        bookDTO.setAlreadyHaveReservation(alreadyHaveReservation);
        return bookDTO;
    }

    @Override
    public BookDTO getBookByIsbn(String isbn) throws BookException {
        Book book = bookRepository.findByIsbn(isbn)
                .orElseThrow(() -> new BookException("Book not found with ISBN: " + isbn));
        return bookMapper.toDTO(book);
    }

    @Override
    public BookDTO updateBook(Long bookId, BookDTO bookDTO) throws BookException {

        // 1ï¸âƒ£ Fetch existing book
        Book existingBook = bookRepository.findById(bookId)
                .orElseThrow(() -> new BookException("Book not found with id: " + bookId));

        // 2ï¸âƒ£ ISBN uniqueness check (ignore same book)
        if (!existingBook.getIsbn().equals(bookDTO.getIsbn())
                && bookRepository.existsByIsbn(bookDTO.getIsbn())) {
            throw new BookException("Book with ISBN " + bookDTO.getIsbn() + " already exists");
        }

        // 3ï¸âƒ£ Validate copies
        if (bookDTO.getAvailableCopies() > bookDTO.getTotalCopies()) {
            throw new BookException("Available copies cannot exceed total copies");
        }

        // 4ï¸âƒ£ Update basic fields
        existingBook.setTitle(bookDTO.getTitle());
        existingBook.setAuthor(bookDTO.getAuthor());
        existingBook.setIsbn(bookDTO.getIsbn());
        existingBook.setPublisher(bookDTO.getPublisher());
        existingBook.setPublicationDate(bookDTO.getPublicationDate());
        existingBook.setTotalCopies(bookDTO.getTotalCopies());
        existingBook.setAvailableCopies(bookDTO.getAvailableCopies());
        existingBook.setDescription(bookDTO.getDescription());
        existingBook.setCoverImageUrl(bookDTO.getCoverImageUrl());

        // 5ï¸âƒ£ Update genre (VERY IMPORTANT)
        if (bookDTO.getGenreId() != null) {
            Genre genre = genreRepository.findById(bookDTO.getGenreId())
                    .orElseThrow(() -> new BookException("Genre not found with id: " + bookDTO.getGenreId()));
            existingBook.setGenre(genre);
        }

        // 6ï¸âƒ£ Save updated book
        Book updatedBook = bookRepository.save(existingBook);

        return bookMapper.toDTO(updatedBook);
    }

    @Override
    public void deleteBook(Long bookId) throws BookException {
        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new BookException("Book not found with id: " + bookId));

        // Soft delete - mark as inactive
        book.setActive(false);
        bookRepository.save(book);
    }

    @Override
    public void hardDeleteBook(Long bookId) throws BookException {
        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new BookException("Book not found with id: " + bookId));

        // Hard delete - permanently remove from database
        bookRepository.delete(book);
    }

    // ==================== UNIFIED SEARCH ====================

    @Override
    public PageResponse<BookDTO> searchBooksWithFilters(BookSearchRequest searchRequest) {
        Pageable pageable = createPageable(
                searchRequest.getPage(),
                searchRequest.getSize(),
                searchRequest.getSortBy(),
                searchRequest.getSortDirection());

        Page<Book> bookPage = bookRepository.searchBooksWithFilters(
                searchRequest.getSearchTerm(),
                searchRequest.getGenreId(),
                searchRequest.getAvailableOnly() != null ? searchRequest.getAvailableOnly() : false,
                pageable);

        return convertToPageResponse(bookPage);
    }

    // ==================== STATISTICS ====================

    @Override
    public long getTotalActiveBooks() {
        return bookRepository.countByActiveTrue();
    }

    @Override
    public long getTotalAvailableBooks() {
        return bookRepository.countAvailableBooks();
    }

    // ==================== HELPER METHODS ====================

    /**
     * Helper method to create Pageable object with sorting
     */
    private Pageable createPageable(int page, int size, String sortBy, String sortDirection) {
        // Validate and limit page size
        size = Math.min(size, 100); // Maximum 100 items per page
        size = Math.max(size, 1); // Minimum 1 item per page

        Sort sort = sortDirection.equalsIgnoreCase("ASC")
                ? Sort.by(sortBy).ascending()
                : Sort.by(sortBy).descending();

        return PageRequest.of(page, size, sort);
    }

    /**
     * Helper method to convert Page<Book> to PageResponse<BookDTO>
     */
    private PageResponse<BookDTO> convertToPageResponse(Page<Book> bookPage) {
        List<BookDTO> bookDTOs = bookPage.getContent()
                .stream()
                .map(bookMapper::toDTO)
                .collect(Collectors.toList());

        return new PageResponse<>(
                bookDTOs,
                bookPage.getNumber(),
                bookPage.getSize(),
                bookPage.getTotalElements(),
                bookPage.getTotalPages(),
                bookPage.isLast(),
                bookPage.isFirst(),
                bookPage.isEmpty());
    }
}
