import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { logout } from '../../store/features/auth/authSlice';
import { navigationItems, secondaryItems } from './navigationItems';
import {
  Box,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Badge,
  Chip,
  IconButton,
  Tooltip,
  alpha,
} from '@mui/material';
import {
  Logout as LogoutIcon,
  MenuBook as MenuBookIcon,
  TrendingUp as TrendingUpIcon,
} from '@mui/icons-material';

const SidebarDrawer = ({ isMobile, setMobileOpen, handleProfileMenuClose, isCollapsed }) => {
  const { myLoans } = useSelector((state) => state.bookLoans);

  const { activeSubscription } = useSelector((state) => state.subscriptions);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // Fixed: Add useLocation hook

  const handleNavigation = (path) => {
    navigate(path);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    handleProfileMenuClose();
    navigate('/login');
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const getBadgeCount = (badge) => {
    if (badge === 'loans') {
      return (
        myLoans?.filter((loan) => loan.status === 'ACTIVE' || loan.status === 'OVERDUE')
          .length || 0
      );
    }
    if (badge === 'subscription') {
      return activeSubscription ? 1 : 0;
    }
    return 0;
  };

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--color-backgroundSecondary)',
        color: 'var(--color-textPrimary)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '300px',
          background: 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 100%)',
          pointerEvents: 'none',
        },
      }}
    >
      {/* Logo Section with Animation */}
      <Box
        sx={{
          p: isCollapsed ? 1.5 : 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: isCollapsed ? 'center' : 'flex-start',
          gap: 2,
          position: 'relative',
          zIndex: 1,
          transition: 'all 0.3s ease',
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
              width: isCollapsed ? 36 : 48,
              height: isCollapsed ? 36 : 48,
              background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primaryDark, #4f46e5) 100%)',
              boxShadow: '0 8px 24px rgba(102, 126, 234, 0.4)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
            }}
          >
            <MenuBookIcon sx={{ fontSize: isCollapsed ? 20 : 28 }} />
          </Avatar>
          <Box
            sx={{
              position: 'absolute',
              width: isCollapsed ? 36 : 48,
              height: isCollapsed ? 36 : 48,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '50%',
              opacity: 0.3,
              transition: 'all 0.3s ease',
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
        {!isCollapsed && (
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                letterSpacing: 0.5,
                color: 'var(--color-primary)',
              }}
            >
              BookVerse
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
              Library Hub
            </Typography>
          </Box>
        )}
      </Box>




      {/* Main Navigation Items */}
      <List
        sx={{
          flex: 1,
          px: isCollapsed ? 1 : 2,
          py: 2,
          position: 'relative',
          zIndex: 1,
          overflowY: 'auto',
          transition: 'all 0.3s ease',
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
          const active = isActive(item.path);
          const badgeCount = item.badge ? getBadgeCount(item.badge) : 0;

          return (
            <ListItem key={item.path} disablePadding sx={{ mb: 1 }}>
              <Tooltip title={isCollapsed ? item.title : item.description} placement="right" arrow>
                <ListItemButton
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    borderRadius: 2.5,
                    py: 1.5,
                    px: isCollapsed ? 1.5 : 2,
                    justifyContent: isCollapsed ? 'center' : 'flex-start',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    bgcolor: active
                      ? 'var(--color-backgroundTertiary)'
                      : 'transparent',
                    border: active ? '1px solid var(--color-border)' : '1px solid transparent',
                    backdropFilter: active ? 'blur(10px)' : 'none',
                    '&:hover': {
                      bgcolor: active
                        ? 'var(--color-backgroundTertiary)'
                        : 'var(--color-cardHover)',
                      transform: isCollapsed ? 'none' : 'translateX(6px)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    },
                    '&::before': active && !isCollapsed
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
                      minWidth: isCollapsed ? 0 : 48,
                      color: active ? 'var(--color-primary)' : 'var(--color-textSecondary)',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {badgeCount > 0 ? (
                      <Badge
                        badgeContent={badgeCount}
                        color="error"
                        sx={{
                          '& .MuiBadge-badge': {
                            fontSize: '0.7rem',
                            height: 18,
                            minWidth: 18,
                            fontWeight: 700,
                            boxShadow: '0 2px 8px rgba(239, 68, 68, 0.4)',
                          },
                        }}
                      >
                        {item.icon}
                      </Badge>
                    ) : (
                      item.icon
                    )}
                  </ListItemIcon>
                  {!isCollapsed && (
                    <ListItemText
                      primary={item.title}
                      primaryTypographyProps={{
                        fontWeight: active ? 700 : 500,
                        fontSize: '0.95rem',
                        color: active ? 'var(--color-primary)' : 'var(--color-textSecondary)',
                      }}
                    />
                  )}
                  {active && !isCollapsed && (
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        bgcolor: '#818cf8',
                        boxShadow: '0 0 12px rgba(129, 140, 248, 0.8)',
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

      {/* Secondary Items */}
      <List sx={{ px: isCollapsed ? 1 : 2, py: 1.5, position: 'relative', zIndex: 1, transition: 'all 0.3s ease' }}>
        {secondaryItems.map((item) => {
          const active = isActive(item.path);
          return (
            <ListItem key={item.path} disablePadding sx={{ mb: 0.5 }}>
              <Tooltip title={isCollapsed ? item.title : ""} placement="right" arrow>
                <ListItemButton
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    borderRadius: 2,
                    py: 1.25,
                    px: isCollapsed ? 1.5 : 2,
                    justifyContent: isCollapsed ? 'center' : 'flex-start',
                    transition: 'all 0.3s ease',
                    bgcolor: active ? 'var(--color-backgroundTertiary)' : 'transparent',
                    border: active ? '1px solid var(--color-border)' : '1px solid transparent',
                    '&:hover': {
                      bgcolor: active
                        ? 'var(--color-backgroundTertiary)'
                        : 'var(--color-cardHover)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: isCollapsed ? 0 : 42,
                      color: active ? 'var(--color-primary)' : 'var(--color-textSecondary)',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {!isCollapsed && (
                    <ListItemText
                      primary={item.title}
                      primaryTypographyProps={{
                        fontWeight: active ? 600 : 500,
                        fontSize: '0.9rem',
                        color: active ? 'var(--color-primary)' : 'var(--color-textSecondary)',
                      }}
                    />
                  )}
                </ListItemButton>
              </Tooltip>
            </ListItem>
          );
        })}
      </List>

      {/* Logout Button */}
      <Box sx={{ p: isCollapsed ? 1 : 2, position: 'relative', zIndex: 1, transition: 'all 0.3s ease' }}>
        <Tooltip title={isCollapsed ? "Logout" : ""} placement="right" arrow>
          <ListItemButton
            onClick={handleLogout}
            sx={{
              borderRadius: 2.5,
              py: 1.5,
              px: isCollapsed ? 1.5 : 2,
              justifyContent: isCollapsed ? 'center' : 'flex-start',
              background: 'var(--color-backgroundSecondary)',
              border: '1px solid var(--color-border)',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'var(--color-backgroundTertiary)',
                border: '1px solid var(--color-border)',
                transform: isCollapsed ? 'none' : 'translateY(-2px)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: isCollapsed ? 0 : 42, color: 'var(--color-error)', display: 'flex', justifyContent: 'center' }}>
              <LogoutIcon />
            </ListItemIcon>
            {!isCollapsed && (
              <ListItemText
                primary="Logout"
                primaryTypographyProps={{
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  color: 'var(--color-textSecondary)',
                }}
              />
            )}
          </ListItemButton>
        </Tooltip>
      </Box>

      {/* Bottom Branding */}
      {!isCollapsed && (
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
            }}
          >
            © 2026 BookVerse. All rights reserved.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default SidebarDrawer;
