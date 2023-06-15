package com.example.spring_backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CompanyModel {
    private Long id;
    private String name;
    private String email;
    private String address;
    private String helpLineNumber;
    private String city;
    private String state;
    private String pincode;
    private String startTime;
    private String endTime;
    private String documents;
    private String logoUrl;
    private String date;



    //    private List<FoodEntity> foodEntity;

}
