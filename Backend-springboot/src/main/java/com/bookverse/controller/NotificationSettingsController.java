package com.bookverse.controller;

import com.bookverse.exception.UserException;
import com.bookverse.modal.User;
import com.bookverse.payload.dto.NotificationSettingsDTO;
import com.bookverse.payload.request.UpdateNotificationSettingsRequest;
import com.bookverse.payload.response.ApiResponse;
import com.bookverse.service.NotificationSettingsService;
import com.bookverse.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * REST Controller for Notification Settings
 *
 * Endpoints:
 * - GET /api/notification-settings â†’ Get user notification settings
 * - PUT /api/notification-settings â†’ Update user notification settings
 */
@RestController
@RequestMapping("/api/notification-settings")
@RequiredArgsConstructor
public class NotificationSettingsController {

    private final NotificationSettingsService notificationSettingsService;
    private final UserService userService;

    /**
     * Get user notification settings
     * GET /api/notification-settings
     */
    @GetMapping
    public ResponseEntity<NotificationSettingsDTO> getSettings(
            @RequestHeader("Authorization") String jwt) throws UserException {

        User user = userService.getUserFromJwtToken(jwt);
        NotificationSettingsDTO settings = notificationSettingsService
                .getSettings(user);

        return ResponseEntity.ok(settings);
    }

    /**
     * Update user notification settings
     * PUT /api/notification-settings
     *
     * Example request body:
     * {
     *   "emailEnabled": true,
     *   "pushEnabled": true,
     *   "bookRemindersEnabled": true,
     *   "dueDateAlertsEnabled": true,
     *   "newArrivalsEnabled": false,
     *   "recommendationsEnabled": true,
     *   "marketingEmailsEnabled": false,
     *   "reservationNotificationsEnabled": true,
     *   "subscriptionNotificationsEnabled": true
     * }
     */
    @PutMapping
    public ResponseEntity<NotificationSettingsDTO> updateSettings(
            @RequestHeader("Authorization") String jwt,
            @Valid @RequestBody UpdateNotificationSettingsRequest request) throws UserException {

        User user = userService.getUserFromJwtToken(jwt);
        NotificationSettingsDTO updatedSettings
                = notificationSettingsService.updateSettings(user, request);

        return ResponseEntity.ok(updatedSettings);
    }
}
