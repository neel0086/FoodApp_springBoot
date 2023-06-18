package com.example.spring_backend.controller;

import com.example.spring_backend.entity.RoleEntity;
import com.example.spring_backend.model.UserModel;
import com.example.spring_backend.payloads.JwtAuthRequest;
import com.example.spring_backend.payloads.JwtAuthResponse;
import com.example.spring_backend.security.JwtTokenHelper;
import com.example.spring_backend.services.FoodService;
import com.example.spring_backend.verification.UserOtpModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/api/v1/auth/")
@CrossOrigin
public class AuthController {

    @Autowired
    private JwtTokenHelper jwtTokenHelper;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private final FoodService foodService;
    public AuthController(FoodService foodService)
    {
        this.foodService = foodService;
    }
    @PostMapping("/login")
    public ResponseEntity<JwtAuthResponse> createToken(@RequestBody JwtAuthRequest request){
        this.authenticate(request.getUsername(),request.getPassword());
        UserDetails userDetails = this.userDetailsService.loadUserByUsername(request.getUsername());
        String token  = this.jwtTokenHelper.generateToken(userDetails);
        JwtAuthResponse response = new JwtAuthResponse();
        response.setToken(token);
        return new ResponseEntity<JwtAuthResponse>(response, HttpStatus.OK);

    }

    public void authenticate(String username,String password){
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username,password);
        try{
            this.authenticationManager.authenticate(authenticationToken);
        }
        catch (Exception e){
            System.out.println(e.getCause());

        }
    }

    @PostMapping("/get_otp")
    public void getOtp(@RequestBody UserModel userModel) {
        System.out.println("Hello");
        foodService.getOtp(userModel);
    }

    @PostMapping("/add_user")
    public Boolean addUser(@RequestBody UserOtpModel userOtpModel) {

        return foodService.addUser(userOtpModel.getUserModel(),userOtpModel.getOtp());
    }

    @GetMapping("/admin")
    public List<String> checkAdmin(Authentication authentication) {
        List<String> roles = new ArrayList<>();

        // Get the user's authorities (roles)
        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        // Extract role names
        for (GrantedAuthority authority : authorities) {
            roles.add(authority.getAuthority());
        }
        System.out.println(roles);
        return roles;
    }
}
