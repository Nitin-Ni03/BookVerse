import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AutoAwesome } from '@mui/icons-material';
import { Button, CircularProgress, Typography, Box } from '@mui/material';
import { fetchAIRecommendations } from '../../store/features/books/bookThunk';

const Recommandation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { aiRecommendations, loading } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchAIRecommendations());
  }, [dispatch]);

  if (loading && (!aiRecommendations || aiRecommendations.length === 0)) {
    return (
      <Box className="flex justify-center items-center py-12">
        <CircularProgress size={40} sx={{ color: "#4F46E5" }} />
      </Box>
    );
  }

  return (
    <div className="p-6 bg-[var(--color-card)] text-[var(--color-textPrimary)]">
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-2xl font-bold text-[var(--color-textPrimary)]">
          Recommended For You
        </h3>
        <AutoAwesome sx={{ color: "var(--color-primary)" }} />
      </div>
      <p className="text-[var(--color-textSecondary)] mb-6">
        AI-powered recommendations based on your reading history and preferences
      </p>

      {aiRecommendations && aiRecommendations.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {aiRecommendations.map((book) => (
            <div
              key={book.id}
              onClick={() => navigate(`/books/${book.id}`)}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] bg-[var(--color-backgroundSecondary)] border border-[var(--color-border)] rounded-lg mb-3 flex items-center justify-center group-hover:shadow-lg transition-shadow overflow-hidden relative">
                {book.coverImageUrl ? (
                  <img 
                    src={book.coverImageUrl} 
                    alt={book.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <AutoAwesome
                    sx={{ fontSize: 64, color: "var(--color-primary)", opacity: 0.3 }}
                  />
                )}
              </div>

              <h4 className="font-semibold text-[var(--color-textPrimary)] line-clamp-2 group-hover:text-[var(--color-primary)] transition-colors">
                {book.title}
              </h4>
              <p className="text-sm text-[var(--color-textSecondary)] line-clamp-1">
                {book.author}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <Box className="text-center py-8 bg-[var(--color-backgroundSecondary)] border border-[var(--color-border)] rounded-xl">
          <Typography variant="body1" sx={{ color: "var(--color-textSecondary)" }}>
            No recommendations available at this time. Start borrowing books to train your AI recommendations!
          </Typography>
        </Box>
      )}

      <div className="mt-8 text-center">
        <Button
          variant="outlined"
          onClick={() => navigate("/books")}
          sx={{
            borderColor: "var(--color-primary)",
            color: "var(--color-primary)",
            fontWeight: 600,
            px: 4,
            "&:hover": { borderColor: "var(--color-primary)", bgcolor: "rgba(99, 102, 241, 0.04)" }
          }}
        >
          Explore All Books
        </Button>
      </div>
    </div>
  );
};

export default Recommandation;