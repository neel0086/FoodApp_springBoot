package com.example.spring_backend.services;

import com.example.spring_backend.entity.*;
import com.example.spring_backend.model.*;
import com.example.spring_backend.repository.*;
import com.example.spring_backend.verification.VerificationRepository;
import com.example.spring_backend.verification.VerificationToken;
import jakarta.mail.*;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.BeanUtils;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class FoodServiceImpl implements FoodService {
    private FoodRepository foodRepository;
    private CompanyRequestRepository companyRequestRepository;
    private CompanyRepository companyRepository;
    private SalesRepository salesRepository;
    private RoleRepository roleRepository;

    private UserRepository userRepository;

    private static final long OTP_EXPIRATION_MINUTES = 2; // Set the desired expiration time (e.g., 15 minutes)

    private VerificationRepository verificationRepository;

    public FoodServiceImpl(VerificationRepository verificationRepository,RoleRepository roleRepository,UserRepository userRepository,FoodRepository foodRepository,CompanyRequestRepository companyRequestRepository,CompanyRepository companyRepository,SalesRepository salesRepository) {
        this.userRepository=userRepository;
        this.roleRepository=roleRepository;
        this.foodRepository = foodRepository;
        this.companyRequestRepository=companyRequestRepository;
        this.companyRepository=companyRepository;
        this.salesRepository=salesRepository;
        this.verificationRepository=verificationRepository;
    }

    @Override
    public Boolean addUser(UserModel userModel,int otp) {
        System.out.println(userModel);
        VerificationToken verificationToken = verificationRepository.findByEmail(userModel.getEmail())
                .orElseThrow(() -> new NoSuchElementException("Otp expired"));
        int generatedOtp = verificationToken.getOtp();
        if(generatedOtp!=otp) {
            return false;
        }
        UserEntity userEntity=null;
        try {
            userEntity = userRepository.findByEmail(userModel.getEmail())
                    .orElseThrow(() -> new NoSuchElementException("User not found"));
            for(RoleEntity role:userEntity.getRoles()){
                if(role.getName()==userModel.getRoles().get(0).getName()){
                    return false;
                }
            }
            List<RoleEntity> existingRoles = userEntity.getRoles();
            System.out.println(userModel.getRoles().get(0).getId());
            System.out.println(userEntity.getRoles());

            existingRoles.add(roleRepository.findById(userModel.getRoles().get(0).getId())
                    .orElseThrow(() -> new IllegalArgumentException("Role not found for ID: ")));
            userEntity.setRoles(existingRoles);
            userRepository.save(userEntity);
            return true;
        }
        catch(Exception e) {
            System.out.println(e.getMessage());
            userEntity = new UserEntity();
            List<RoleModel> roles = userModel.getRoles();
            List<RoleEntity> user_role = new ArrayList<>();
            BeanUtils.copyProperties(userModel, userEntity);
            for(RoleModel r :roles){
                user_role.add(roleRepository.findById(r.getId())
                        .orElseThrow(() -> new IllegalArgumentException("Role not found for ID: " + r.getId())));
            }
            BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            userEntity.setPassword(passwordEncoder.encode(userModel.getPassword()));
            userEntity.setRoles(user_role);
            userRepository.save(userEntity);
            return true;

        }

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
                companyEntity.getLogoUrl(),
                companyEntity.getDate()

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
                        emp.getLogoUrl(),
                        emp.getDate()))
                .collect(Collectors.toList());
        return companyModels;
    }

    @Override
    public void increaseSales(String date) {
        SalesEntity salesEntity = salesRepository.findByDate(date);
        System.out.println(salesEntity);
        if(salesEntity==null) {
            salesEntity = new SalesEntity(2,date,1,0);
            salesRepository.save(salesEntity);
        }
        else {
            salesEntity.setNoOfSales(salesEntity.getNoOfSales()+1);
            salesRepository.save(salesEntity);
        }
    }
    @Override
    public void increaseCompany(String date) {
        SalesEntity salesEntity = salesRepository.findByDate(date);
        System.out.println(salesEntity);
        if(salesEntity==null) {
            salesEntity = new SalesEntity(2,date,0,1);
            salesRepository.save(salesEntity);
        }
        else {
            salesEntity.setNoOfCompany(salesEntity.getNoOfCompany()+1);
            salesRepository.save(salesEntity);
        }
    }
    @Override
    public AdminStatsModel getAllAdminStats(String date) {
        List<SalesEntity> salesEntity = salesRepository.findAll();
        List<SalesModel> salesModel = salesEntity
                .stream()
                .map(sale -> new SalesModel(
                        sale.getId(),
                        sale.getDate(),
                        sale.getNoOfSales(),
                        sale.getNoOfCompany()
                        ))
                .collect(Collectors.toList());
        BeanUtils.copyProperties(salesEntity,salesModel);
        AdminStatsModel adminStatsModel = new AdminStatsModel(salesModel);

        return adminStatsModel;
    }

    public void sendVerificationEmail(String recipientEmail, int otp) {
        String host = "smtp.gmail.com";
        Properties properties = new Properties();
        properties.put("mail.smtp.auth",true);
        properties.put("mail.smtp.starttls.enable",true);
        properties.put("mail.smtp.port","587");
        properties.put("mail.smtp.host","smtp.gmail.com");



        Session session = Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("eatifybot@gmail.com","plmeqaqppupuseaj");
            }
        });

        session.setDebug(true);
        Message m = new MimeMessage(session);
        try{
            m.setFrom(new InternetAddress("eatifybot@gmail.com"));
            m.setRecipient(Message.RecipientType.TO,new InternetAddress("neelmehta0086@gmail.com"));
            m.setSubject("Welcome to eatify");
            m.setText("Welcome to eatify , below is your otp please enter to register your account/nOTP : "+otp);
            Transport.send(m);
        }
        catch(Exception e){
            e.printStackTrace();
        }


    }

    @Override
    public void getOtp(UserModel userModel) {
        Random random = new Random();

        // Define the range of digits for the OTP
        int min = (int) Math.pow(10, 4);
        int max = (int) Math.pow(10, 5) - 1;


        // Generate a random number within the defined range
        int otpValue = random.nextInt(max - min + 1) + min;
        sendVerificationEmail(userModel.getEmail(),otpValue);

        VerificationToken verificationToken = new VerificationToken();
        verificationToken.setEmail(userModel.getEmail());
        verificationToken.setOtp(otpValue);
        verificationToken.setExpirationDateTime(LocalDateTime.now().plusMinutes(OTP_EXPIRATION_MINUTES));
        verificationRepository.save(verificationToken);

    }


}
