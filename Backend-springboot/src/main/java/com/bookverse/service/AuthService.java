package com.bookverse.service;

import com.bookverse.exception.UserException;
import com.bookverse.payload.dto.UserDTO;
import com.bookverse.payload.response.AuthResponse;



public interface AuthService {
    AuthResponse login(String username, String password) throws UserException;
    AuthResponse signup(UserDTO req) throws UserException;

    void createPasswordResetToken(String email) throws UserException;
    void resetPassword(String token, String newPassword);
}
