package com.example.spring_backend.controller;

import com.example.spring_backend.entity.CompanyEntity;
import com.example.spring_backend.model.CompanyModel;
import com.example.spring_backend.model.CompanyRequestModel;
import com.example.spring_backend.model.FoodModel;
import com.example.spring_backend.services.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("api/v1")
@CrossOrigin
@RestController
public class FoodController {
    @Autowired
    private final FoodService foodService;

    public FoodController(FoodService foodService) {
        this.foodService = foodService;
    }
    @PostMapping("/items/{id}")
    public FoodModel addItems(@PathVariable Long id,@RequestBody FoodModel foodModel){

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
        return foodService.addVerifiedCompany(companyModel);

    }
//    @PutMapping("/employee/{id}")
//    public ResponseEntity<FoodModel> editEmployee(@PathVariable Long id , @RequestBody FoodModel foodModel){
//        foodModel = foodService.editEmployee(id, foodModel);
//        return ResponseEntity.ok(foodModel);
//    }


}
