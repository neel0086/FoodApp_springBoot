package com.example.spring_backend.repository;

import com.example.spring_backend.entity.SalesEntity;
import com.example.spring_backend.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity,Long> {
}
