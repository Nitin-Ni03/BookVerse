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
      secondary: { main: "#82589F", contrastText: "#fff" },
      success: { main: "#2ed573", contrastText: "#fff" },
      error: { main: "#ff4757" },
      background: { default: "#ffffff", paper: "#f9fafb" },
      text: { primary: "#111827", secondary: "#6b7280" },
    },
  },
  dark: {
    name: "Dark",
    palette: {
      mode: "dark",
      primary: { main: "#6366f1" },
      secondary: { main: "#a855f7", contrastText: "#fff" },
      success: { main: "#22c55e", contrastText: "#fff" },
      error: { main: "#ef4444" },
      background: { default: "#0f172a", paper: "#1e293b" },
      text: { primary: "#f3f4f6", secondary: "#9ca3af" },
    },
  },
  ocean: {
    name: "Ocean",
    palette: {
      mode: "light",
      primary: { main: "#0ea5e9" },
      secondary: { main: "#06b6d4", contrastText: "#fff" },
      success: { main: "#10b981", contrastText: "#fff" },
      error: { main: "#ef4444" },
      background: { default: "#f0f9ff", paper: "#e0f2fe" },
      text: { primary: "#0c4a6e", secondary: "#0369a1" },
    },
  },
  forest: {
    name: "Forest",
    palette: {
      mode: "light",
      primary: { main: "#059669" },
      secondary: { main: "#16a34a", contrastText: "#fff" },
      success: { main: "#65a30d", contrastText: "#fff" },
      error: { main: "#dc2626" },
      background: { default: "#ecfdf5", paper: "#d1fae5" },
      text: { primary: "#064e3b", secondary: "#047857" },
    },
  },
  sunset: {
    name: "Sunset",
    palette: {
      mode: "light",
      primary: { main: "#ea580c" },
      secondary: { main: "#db2777", contrastText: "#fff" },
      success: { main: "#16a34a", contrastText: "#fff" },
      error: { main: "#dc2626" },
      background: { default: "#fff7ed", paper: "#ffedd5" },
      text: { primary: "#7c2d12", secondary: "#9a3412" },
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
      background: "#ffffff",
      backgroundSecondary: "#f9fafb",
      backgroundTertiary: "#f3f4f6",
      textPrimary: "#111827",
      textSecondary: "#6b7280",
      textTertiary: "#9ca3af",
      border: "#e5e7eb",
      borderSecondary: "#d1d5db",
      card: "#ffffff",
      cardHover: "#f9fafb",
      input: "#ffffff",
      inputBorder: "#d1d5db",
      inputFocus: "#4F46E5",
      overlay: "rgba(0, 0, 0, 0.5)",
    },
  },
  dark: {
    name: "Dark",
    colors: {
      primary: "#6366f1",
      secondary: "#334155",
      success: "#22c55e",
      danger: "#ef4444",
      background: "#0f172a",
      backgroundSecondary: "#1e293b",
      backgroundTertiary: "#334155",
      textPrimary: "#f3f4f6",
      textSecondary: "#9ca3af",
      textTertiary: "#64748b",
      border: "#334155",
      borderSecondary: "#475569",
      card: "#1e293b",
      cardHover: "#334155",
      input: "#0f172a",
      inputBorder: "#334155",
      inputFocus: "#818cf8",
      overlay: "rgba(0, 0, 0, 0.7)",
    },
  },
  ocean: {
    name: "Ocean",
    colors: {
      primary: "#0ea5e9",
      secondary: "#bae6fd",
      success: "#10b981",
      danger: "#ef4444",
      background: "#f0f9ff",
      backgroundSecondary: "#e0f2fe",
      backgroundTertiary: "#bae6fd",
      textPrimary: "#0c4a6e",
      textSecondary: "#0369a1",
      textTertiary: "#38bdf8",
      border: "#bae6fd",
      borderSecondary: "#7dd3fc",
      card: "#e0f2fe",
      cardHover: "#bae6fd",
      input: "#ffffff",
      inputBorder: "#7dd3fc",
      inputFocus: "#0284c7",
      overlay: "rgba(12, 74, 110, 0.5)",
    },
  },
  forest: {
    name: "Forest",
    colors: {
      primary: "#059669",
      secondary: "#bbf7d0",
      success: "#65a30d",
      danger: "#dc2626",
      background: "#ecfdf5",
      backgroundSecondary: "#d1fae5",
      backgroundTertiary: "#a7f3d0",
      textPrimary: "#064e3b",
      textSecondary: "#047857",
      textTertiary: "#10b981",
      border: "#a7f3d0",
      borderSecondary: "#6ee7b7",
      card: "#d1fae5",
      cardHover: "#a7f3d0",
      input: "#ffffff",
      inputBorder: "#6ee7b7",
      inputFocus: "#059669",
      overlay: "rgba(6, 78, 59, 0.5)",
    },
  },
  sunset: {
    name: "Sunset",
    colors: {
      primary: "#ea580c",
      secondary: "#fecaca",
      success: "#16a34a",
      danger: "#dc2626",
      background: "#fff7ed",
      backgroundSecondary: "#ffedd5",
      backgroundTertiary: "#fed7aa",
      textPrimary: "#7c2d12",
      textSecondary: "#9a3412",
      textTertiary: "#fb923c",
      border: "#fed7aa",
      borderSecondary: "#fdba74",
      card: "#ffedd5",
      cardHover: "#fed7aa",
      input: "#ffffff",
      inputBorder: "#fdba74",
      inputFocus: "#ea580c",
      overlay: "rgba(124, 45, 18, 0.5)",
    },
  },
};

export const themeKeys = ["light", "dark", "ocean", "forest", "sunset"];
