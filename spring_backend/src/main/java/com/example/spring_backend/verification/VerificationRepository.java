package com.example.spring_backend.verification;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface VerificationRepository extends JpaRepository<VerificationToken,Long> {
    Optional<VerificationToken> findByEmail(String otp);
}
