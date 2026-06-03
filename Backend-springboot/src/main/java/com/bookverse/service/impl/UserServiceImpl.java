package com.bookverse.service.impl;

import com.bookverse.configurations.JwtProvider;
import com.bookverse.domain.UserRole;
import com.bookverse.exception.UserException;
import com.bookverse.modal.User;
import com.bookverse.payload.dto.UserDTO;
import com.bookverse.repository.UserRepository;
import com.bookverse.service.UserService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

	private final UserRepository userRepository;

	private final JwtProvider jwtProvider;

	@Override
	public User getUserByEmail(String email) throws UserException {
		User user = userRepository.findByEmail(email);
		if (user == null) {
			throw new UserException("User not found with email: " + email);
		}
		return user;
	}

	@Override
	public User getUserFromJwtToken(String jwt) throws UserException {
		String email = jwtProvider.getEmailFromJwtToken(jwt);
		User user = userRepository.findByEmail(email);
		if (user == null)
			throw new UserException("user not exist with email " + email);
		return user;
	}

	@Override
	public User getUserById(Long id) throws UserException {
		return userRepository.findById(id).orElse(null);
	}

	@Override
	public Set<User> getUserByRole(UserRole role) throws UserException {
		return userRepository.findByRole(role);
	}

	@Override
	public User getCurrentUser() {
		String email = SecurityContextHolder.getContext().getAuthentication().getName();
		User user = userRepository.findByEmail(email);
		if (user == null) {
			throw new EntityNotFoundException("User not found");
		}
		return user;
	}

	@Override
	public User updateUser(User user, UserDTO userDTO) throws UserException {
		if (userDTO.getEmail() != null) {
			user.setEmail(userDTO.getEmail());
		}
		if (userDTO.getFullName() != null) {
			user.setFullName(userDTO.getFullName());
		}
		if (userDTO.getPhone() != null) {
			user.setPhone(userDTO.getPhone());
		}
		if (userDTO.getAddress() != null) {
			user.setAddress(userDTO.getAddress());
		}
		if (userDTO.getBio() != null) {
			user.setBio(userDTO.getBio());
		}
		if (userDTO.getDateOfBirth() != null) {
			user.setDateOfBirth(userDTO.getDateOfBirth());
		}

		return userRepository.save(user);
	}

	@Override
	public User updateUserVerification(Long userId) throws UserException {
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new UserException("User not found with id " + userId));
		user.setVerified(!user.getVerified());
		return userRepository.save(user);
	}

	@Override
	public List<User> getUsers() throws UserException {
		return userRepository.findAll();
	}

	@Override
	public long getTotalUserCount() {
		return userRepository.count();
	}

}
