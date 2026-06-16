/**
 * Single Main Theme Configuration
 * Author: Ashok Zarmariya
 */

import { createTheme } from "@mui/material/styles";

// Return the MUI theme object
export const getTheme = (themeKey = "light") => {
  const config = themeConfigs[themeKey] || themeConfigs.light;
  return createTheme(config);
};

export const themeConfigs = {
  light: {
    name: "Light",
    palette: {
      mode: "light",
      primary: { main: "#4F46E5" },
      secondary: { main: "#475569", contrastText: "#fff" },
      success: { main: "#10B981", contrastText: "#fff" },
      error: { main: "#EF4444" },
      background: { default: "#f8fafc", paper: "#ffffff" },
      text: { primary: "#0f172a", secondary: "#475569" },
    },
  },
  dark: {
    name: "Dark",
    palette: {
      mode: "dark",
      primary: { main: "#6366f1" },
      secondary: { main: "#94a3b8", contrastText: "#0f172a" },
      success: { main: "#10B981", contrastText: "#fff" },
      error: { main: "#EF4444" },
      background: { default: "#0f172a", paper: "#1e293b" },
      text: { primary: "#f8fafc", secondary: "#94a3b8" },
    },
  },
};

// For non-MUI CSS variable usage
export const themes = {
  light: {
    name: "Light",
    colors: {
      primary: "#4F46E5",
      secondary: "#d2dae2",
      success: "#2ed573",
      danger: "#ff4757",
      background: "#f8fafc",
      backgroundSecondary: "#ffffff",
      backgroundTertiary: "#f1f5f9",
      textPrimary: "#0f172a",
      textSecondary: "#475569",
      textTertiary: "#94a3b8",
      border: "#e2e8f0",
      borderSecondary: "#cbd5e1",
      card: "#ffffff",
      cardHover: "#f8fafc",
      input: "#ffffff",
      inputBorder: "#cbd5e1",
      inputFocus: "#4F46E5",
      overlay: "rgba(15, 23, 42, 0.5)",
    },
  },
  dark: {
    name: "Dark",
    colors: {
      primary: "#6366f1",
      secondary: "#475569",
      success: "#10B981",
      danger: "#EF4444",
      background: "#0f172a",
      backgroundSecondary: "#1e293b",
      backgroundTertiary: "#334155",
      textPrimary: "#f8fafc",
      textSecondary: "#94a3b8",
      textTertiary: "#64748b",
      border: "#334155",
      borderSecondary: "#475569",
      card: "#1e293b",
      cardHover: "#334155",
      input: "#0f172a",
      inputBorder: "#334155",
      inputFocus: "#6366f1",
      overlay: "rgba(15, 23, 42, 0.85)",
    },
  },
};

export const themeKeys = ["light", "dark"];
