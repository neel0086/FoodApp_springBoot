package com.example.spring_backend.repository;

import com.example.spring_backend.entity.SalesEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SalesRepository extends JpaRepository<SalesEntity,Long>{
    public SalesEntity findByDate(String date);
}
