package com.bookverse.payload.dto;

import com.bookverse.domain.UserRole;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class UserDTO {
    private Long id;
    private String email;
    private String password;
    private String phone;
    private String fullName;
    private String address;
    private String bio;
    private String dateOfBirth;
    private UserRole role;
    private String username;

    private LocalDateTime lastLogin;

}
