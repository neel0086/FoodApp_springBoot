package com.example.spring_backend.repository;

import com.example.spring_backend.entity.CompanyRequestEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRequestRepository extends JpaRepository<CompanyRequestEntity,Long> {
}
