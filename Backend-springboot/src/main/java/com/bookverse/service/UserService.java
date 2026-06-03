package com.bookverse.service;

import com.bookverse.domain.UserRole;
import com.bookverse.exception.UserException;
import com.bookverse.modal.User;
import com.bookverse.payload.dto.UserDTO;

import java.util.List;
import java.util.Set;
//import com.bookverse.payload.request.UpdateUserDto;

public interface UserService {
	User getUserByEmail(String email) throws UserException;

	User getUserFromJwtToken(String jwt) throws UserException;

	User getUserById(Long id) throws UserException;

	Set<User> getUserByRole(UserRole role) throws UserException;

	List<User> getUsers() throws UserException;

	User getCurrentUser() throws UserException;

	User updateUser(User user, UserDTO userDTO) throws UserException;

	User updateUserVerification(Long userId) throws UserException;

	/**
	 * Get total count of all registered users (Admin only)
	 */
	long getTotalUserCount();
}
