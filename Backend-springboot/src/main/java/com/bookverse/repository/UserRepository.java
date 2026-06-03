package com.bookverse.repository;


import com.bookverse.domain.UserRole;
import com.bookverse.modal.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);
    Set<User> findByRole(UserRole role);
}
