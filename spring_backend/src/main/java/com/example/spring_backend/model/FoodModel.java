package com.example.spring_backend.model;

import com.example.spring_backend.entity.CompanyEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FoodModel {

    private int id;
    private String itemName;
    private String category;
    private Integer price;
    private String description;
    private Integer rating;
    private Integer discount;

    private CompanyEntity companyEntity;

}
