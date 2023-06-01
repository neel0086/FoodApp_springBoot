package com.example.spring_backend.services;

import com.example.spring_backend.entity.CompanyEntity;
import com.example.spring_backend.entity.FoodEntity;
import com.example.spring_backend.model.CompanyModel;
import com.example.spring_backend.model.FoodModel;
import com.example.spring_backend.repository.CompanyRepository;
import com.example.spring_backend.repository.FoodRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FoodServiceImpl implements FoodService {
    private FoodRepository foodRepository;
    private CompanyRepository companyRepository;

    public FoodServiceImpl(FoodRepository foodRepository,CompanyRepository companyRepository) {
        this.foodRepository = foodRepository;
        this.companyRepository=companyRepository;
    }

    @Override
    public FoodModel addItems(FoodModel foodModel,Long companyId) {
        FoodEntity foodEntity = new FoodEntity();
        BeanUtils.copyProperties(foodModel, foodEntity);
        CompanyEntity companyEntity = companyRepository.findById(companyId)
                .orElseThrow();
        foodEntity.setCompanyEntity(companyEntity);
        foodRepository.save(foodEntity);
        return foodModel;
    }

//    @Override
    public List<FoodModel> getAllItems() {
        List<FoodEntity> employeeEntities = foodRepository.findAll();
//        List<FoodModel> foodModels = employeeEntities
//                .stream()
//                .map(emp -> new FoodModel(
//                        emp.getId(),
//                        emp.getItemName(),
//                        emp.getCategory()))
//                .collect(Collectors.toList());
        return null;
    }

    @Override
    public FoodModel editEmployee(Long id, FoodModel foodModel) {
        FoodEntity foodEntity
                = foodRepository.findById(id).get();
        foodEntity.setItemName(foodModel.getItemName());
        foodEntity.setCategory(foodModel.getCategory());
        foodRepository.save(foodEntity);
        return foodModel;
    }

    @Override
    public CompanyModel addCompany(CompanyModel companyModel) {
        CompanyEntity companyEntity = new CompanyEntity();
        BeanUtils.copyProperties(companyModel,companyEntity);
        companyRepository.save(companyEntity);
        return companyModel;
    }
}
