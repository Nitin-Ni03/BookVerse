import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Menu,
  MenuItem,
  Badge,
  Tooltip,
  useTheme,
  useMediaQuery,
  Collapse,
  alpha,
  Chip,
  Button,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  MenuBook as MenuBookIcon,
  EventNote as EventNoteIcon,
  RateReview as RateReviewIcon,
  Category as CategoryIcon,
  Payment as PaymentIcon,
  BookmarkAdded as ReservationIcon,
  People as PeopleIcon,
  CardMembership as CardMembershipIcon,
  Subscriptions as SubscriptionsIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  ExpandLess,
  ExpandMore,
  AccountCircle as AccountCircleIcon,
  Shield as ShieldIcon,
  TrendingUp as TrendingUpIcon,
  Gavel as FineIcon,
} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/features/auth/authSlice';
import ThemeToggle from '../../components/theme/ThemeToggle';

const drawerWidth = 280;

const navigationItems = [
  {
    title: 'Dashboard',
    path: '/admin/dashboard',
    icon: <DashboardIcon />,
    description: 'Overview & Analytics',
  },
  {
    title: 'Books',
    path: '/admin/books',
    icon: <MenuBookIcon />,
    description: 'Manage Library Books',
  },
  {
    title: 'Book Loans',
    path: '/admin/book-loans',
    icon: <EventNoteIcon />,
    description: 'Active & Historical Loans',
  },
  {
    title: 'Fines',
    path: '/admin/fines',
    icon: <FineIcon />,
    description: 'Fine Management',
  },
  {
    title: 'Reservations',
    path: '/admin/reservations',
    icon: <ReservationIcon />,
    description: 'Book Reservations',
  },

  {
    title: 'Genres',
    path: '/admin/genres',
    icon: <CategoryIcon />,
    description: 'Manage Categories',
  },
  {
    title: 'Users',
    path: '/admin/users',
    icon: <PeopleIcon />,
    description: 'User Management',
  },
  {
    title: 'Subscriptions',
    icon: <CardMembershipIcon />,
    description: 'Subscription Management',
    children: [
      {
        title: 'Subscription Plans',
        path: '/admin/subscription-plans',
        icon: <SubscriptionsIcon />,
      },
      {
        title: 'User Subscriptions',
        path: '/admin/user-subscriptions',
        icon: <CardMembershipIcon />,
      },
    ],
  },
  {
    title: 'Payments',
    path: '/admin/payments',
    icon: <PaymentIcon />,
    description: 'Transaction History',
  },
];

