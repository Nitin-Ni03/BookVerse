import React from "react"
import { Card, CardContent } from "@mui/material"


const StatsCard = ({ icon, value, title, subtitle, bgColor, textColor }) => {
  return (
    <Card 
      className="hover:shadow-md transition-shadow border"
      sx={{ 
        bgcolor: 'var(--color-card)', 
        color: 'var(--color-textPrimary)',
        borderColor: 'var(--color-border)',
        boxShadow: 'none',
      }}
    >
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl bg-[var(--color-backgroundSecondary)] border border-[var(--color-border)]`}>
            {icon}
          </div>

          <span className={`text-3xl font-extrabold text-[var(--color-textPrimary)]`}>
            {value}
          </span>
        </div>

        <p className="font-semibold mb-1 text-[var(--color-textPrimary)]">
          {title}
        </p>
        <p className="text-sm text-[var(--color-textSecondary)]">
          {subtitle}
        </p>
      </CardContent>
    </Card>
  )
}

export default StatsCard;
