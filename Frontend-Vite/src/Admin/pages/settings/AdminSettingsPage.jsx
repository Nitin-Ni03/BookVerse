import React, { useState } from 'react';
import {
    Card,
    CardContent,
    Switch,
    FormControlLabel,
    Button,
    Divider,
    Snackbar,
    Alert,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Box,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const AdminSettingsPage = () => {
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
    const [deleteAccountDialog, setDeleteAccountDialog] = useState(false);

    // Notification Settings
    const [notifications, setNotifications] = useState({
        emailNotifications: true,
        pushNotifications: true,
        systemAlerts: true,
        userReports: true,
        newBookRequests: false,
        securityAlerts: true,
        maintenanceUpdates: false,
    });

    const handleNotificationChange = (setting) => {
        setNotifications((prev) => ({
            ...prev,
            [setting]: !prev[setting],
        }));
        showSnackbar('Notification settings updated', 'success');
    };

    const showSnackbar = (message, severity = 'success') => {
        setSnackbar({ open: true, message, severity });
    };

    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    return (
        <Box sx={{ p: 0 }}>
            {/* Header */}
            <div className="mb-8 ">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Settings
                </h1>
                <p className="text-lg text-gray-600">
                    Manage system configurations and admin preferences
                </p>
            </div>

            <div className="space-y-6 max-w-4xl">
                {/* Notification Settings */}
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="p-3 bg-red-100 rounded-lg">
                                <NotificationsIcon sx={{ fontSize: 28, color: '#dc2626' }} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">Notifications</h2>
                                <p className="text-gray-600">Manage system alerts and updates</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={notifications.emailNotifications}
                                        onChange={() => handleNotificationChange('emailNotifications')}
                                        sx={{
                                            '& .Mui-checked': { color: '#dc2626' },
                                            '& .Mui-checked + .MuiSwitch-track': { bgcolor: '#dc2626' },
                                        }}
                                    />
                                }
                                label={
                                    <div>
                                        <p className="font-medium text-gray-900">Email Notifications</p>
                                        <p className="text-sm text-gray-600">Receive critical system updates via email</p>
                                    </div>
                                }
                            />

                            <Divider />

                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={notifications.pushNotifications}
                                        onChange={() => handleNotificationChange('pushNotifications')}
                                        sx={{
                                            '& .Mui-checked': { color: '#dc2626' },
                                            '& .Mui-checked + .MuiSwitch-track': { bgcolor: '#dc2626' },
                                        }}
                                    />
                                }
                                label={
                                    <div>
                                        <p className="font-medium text-gray-900">Push Notifications</p>
                                        <p className="text-sm text-gray-600">Receive browser notifications</p>
                                    </div>
                                }
                            />

                            <Divider />

                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={notifications.systemAlerts}
                                        onChange={() => handleNotificationChange('systemAlerts')}
                                        sx={{
                                            '& .Mui-checked': { color: '#dc2626' },
                                            '& .Mui-checked + .MuiSwitch-track': { bgcolor: '#dc2626' },
                                        }}
                                    />
                                }
                                label={
                                    <div>
                                        <p className="font-medium text-gray-900">System Alerts</p>
                                        <p className="text-sm text-gray-600">Warnings about high load or errors</p>
                                    </div>
                                }
                            />

                            <Divider />

                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={notifications.securityAlerts}
                                        onChange={() => handleNotificationChange('securityAlerts')}
                                        sx={{
                                            '& .Mui-checked': { color: '#dc2626' },
                                            '& .Mui-checked + .MuiSwitch-track': { bgcolor: '#dc2626' },
                                        }}
                                    />
                                }
                                label={
                                    <div>
                                        <p className="font-medium text-gray-900">Security Alerts</p>
                                        <p className="text-sm text-gray-600">Suspicious activity notifications</p>
                                    </div>
                                }
                            />
                        </div>
                    </CardContent>
                </Card>

            </div>


            {/* Snackbar */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={4000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbar.severity}
                    sx={{ width: '100%' }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default AdminSettingsPage;
