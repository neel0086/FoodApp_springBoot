package com.example.spring_backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class SalesModel {
    private int id;
    private String date;
    private int noOfSales;
}
