package com.bookverse.payload.request;

import lombok.Data;

@Data
public class ForgotPasswordRequest {
    private String email;
}