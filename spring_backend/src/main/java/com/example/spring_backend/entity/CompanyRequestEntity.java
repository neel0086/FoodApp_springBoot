package com.example.spring_backend.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name="CompanyRequest")
public class CompanyRequestEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String address;
    private String helpLineNumber;
    private String city;
    private String state;
    private String pincode;
    private String startTime;
    private String endTime;
    private String documents;
    private String logoUrl;
}
