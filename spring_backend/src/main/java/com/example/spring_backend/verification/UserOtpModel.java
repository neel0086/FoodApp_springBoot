package com.example.spring_backend.verification;

import com.example.spring_backend.model.UserModel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserOtpModel {
    private UserModel userModel;
    private int otp;
}
