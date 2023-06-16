package com.example.spring_backend.controller;

import com.example.spring_backend.model.*;
import com.example.spring_backend.services.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RequestMapping("api/v1")
@CrossOrigin
@RestController
public class FoodController {
    @Autowired
    private final FoodService foodService;
    @Autowired

    public FoodController(FoodService foodService)
    {
        this.foodService = foodService;
    }
    @PostMapping("/items/{id}")
    public FoodModel addItems(@PathVariable Long id,@RequestBody FoodModel foodModel){
        foodService.increaseSales(foodModel.getDate());
        return foodService.addItems(foodModel,id);
    }
    @GetMapping("/items")
    public List<FoodModel> getAllItems(){
        return foodService.getAllItems();
    }

    @PostMapping("/company")
    public CompanyRequestModel addCompany(@RequestBody CompanyRequestModel companyRequestModel){

        return foodService.addCompany(companyRequestModel);

    }
    @GetMapping("/company")
    public List<CompanyRequestModel> getAllCompany(){
        return foodService.getAllCompany();

    }

    @PostMapping("/company_verified")
    public CompanyModel addVerifiedCompany(@RequestBody CompanyModel companyModel){
        foodService.increaseCompany(companyModel.getDate());

        return foodService.addVerifiedCompany(companyModel);

    }
    @GetMapping("/company_verified")
    public List<CompanyModel> getAllVerifiedCompany(){
        return foodService.getAllVerifiedCompany();

    }
    @PostMapping("/get_all_admin_stats")
    public AdminStatsModel getAllAdminStats(@RequestBody Map<String, String> date){
        System.out.println(date.get("date"));
        return foodService.getAllAdminStats((String)date.get("date"));

    }

    @PostMapping("/add_user")
    public void addUser(@RequestBody UserModel userModel) {
        foodService.addUser(userModel);
    }
}
