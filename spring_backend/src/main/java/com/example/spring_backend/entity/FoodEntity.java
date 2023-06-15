package com.example.spring_backend.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name="FoodItems")
public class FoodEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String itemName;
    private String category;
    private Integer price;
    private String description;
    private Integer rating;
    private Integer discount;
    private String foodUrl;
    private String Date;


    @ManyToOne
    @JoinColumn(name = "company_id")
    private CompanyEntity companyEntity;
}
