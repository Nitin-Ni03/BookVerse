import { AccessTime, LibraryBooks } from "@mui/icons-material";
import React from "react";
import GetStatusChip from "./getStatusChip";
import { Button, Chip } from "@mui/material";
import { getDaysRemainingColor } from "./utils";
import { useNavigate } from "react-router-dom";

const CurrentLoanCard = ({ loan }) => {
  const navigate = useNavigate();
  return (
    <div
      key={loan.id}
      className="flex items-center justify-between p-6 border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-textPrimary)] rounded-xl hover:shadow-md transition-shadow"
    >
      <div className="flex items-center space-x-4 flex-1">
        {loan?.bookCoverImage ? (
          <img
            src={loan.bookCoverImage}
            alt={loan.bookTitle}
            className="w-16 h-24 rounded-lg object-cover"
          />
        ) : (
          <div className="w-16 h-24 bg-[var(--color-backgroundSecondary)] border border-[var(--color-border)] rounded-lg flex items-center justify-center">
            <LibraryBooks
              sx={{
                fontSize: 32,
                color: "var(--color-primary)",
                opacity: 0.3,
              }}
            />
          </div>
        )}

        <div className="flex-1">
          <h4 className="text-lg font-semibold text-[var(--color-textPrimary)] mb-1">
            {loan.bookTitle}
          </h4>
          <p className="text-[var(--color-textSecondary)] mb-2">{loan.bookAuthor}</p>

          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1 text-[var(--color-textSecondary)]">
              <AccessTime sx={{ fontSize: 16 }} />
              <span>Due: {new Date(loan.dueDate).toLocaleDateString()}</span>
            </div>
            <GetStatusChip status={loan.status} />
            <Chip
              label={`${
                loan.remainingDays > 0 ? loan.remainingDays : loan.overdueDays
              } days ${loan.remainingDays >= 0 ? "remaining" : "overdue"}`}
              color={getDaysRemainingColor(loan.remainingDays)}
              size="small"
              variant="outlined"
              sx={{
                color: "var(--color-textSecondary)",
                borderColor: "var(--color-border)",
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div>
          <Button
            variant="outlined"
            size="small"
            onClick={() => navigate(`/books/${loan?.bookId}`)}
            sx={{ 
              borderColor: "var(--color-primary)", 
              color: "var(--color-primary)",
              "&:hover": { borderColor: "var(--color-primary)", bgcolor: "rgba(99, 102, 241, 0.04)" }
            }}
          >
            View
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CurrentLoanCard;
