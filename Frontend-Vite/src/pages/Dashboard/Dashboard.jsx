import React, { useState, useEffect } from "react";

import {
  Card,
  CardContent,
  Button,
  Chip,
  LinearProgress,
  Tab,
  Tabs,
  Box,
  Avatar,
} from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import HistoryIcon from "@mui/icons-material/History";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import { useDispatch } from "react-redux";

import { fetchMyBookLoans } from "../../store/features/bookLoans/bookLoanThunk";
import CurrentLoans from "./CurrentLoans";
import { useSelector } from "react-redux";
import Reservation from "./Reservation";
import ReadingHistory from "./ReadingHistory";
import Recommandation from "./Recommandation";
import { statsConfig } from "./StateConfig";
import StatsCard from "./StateCard";

/**
 * Dashboard Component
 * User dashboard showing borrowed books, reservations, reading stats, and recommendations
 */
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const { myLoans } = useSelector((store) => store.bookLoans);
  const { reservations } = useSelector((store) => store.reservations);

  // Mock data - Replace with actual API calls
  const [stats] = useState({
    currentLoans: 3,
    activeReservations: 2,
    booksRead: 24,
    readingStreak: 7,
  });

  const loadLoans = () => {
    const status = null;
    dispatch(
      fetchMyBookLoans({
        status,
        page: 0,
        size: 20,
      })
    );
  };

  useEffect(() => {
    loadLoans();
  }, [auth.user]);

  const readingProgress = Math.min((stats.booksRead / 30) * 100, 100); // Goal: 30 books
  const statsData = statsConfig({ myLoans, reservations, stats });
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-textPrimary)] py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Book Animation Banner */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 p-6 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl shadow-sm relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-4xl font-extrabold text-[var(--color-textPrimary)] mb-2">
              My{" "}
              <span className="text-[var(--color-primary)]">
                Dashboard
              </span>
            </h1>
            <p className="text-lg text-[var(--color-textSecondary)]">
              Welcome back, {auth.user?.fullName || "Reader"}! Track your reading journey and manage your library.
            </p>
          </div>
          
          {/* Animated SVG Book */}
          <div className="mt-6 md:mt-0 flex items-center justify-center relative z-10">
            <div className="book-animation-container">
              <svg className="book-svg" viewBox="0 0 100 100" width="100" height="100">
                <path className="book-spine" d="M47,20 L47,80 C47,83 50,85 53,83 L53,23 C50,25 47,23 47,20 Z" fill="var(--color-primary)" />
                <path className="book-page-left" d="M10,23 C30,23 45,26 47,20 L47,80 C45,86 30,83 10,83 Z" fill="var(--color-card)" stroke="var(--color-primary)" strokeWidth="2" />
                <path className="book-page-right" d="M90,23 C70,23 55,26 53,20 L53,80 C55,86 70,83 90,83 Z" fill="var(--color-card)" stroke="var(--color-primary)" strokeWidth="2" />
                <path className="book-cover-left" d="M8,22 C30,22 45,25 47,19 L47,79 C45,85 30,82 8,82 Z" fill="none" stroke="var(--color-primary)" strokeWidth="1" />
                <path className="book-cover-right" d="M92,22 C70,22 55,25 53,19 L53,79 C55,85 70,82 92,82 Z" fill="none" stroke="var(--color-primary)" strokeWidth="1" />
                {/* Flipping Page */}
                <g className="book-page-flip">
                  <path d="M47,20 C45,26 30,23 10,23 L10,83 C30,83 45,86 47,80 Z" fill="var(--color-backgroundSecondary)" stroke="var(--color-primary)" strokeWidth="1.5" />
                </g>
              </svg>
            </div>
            <style>{`
              .book-animation-container {
                display: flex;
                align-items: center;
                justify-content: center;
                filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
              }
              .book-svg {
                animation: floatBook 3s ease-in-out infinite;
              }
              .book-page-flip {
                transform-origin: 47px 50px;
                animation: flipPage 3s ease-in-out infinite;
                backface-visibility: hidden;
              }
              @keyframes floatBook {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-6px) rotate(1deg); }
              }
              @keyframes flipPage {
                0% { transform: scaleX(0); opacity: 0; }
                20% { transform: scaleX(1); opacity: 1; }
                80% { transform: scaleX(-1); opacity: 1; }
                100% { transform: scaleX(0); opacity: 0; }
              }
            `}</style>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsData.map((item) => (
            <StatsCard
              key={item.id}
              icon={item.icon}
              value={item.value}
              title={item.title}
              subtitle={item.subtitle}
              bgColor={item.bgColor}
              textColor={item.textColor}
            />
          ))}
        </div>

        {/* Reading Progress */}
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-[var(--color-textPrimary)] mb-1">
                2025 Reading Goal
              </h3>
              <p className="text-[var(--color-textSecondary)]">
                {stats.booksRead} of 30 books read
              </p>
            </div>
            <div className="p-3 bg-[var(--color-backgroundSecondary)] border border-[var(--color-border)] rounded-full">
              <AutoAwesomeIcon sx={{ fontSize: 32, color: "var(--color-primary)" }} />
            </div>
          </div>
          <LinearProgress
            variant="determinate"
            value={readingProgress}
            sx={{
              height: 10,
              borderRadius: 5,
              backgroundColor: "var(--color-border)",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "var(--color-primary)",
                borderRadius: 5,
              },
            }}
          />
          <p className="text-sm text-[var(--color-textSecondary)] mt-2">
            {Math.round(readingProgress)}% complete
          </p>
        </div>

        {/* Tabs Section */}
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl shadow-sm overflow-hidden">
          <Box sx={{ borderBottom: 1, borderColor: "var(--color-border)" }}>
            <Tabs
              value={activeTab}
              onChange={(e, newValue) => setActiveTab(newValue)}
              sx={{
                "& .MuiTab-root": {
                  textTransform: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--color-textSecondary)",
                },
                "& .Mui-selected": {
                  color: "var(--color-primary) !important",
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "var(--color-primary)",
                },
              }}
            >
              <Tab label="Current Loans" />
              <Tab label="Reservations" />
              <Tab label="Reading History" />
              <Tab label="Recommendations" />
            </Tabs>
          </Box>

          {/* Current Loans Tab */}
          {activeTab === 0 && <CurrentLoans />}

          {/* Reservations Tab */}
          {activeTab === 1 && <Reservation />}

          {/* Reading History Tab */}
          {activeTab === 2 && <ReadingHistory />}

          {/* Recommendations Tab */}
          {activeTab === 3 && <Recommandation />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

