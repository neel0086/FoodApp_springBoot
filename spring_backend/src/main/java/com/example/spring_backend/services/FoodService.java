package com.example.spring_backend.services;

import com.example.spring_backend.entity.CompanyEntity;
import com.example.spring_backend.model.*;

import java.util.List;

public interface FoodService {
    Boolean addUser(UserModel userModel);

    FoodModel addItems(FoodModel foodModel, Long companyId);

    List<FoodModel> getAllItems();


    CompanyRequestModel addCompany(CompanyRequestModel companyRequestModel);

    List<CompanyRequestModel> getAllCompany();

    CompanyModel addVerifiedCompany(CompanyModel companyModel);


    List<CompanyModel> getAllVerifiedCompany();
    void increaseSales(String date);
    void increaseCompany(String date);

    AdminStatsModel getAllAdminStats(String date);

}
