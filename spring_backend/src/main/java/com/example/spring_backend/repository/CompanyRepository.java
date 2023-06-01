package com.example.spring_backend.repository;

import com.example.spring_backend.entity.CompanyEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<CompanyEntity,Long> {
}
