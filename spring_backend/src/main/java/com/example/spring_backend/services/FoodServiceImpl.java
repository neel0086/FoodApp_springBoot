package com.example.spring_backend.services;

import com.example.spring_backend.entity.CompanyEntity;
import com.example.spring_backend.entity.CompanyRequestEntity;
import com.example.spring_backend.entity.FoodEntity;
import com.example.spring_backend.model.CompanyModel;
import com.example.spring_backend.model.CompanyRequestModel;
import com.example.spring_backend.model.FoodModel;
import com.example.spring_backend.repository.CompanyRepository;
import com.example.spring_backend.repository.CompanyRequestRepository;
import com.example.spring_backend.repository.FoodRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FoodServiceImpl implements FoodService {
    private FoodRepository foodRepository;
    private CompanyRequestRepository companyRequestRepository;
    private CompanyRepository companyRepository;


    public FoodServiceImpl(FoodRepository foodRepository,CompanyRequestRepository companyRequestRepository,CompanyRepository companyRepository) {
        this.foodRepository = foodRepository;
        this.companyRequestRepository=companyRequestRepository;
        this.companyRepository=companyRepository;
    }

    @Override
    public FoodModel addItems(FoodModel foodModel,Long companyId) {
//        FoodEntity foodEntity = new FoodEntity();
//        BeanUtils.copyProperties(foodModel, foodEntity);
//        CompanyEntity companyEntity = companyRepository.findById(companyId)
//                .orElseThrow();
//        foodEntity.setCompanyEntity(companyEntity);
//        foodRepository.save(foodEntity);
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
    public CompanyRequestModel addCompany(CompanyRequestModel companyRequestModel) {
        CompanyRequestEntity companyRequestEntity = new CompanyRequestEntity();
        BeanUtils.copyProperties(companyRequestModel,companyRequestEntity);
        companyRequestRepository.save(companyRequestEntity);
        return companyRequestModel;
    }

    @Override
    public List<CompanyRequestModel> getAllCompany() {
        List<CompanyRequestEntity> companyRequestEntities = companyRequestRepository.findAll();
        List<CompanyRequestModel> companyRequestModels = companyRequestEntities
                .stream()
                .map(emp -> new CompanyRequestModel(
                        emp.getId(),
                        emp.getName(),
                        emp.getEmail(),
                        emp.getAddress(),
                        emp.getHelpLineNumber(),
                        emp.getCity(),
                        emp.getState(),
                        emp.getPincode(),
                        emp.getStartTime(),
                        emp.getEndTime(),
                        emp.getDocuments(),
                        emp.getLogoUrl()))
                .collect(Collectors.toList());
        return companyRequestModels;
    }

    @Override
    public CompanyModel addVerifiedCompany(CompanyModel companyModel) {
        CompanyEntity companyEntity = new CompanyEntity();
        BeanUtils.copyProperties(companyModel,companyEntity);
        companyRepository.save(companyEntity);
        return companyModel;
    }
}
