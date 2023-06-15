package com.example.spring_backend.services;

import com.example.spring_backend.entity.CompanyEntity;
import com.example.spring_backend.model.CompanyModel;
import com.example.spring_backend.model.CompanyRequestModel;
import com.example.spring_backend.model.FoodModel;

import java.util.List;

public interface FoodService {
    FoodModel addItems(FoodModel foodModel,Long companyId);

    List<FoodModel> getAllItems();


    CompanyRequestModel addCompany(CompanyRequestModel companyRequestModel);

    List<CompanyRequestModel> getAllCompany();

    CompanyModel addVerifiedCompany(CompanyModel companyModel);


    List<CompanyModel> getAllVerifiedCompany();
    void increaseSales(String date);
}
