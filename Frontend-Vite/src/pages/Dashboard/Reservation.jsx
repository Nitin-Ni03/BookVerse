import { EventAvailable } from '@mui/icons-material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import GetStatusChip from './getStatusChip';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMyReservations } from '../../store/features/reservations/reservationThunk';
import { useDispatch } from 'react-redux';

const Reservation = () => {
    
    const navigate = useNavigate();
      const { reservations } = useSelector((state) => state.reservations);
      const dispatch = useDispatch();
        useEffect(() => {
         
          loadReservations();
        }, []);
      
        const loadReservations=()=>{
          dispatch(
            getMyReservations({
             
              page: 0,
              size: 20,
            })
          );
        }
  return (
 <div className="p-6 bg-[var(--color-card)] text-[var(--color-textPrimary)]">
  <h3 className="text-2xl font-bold text-[var(--color-textPrimary)] mb-6">
    Your Book Reservations
  </h3>

  {/* EMPTY STATE */}
  {reservations.length === 0 ? (
    <div className="text-center py-12 border border-dashed border-[var(--color-border)] rounded-xl">
      <p className="text-[var(--color-textSecondary)] text-lg">
        📚 You haven’t reserved any books yet
      </p>
      <p className="text-sm text-[var(--color-textSecondary)] opacity-80 mt-2">
        Browse the library and reserve your next read!
      </p>
    </div>
  ) : (
    <div className="space-y-4">
      {reservations.map((reservation) => (
        <div
          key={reservation.id}
          className="flex items-center justify-between p-6 border border-[var(--color-border)] bg-[var(--color-card)] rounded-xl hover:shadow-md transition-shadow"
        >
          {/* LEFT */}
          <div className="flex items-center space-x-4 flex-1">
            <div className="w-16 h-24 bg-[var(--color-backgroundSecondary)] border border-[var(--color-border)] rounded-lg flex items-center justify-center">
              <EventAvailable
                sx={{
                  fontSize: 32,
                  color: "var(--color-primary)",
                  opacity: 0.3,
                }}
              />
            </div>

            <div className="flex-1">
              <h4 className="text-lg font-semibold text-[var(--color-textPrimary)] mb-1">
                {reservation.bookTitle}
              </h4>
              <p className="text-[var(--color-textSecondary)] mb-2">
                {reservation.bookAuthor}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm">
                <span className="text-[var(--color-textSecondary)]">
                  Reserved:{" "}
                  {new Date(reservation.reservedAt).toLocaleDateString()}
                </span>

                <GetStatusChip status={reservation.status} />

                {reservation.status === "PENDING" && (
                  <>
                    <span className="text-[var(--color-textSecondary)]">
                      Queue Position: #{reservation.queuePosition}
                    </span>

                    {reservation.availableAt && (
                      <span className="text-[var(--color-textSecondary)]">
                        Est. Available:{" "}
                        {new Date(
                          reservation.availableAt
                        ).toLocaleDateString()}
                      </span>
                    )}
                  </>
                )}

                {reservation.status === "READY" && (
                  <span className="text-green-600 font-medium">
                    Ready for pickup
                  </span>
                )}
              </div>

              {reservation.notes && (
                <p className="text-sm text-[var(--color-textSecondary)] opacity-80 mt-2 italic">
                  “{reservation.notes}”
                </p>
              )}
            </div>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center space-x-2">
            <Button
              variant="outlined"
              size="small"
              onClick={() => navigate(`/books/${reservation.bookId}`)}
              sx={{ 
                borderColor: "var(--color-primary)", 
                color: "var(--color-primary)",
                "&:hover": { borderColor: "var(--color-primary)", bgcolor: "rgba(99, 102, 241, 0.04)" }
              }}
            >
              View
            </Button>

            {reservation.status === "READY" && (
              <Button
                variant="contained"
                size="small"
                sx={{ bgcolor: "#10B981" }}
              >
                Pick Up
              </Button>
            )}

            {reservation.canBeCancelled && reservation.status === "PENDING" && (
              <Button
                variant="outlined"
                size="small"
                color="error"
              >
                Cancel
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  )}
</div>

  )
}

export default Reservation