package com.example.spring_backend.model;

import com.example.spring_backend.entity.FoodEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Table;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CompanyModel {
    private Long id;
    private String name;
    private String address;
    private String helpLineNumber;
    private String city;
    private String state;
    private String pincode;

    private List<FoodEntity> foodEntity;

}
