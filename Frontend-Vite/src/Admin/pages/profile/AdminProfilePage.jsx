import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserProfile } from '../../../store/features/auth/authThunk';
import {
    TextField,
    Button,
    Avatar,
    Chip,
    Card,
    CardContent,
    IconButton,
    Snackbar,
    Alert,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Box,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BadgeIcon from '@mui/icons-material/Badge';
import CakeIcon from '@mui/icons-material/Cake';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VerifiedIcon from '@mui/icons-material/Verified';
import ShieldIcon from '@mui/icons-material/Shield';

const AdminProfilePage = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const [isEditing, setIsEditing] = useState(false);
    const [avatarDialogOpen, setAvatarDialogOpen] = useState(false);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

    // Form state
    const [formData, setFormData] = useState({
        fullName: user?.fullName || 'Admin User',
        email: user?.email || 'admin@example.com',
        phone: user?.phone || '+1 (555) 123-4567',
        dateOfBirth: user?.dateOfBirth || '1985-06-20',
        address: user?.address || 'Admin HQ, Library St.',
        bio: user?.bio || 'System Administrator and Library Manager.',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        try {
            await dispatch(updateUserProfile(formData)).unwrap();
            setIsEditing(false);
            showSnackbar('Profile updated successfully!', 'success');
        } catch (error) {
            showSnackbar(error || 'Failed to update profile', 'error');
        }
    };

    const handleCancel = () => {
        setFormData({
            fullName: user?.fullName || 'Admin User',
            email: user?.email || 'admin@example.com',
            phone: user?.phone || '+1 (555) 123-4567',
            dateOfBirth: user?.dateOfBirth || '1985-06-20',
            address: user?.address || 'Admin HQ, Library St.',
            bio: user?.bio || 'System Administrator and Library Manager.',
        });
        setIsEditing(false);
    };

    const handleAvatarUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            showSnackbar('Avatar updated successfully!', 'success');
            setAvatarDialogOpen(false);
        }
    };

    const showSnackbar = (message, severity = 'success') => {
        setSnackbar({ open: true, message, severity });
    };

    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    return (
        <Box sx={{ p: 0 }}>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Profile</h1>
                <p className="text-gray-600">Manage your administrator account information.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Sidebar - Avatar */}
                <div className="lg:col-span-1 space-y-6">
                    <Card>
                        <CardContent className="text-center p-8">
                            <div className="relative inline-block mb-4">
                                <Avatar
                                    sx={{
                                        width: 120,
                                        height: 120,
                                        background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
                                        fontSize: '3rem',
                                        fontWeight: 'bold',
                                        margin: '0 auto',
                                    }}
                                >
                                    {formData.fullName.charAt(0).toUpperCase()}
                                </Avatar>
                                <IconButton
                                    onClick={() => setAvatarDialogOpen(true)}
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        right: 0,
                                        bgcolor: '#dc2626',
                                        color: 'white',
                                        '&:hover': { bgcolor: '#b91c1c' },
                                    }}
                                    size="small"
                                >
                                    <PhotoCameraIcon fontSize="small" />
                                </IconButton>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                {formData.fullName}
                            </h3>
                            <p className="text-gray-600 mb-4">{formData.email}</p>

                            <Chip
                                icon={<ShieldIcon />}
                                label="Administrator"
                                sx={{
                                    bgcolor: 'rgba(220, 38, 38, 0.1)',
                                    color: '#dc2626',
                                    fontWeight: 600,
                                    mb: 2,
                                }}
                            />
                        </CardContent>
                    </Card>
                </div>

                {/* Right Content - Profile Form */}
                <div className="lg:col-span-2 space-y-6">
                    <Card>
                        <CardContent className="p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Profile Information
                                </h3>
                                {!isEditing ? (
                                    <Button
                                        startIcon={<EditIcon />}
                                        onClick={() => setIsEditing(true)}
                                        sx={{ color: '#dc2626', fontWeight: 600 }}
                                    >
                                        Edit Profile
                                    </Button>
                                ) : (
                                    <div className="flex space-x-2">
                                        <Button onClick={handleCancel} variant="outlined" color="error">
                                            Cancel
                                        </Button>
                                        <Button
                                            onClick={handleSave}
                                            variant="contained"
                                            sx={{ bgcolor: '#dc2626', '&:hover': { bgcolor: '#b91c1c' } }}
                                        >
                                            Save Changes
                                        </Button>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-6">
                                {/* Full Name */}
                                <div>
                                    <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                                        <BadgeIcon sx={{ fontSize: 20 }} />
                                        <span>Full Name</span>
                                    </label>
                                    <TextField
                                        fullWidth
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                                        <EmailIcon sx={{ fontSize: 20 }} />
                                        <span>Email Address</span>
                                    </label>
                                    <TextField
                                        fullWidth
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                                        <PhoneIcon sx={{ fontSize: 20 }} />
                                        <span>Phone Number</span>
                                    </label>
                                    <TextField
                                        fullWidth
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </div>

                                {/* Date of Birth */}
                                <div>
                                    <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                                        <CakeIcon sx={{ fontSize: 20 }} />
                                        <span>Date of Birth</span>
                                    </label>
                                    <TextField
                                        fullWidth
                                        name="dateOfBirth"
                                        type="date"
                                        value={formData.dateOfBirth}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </div>

                                {/* Address */}
                                <div>
                                    <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                                        <LocationOnIcon sx={{ fontSize: 20 }} />
                                        <span>Address</span>
                                    </label>
                                    <TextField
                                        fullWidth
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        multiline
                                        rows={2}
                                    />
                                </div>

                                {/* Bio */}
                                <div>
                                    <label className="text-gray-700 font-medium mb-2 block">
                                        Bio
                                    </label>
                                    <TextField
                                        fullWidth
                                        name="bio"
                                        value={formData.bio}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        multiline
                                        rows={3}
                                        placeholder="Tell us about yourself..."
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Avatar Upload Dialog */}
            <Dialog
                open={avatarDialogOpen}
                onClose={() => setAvatarDialogOpen(false)}
                PaperProps={{ sx: { borderRadius: 2 } }}
            >
                <DialogTitle>Update Profile Picture</DialogTitle>
                <DialogContent>
                    <div className="text-center py-4">
                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="avatar-upload"
                            type="file"
                            onChange={handleAvatarUpload}
                        />
                        <label htmlFor="avatar-upload">
                            <Button
                                variant="contained"
                                component="span"
                                startIcon={<PhotoCameraIcon />}
                                sx={{ bgcolor: '#dc2626', '&:hover': { bgcolor: '#b91c1c' } }}
                            >
                                Choose Photo
                            </Button>
                        </label>
                        <p className="text-sm text-gray-600 mt-4">
                            Recommended: Square image, at least 400x400px
                        </p>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setAvatarDialogOpen(false)}>Cancel</Button>
                </DialogActions>
            </Dialog>

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

export default AdminProfilePage;
