import { Box, Drawer } from "@mui/material";
import React from "react";
import SidebarDrawer from "./SidebarDrawer";

const drawerWidth = 280;
const UserSidebar = ({
  mobileOpen,
  handleDrawerToggle,
  isMobile,
  setMobileOpen,
  handleProfileMenuClose,
  isCollapsed,
}) => {
  const currentWidth = isCollapsed ? 72 : drawerWidth;
  return (
    <Box
      component="nav"
      sx={{ 
        width: { md: currentWidth }, 
        flexShrink: { md: 0 },
        transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            border: "none",
          },
        }}
      >
        <SidebarDrawer
          handleProfileMenuClose={handleProfileMenuClose}
          isMobile={isMobile}
          setMobileOpen={setMobileOpen}
          isCollapsed={false}
        />
      </Drawer>

      {/* Desktop drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: currentWidth,
            border: "none",
            transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            overflowX: "hidden",
          },
        }}
        open
      >
        <SidebarDrawer
          isMobile={isMobile}
          setMobileOpen={setMobileOpen}
          handleProfileMenuClose={handleProfileMenuClose}
          isCollapsed={isCollapsed}
        />
      </Drawer>
    </Box>
  );
};

export default UserSidebar;
