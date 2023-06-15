package com.example.spring_backend.services;

import com.example.spring_backend.entity.CompanyEntity;
import com.example.spring_backend.entity.CompanyRequestEntity;
import com.example.spring_backend.entity.FoodEntity;
import com.example.spring_backend.entity.SalesEntity;
import com.example.spring_backend.model.CompanyModel;
import com.example.spring_backend.model.CompanyRequestModel;
import com.example.spring_backend.model.FoodModel;
import com.example.spring_backend.model.SalesModel;
import com.example.spring_backend.repository.CompanyRepository;
import com.example.spring_backend.repository.CompanyRequestRepository;
import com.example.spring_backend.repository.FoodRepository;
import com.example.spring_backend.repository.SalesRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FoodServiceImpl implements FoodService {
    private FoodRepository foodRepository;
    private CompanyRequestRepository companyRequestRepository;
    private CompanyRepository companyRepository;
    private SalesRepository salesRepository;


    public FoodServiceImpl(FoodRepository foodRepository,CompanyRequestRepository companyRequestRepository,CompanyRepository companyRepository,SalesRepository salesRepository) {
        this.foodRepository = foodRepository;
        this.companyRequestRepository=companyRequestRepository;
        this.companyRepository=companyRepository;
        this.salesRepository=salesRepository;
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

    private CompanyModel mapCompanyEntityToModel(CompanyEntity companyEntity) {
        return new CompanyModel(
                companyEntity.getId(),
                companyEntity.getName(),
                companyEntity.getEmail(),
                companyEntity.getAddress(),
                companyEntity.getHelpLineNumber(),
                companyEntity.getCity(),
                companyEntity.getState(),
                companyEntity.getPincode(),
                companyEntity.getStartTime(),
                companyEntity.getEndTime(),
                companyEntity.getDocuments(),
                companyEntity.getLogoUrl()
        );
    }
//    @Override
    public List<FoodModel> getAllItems() {
        List<FoodEntity> employeeEntities = foodRepository.findAll();
        List<FoodModel> foodModels = employeeEntities
                .stream()
                .map(emp -> new FoodModel(
                        emp.getId(),
                        emp.getItemName(),
                        emp.getCategory(),
                        emp.getPrice(),
                        emp.getDescription(),
                        emp.getRating(),
                        emp.getDiscount(),
                        emp.getFoodUrl(),
                        emp.getDate(),
                        mapCompanyEntityToModel(emp.getCompanyEntity())
                ))
                .collect(Collectors.toList());
        return foodModels;
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
        CompanyRequestEntity companyRequestEntity = companyRequestRepository.findById(companyModel.getId()).get();
        companyRequestRepository.delete(companyRequestEntity);
        CompanyEntity companyEntity = new CompanyEntity();
        BeanUtils.copyProperties(companyModel,companyEntity);
        companyRepository.save(companyEntity);
        return companyModel;
    }
    @Override
    public List<CompanyModel> getAllVerifiedCompany() {
        List<CompanyEntity> companyEntities = companyRepository.findAll();
        List<CompanyModel> companyModels = companyEntities
                .stream()
                .map(emp -> new CompanyModel(
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
        return companyModels;
    }

    @Override
    public void increaseSales(String date) {
        SalesEntity salesEntity = salesRepository.findByDate(date);
        System.out.println(salesEntity);
        if(salesEntity==null) {
            salesEntity = new SalesEntity(2,date,1);
            salesRepository.save(salesEntity);
        }
        else {
            salesEntity.setNoOfSales(salesEntity.getNoOfSales()+1);
            salesRepository.save(salesEntity);
        }
    }
}