export default function AdminLayout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
  const [subscriptionsOpen, setSubscriptionsOpen] = useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationOpen = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setNotificationAnchorEl(null);
  };

  const handleSettingsClick = () => {
    navigate('/admin/settings');
  };

  const handleProfileClick = () => {
    handleProfileMenuClose();
    navigate('/admin/profile');
  };

  const handleSettingsMenuClick = () => {
    handleProfileMenuClose();
    navigate('/admin/settings');
  };

  const handleLogout = () => {
    dispatch(logout());
    handleProfileMenuClose();
    navigate('/login');
  };

  const handleNavigation = (path) => {
    if (path) {
      navigate(path);
      if (isMobile) {
        setMobileOpen(false);
      }
    }
  };

  const isActive = (path) => {
    if (!path) return false;
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const drawer = (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--color-backgroundSecondary)',
        color: 'var(--color-textPrimary)',
        position: 'relative',
        overflow: 'hidden',
        borderRight: '1px solid var(--color-border)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '300px',
          background: 'radial-gradient(circle at 50% 0%, rgba(220, 38, 38, 0.15) 0%, transparent 100%)',
          pointerEvents: 'none',
        },
      }}
    >
      {/* Logo Section with Animation */}
      <Box
        sx={{
          p: 3,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Avatar
            sx={{
              width: 48,
              height: 48,
              background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
              fontWeight: 'bold',
              fontSize: '1.3rem',
              boxShadow: '0 8px 24px rgba(220, 38, 38, 0.4)',
            }}
          >
            <ShieldIcon sx={{ fontSize: 28 }} />
          </Avatar>
          <Box
            sx={{
              position: 'absolute',
              width: 48,
              height: 48,
              background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
              borderRadius: '50%',
              opacity: 0.3,
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              '@keyframes pulse': {
                '0%, 100%': {
                  transform: 'scale(1)',
                  opacity: 0.3,
                },
                '50%': {
                  transform: 'scale(1.2)',
                  opacity: 0,
                },
              },
            }}
          />
        </Box>
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              letterSpacing: 0.5,
              color: 'var(--color-primary)',
            }}
          >
            Admin Panel
          </Typography>
          <Typography
            variant="caption"
            sx={{
              opacity: 0.7,
              fontWeight: 500,
              letterSpacing: 1,
              textTransform: 'uppercase',
              color: 'var(--color-textSecondary)',
            }}
          >
            Control Center
          </Typography>
        </Box>
      </Box>

      {/* Admin Info Card */}
      {/* <Box
        sx={{
          m: 2.5,
          p: 2.5,
          borderRadius: 3,
          background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(153, 27, 27, 0.15) 100%)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
          position: 'relative',
          overflow: 'hidden',
          zIndex: 1,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 12px 32px rgba(220, 38, 38, 0.2)',
            border: '1px solid rgba(255,255,255,0.12)',
          },
        }}
      >
        
        <Box
          sx={{
            position: 'absolute',
            top: -50,
            right: -50,
            width: 150,
            height: 150,
            background: 'radial-gradient(circle, rgba(220, 38, 38, 0.2) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5, position: 'relative' }}>
          <Box sx={{ position: 'relative' }}>
            <Avatar
              src={user?.profilePicture}
              sx={{
                width: 56,
                height: 56,
                border: '3px solid rgba(255,255,255,0.2)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
                fontSize: '1.5rem',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
              }}
            >
              {user?.fullName?.charAt(0)?.toUpperCase()}
            </Avatar>
            <Box
              sx={{
                position: 'absolute',
                bottom: -2,
                right: -2,
                width: 18,
                height: 18,
                borderRadius: '50%',
                bgcolor: '#22c55e',
                border: '3px solid #020617',
                boxShadow: '0 2px 8px rgba(34, 197, 94, 0.4)',
              }}
            />
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 700,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                fontSize: '1rem',
                mb: 0.25,
              }}
            >
              {user?.fullName || 'Admin User'}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                opacity: 0.7,
                fontSize: '0.8rem',
                display: 'block',
              }}
            >
              {user?.email || 'admin@example.com'}
            </Typography>
          </Box>
        </Box>

        <Chip
          icon={<ShieldIcon sx={{ fontSize: 14 }} />}
          label="Administrator"
          size="small"
          sx={{
            bgcolor: 'rgba(220, 38, 38, 0.2)',
            color: '#fca5a5',
            border: '1px solid rgba(220, 38, 38, 0.3)',
            fontWeight: 700,
            fontSize: '0.75rem',
            height: 26,
            '& .MuiChip-icon': {
              color: '#fca5a5',
            },
          }}
        />
      </Box> */}

      {/* <Divider sx={{ borderColor: 'rgba(255,255,255,0.05)', mx: 2 }} /> */}

      {/* Navigation Items */}
      <List
        sx={{
          flex: 1,
          px: 2,
          py: 2,
          overflowY: 'auto',
          position: 'relative',
          zIndex: 1,
          // Hide scrollbar for Chrome, Safari and Opera
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          // Hide scrollbar for IE, Edge and Firefox
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        {navigationItems.map((item) => {
          if (item.children) {
            return (
              <React.Fragment key={item.title}>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <Tooltip title={item.description} placement="right" arrow>
                    <ListItemButton
                      onClick={() => setSubscriptionsOpen(!subscriptionsOpen)}
                      sx={{
                        borderRadius: 2.5,
                        py: 1.5,
                        px: 2,
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        border: '1px solid transparent',
                        '&:hover': {
                          bgcolor: 'rgba(255,255,255,0.05)',
                          transform: 'translateX(6px)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        },
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 48, color: 'var(--color-textSecondary)' }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.title}
                        primaryTypographyProps={{
                          fontWeight: 500,
                          fontSize: '0.95rem',
                          color: 'var(--color-textSecondary)',
                        }}
                      />
                      {subscriptionsOpen ? (
                        <ExpandLess sx={{ color: 'var(--color-textSecondary)' }} />
                      ) : (
                        <ExpandMore sx={{ color: 'var(--color-textSecondary)' }} />
                      )}
                    </ListItemButton>
                  </Tooltip>
                </ListItem>
                <Collapse in={subscriptionsOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.children.map((child) => {
                      const active = isActive(child.path);
                      return (
                        <ListItem key={child.path} disablePadding sx={{ mb: 0.5 }}>
                          <ListItemButton
                            onClick={() => handleNavigation(child.path)}
                            sx={{
                              borderRadius: 2,
                              py: 1.2,
                              pl: 6,
                              pr: 2,
                              transition: 'all 0.3s ease',
                              bgcolor: active ? 'rgba(220, 38, 38, 0.15)' : 'transparent',
                              border: active ? '1px solid rgba(220, 38, 38, 0.3)' : '1px solid transparent',
                              '&:hover': {
                                bgcolor: active
                                  ? 'rgba(220, 38, 38, 0.2)'
                                  : 'rgba(255,255,255,0.05)',
                                transform: 'translateX(5px)',
                                border: '1px solid rgba(255,255,255,0.08)',
                              },
                            }}
                          >
                            <ListItemIcon sx={{ minWidth: 40, color: active ? 'var(--color-primary)' : 'var(--color-textSecondary)' }}>
                              {child.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={child.title}
                              primaryTypographyProps={{
                                fontWeight: active ? 700 : 500,
                                fontSize: '0.9rem',
                                color: active ? 'var(--color-primary)' : 'var(--color-textSecondary)',
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </Collapse>
              </React.Fragment>
            );
          }

          const active = isActive(item.path);
          return (
            <ListItem key={item.path} disablePadding sx={{ mb: 1 }}>
              <Tooltip title={item.description} placement="right" arrow>
                <ListItemButton
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    borderRadius: 2.5,
                    py: 1.5,
                    px: 2,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    bgcolor: active ? 'var(--color-backgroundTertiary)' : 'transparent',
                    border: active ? '1px solid var(--color-border)' : '1px solid transparent',
                    backdropFilter: active ? 'blur(10px)' : 'none',
                    '&:hover': {
                      bgcolor: active
                        ? 'var(--color-backgroundTertiary)'
                        : 'var(--color-cardHover)',
                      transform: 'translateX(6px)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    },
                    '&::before': active
                      ? {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: 4,
                        height: '70%',
                        borderRadius: '0 4px 4px 0',
                        background: 'var(--color-primary)',
                        boxShadow: '0 0 12px var(--color-primary)',
                      }
                      : {},
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 48,
                      color: active ? 'var(--color-primary)' : 'var(--color-textSecondary)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    primaryTypographyProps={{
                      fontWeight: active ? 700 : 500,
                      fontSize: '0.95rem',
                      color: active ? 'var(--color-primary)' : 'var(--color-textSecondary)',
                    }}
                  />
                  {active && (
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        bgcolor: '#fca5a5',
                        boxShadow: '0 0 12px rgba(252, 165, 165, 0.8)',
                      }}
                    />
                  )}
                </ListItemButton>
              </Tooltip>
            </ListItem>
          );
        })}
      </List>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.05)', mx: 2 }} />

      {/* Logout Button */}
      <Box sx={{ p: 2, position: 'relative', zIndex: 1 }}>
        <ListItemButton
          onClick={handleLogout}
          sx={{
            borderRadius: 2.5,
            py: 1.5,
            px: 2,
            background: 'var(--color-backgroundSecondary)',
            border: '1px solid var(--color-border)',
            transition: 'all 0.3s ease',
            '&:hover': {
              background: 'var(--color-backgroundTertiary)',
              border: '1px solid var(--color-border)',
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 24px rgba(0,0,0, 0.1)',
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 42, color: 'var(--color-error)' }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            primaryTypographyProps={{
              fontWeight: 600,
              fontSize: '0.95rem',
              color: 'var(--color-error)',
            }}
          />
        </ListItemButton>
      </Box>

      {/* Bottom Branding */}
      <Box
        sx={{
          p: 2,
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            opacity: 0.4,
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: 0.5,
            color: 'var(--color-textSecondary)'
          }}
        >
          © 2025 Admin Panel. Secured.
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'var(--color-background)' }}>
      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          bgcolor: 'var(--color-card)',
          color: 'var(--color-textPrimary)',
          borderBottom: '1px solid var(--color-border)',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
            {navigationItems.find((item) => {
              if (item.children) {
                return item.children.some((child) => isActive(child.path));
              }
              return isActive(item.path);
            })?.title || 'Admin Dashboard'}
          </Typography>

          <Tooltip title="Notifications">
            <IconButton onClick={handleNotificationOpen}>
              <Badge badgeContent={3} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={notificationAnchorEl}
            open={Boolean(notificationAnchorEl)}
            onClose={handleNotificationClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                width: 320,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
          >
            <Box sx={{ p: 2, borderBottom: '1px solid #eee' }}>
              <Typography variant="subtitle1" fontWeight="bold">Notifications</Typography>
            </Box>
            <MenuItem onClick={handleNotificationClose}>
              <ListItemIcon>
                <Avatar sx={{ bgcolor: '#eff6ff', color: '#1d4ed8' }}>
                  <EventNoteIcon fontSize="small" />
                </Avatar>
              </ListItemIcon>
              <ListItemText
                primary="New Loan Request"
                secondary="John Doe requested 'The Great Gatsby'"
                primaryTypographyProps={{ fontSize: '0.9rem', fontWeight: 500 }}
                secondaryTypographyProps={{ fontSize: '0.75rem' }}
              />
            </MenuItem>
            <MenuItem onClick={handleNotificationClose}>
              <ListItemIcon>
                <Avatar sx={{ bgcolor: '#fef2f2', color: '#b91c1c' }}>
                  <FineIcon fontSize="small" />
                </Avatar>
              </ListItemIcon>
              <ListItemText
                primary="Overdue Alert"
                secondary="Harry Potter is 3 days overdue"
                primaryTypographyProps={{ fontSize: '0.9rem', fontWeight: 500 }}
                secondaryTypographyProps={{ fontSize: '0.75rem' }}
              />
            </MenuItem>
            <MenuItem onClick={handleNotificationClose}>
              <ListItemIcon>
                <Avatar sx={{ bgcolor: '#f0fdf4', color: '#15803d' }}>
                  <SubscriptionsIcon fontSize="small" />
                </Avatar>
              </ListItemIcon>
              <ListItemText
                primary="New Subscription"
                secondary="Basic Plan subscribed by Jane"
                primaryTypographyProps={{ fontSize: '0.9rem', fontWeight: 500 }}
                secondaryTypographyProps={{ fontSize: '0.75rem' }}
              />
            </MenuItem>
            <Divider />
            <Box sx={{ p: 1, textAlign: 'center' }}>
              <Button size="small" onClick={() => {
                handleNotificationClose();
                navigate('/admin/notifications');
              }}>View All Notifications</Button>
            </Box>
          </Menu>

          <Tooltip title="Settings">
            <IconButton sx={{ ml: 1 }} onClick={handleSettingsClick}>
              <SettingsIcon />
            </IconButton>
          </Tooltip>

          <Box sx={{ ml: 2 }}>
            <ThemeToggle />
          </Box>

          <Tooltip title="Account">
            <IconButton onClick={handleProfileMenuOpen} sx={{ ml: 1 }}>
              <Avatar src={user?.profilePicture} sx={{ width: 36, height: 36 }}>
                {user?.fullName?.charAt(0)}
              </Avatar>
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleProfileMenuClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleProfileClick}>
          <ListItemIcon>
            <AccountCircleIcon fontSize="small" />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem onClick={handleSettingsMenuClick}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

      {/* Drawer */}
      <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              border: 'none',
            },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              border: 'none',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          minHeight: '100vh',
        }}
      >
        <Toolbar />
        <Box sx={{ p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
