package com.example.spring_backend.repository;

import com.example.spring_backend.entity.SalesEntity;
import com.example.spring_backend.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity,Long> {
    Optional<UserEntity> findByEmail(String email);
}
