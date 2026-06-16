import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchMyBookLoans } from "../../store/features/bookLoans/bookLoanThunk";
import { useEffect } from "react";
import { History } from "@mui/icons-material";

const ReadingHistory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { myLoans } = useSelector((state) => state.bookLoans);

  const loadLoans = () => {
    const status = "RETURNED";
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
  }, []);

  return (
    <div className="p-6 bg-[var(--color-card)] text-[var(--color-textPrimary)]">
      <h3 className="text-2xl font-bold text-[var(--color-textPrimary)] mb-6">
        Your Reading History
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myLoans.map((history) => (
          <div
            key={history.id}
            onClick={() => navigate(`/books/${history.bookId}`)}
            className="group cursor-pointer bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4 hover:shadow-md transition-all hover:-translate-y-1"
          >
           {history.bookCoverImage ? (
             <img src={history.bookCoverImage} alt={history.bookTitle} className="aspect-[3/4] rounded-lg mb-3 object-cover w-full" />
           ) : (
             <div className="aspect-[3/4] bg-[var(--color-backgroundSecondary)] border border-[var(--color-border)] rounded-lg mb-3 flex items-center justify-center">
               <History sx={{ fontSize: 64, color: "var(--color-primary)", opacity: 0.3 }} />
             </div>
           )}

            <h4 className="font-semibold text-[var(--color-textPrimary)] line-clamp-2 group-hover:text-[var(--color-primary)] transition-colors mb-1">
              {history.bookTitle}
            </h4>
            <p className="text-sm text-[var(--color-textSecondary)] line-clamp-1 mb-2">
              {history.bookAuthor}
            </p>

            <div className="flex items-center justify-between text-sm">
              <span className="text-[var(--color-textSecondary)]">
                Returned: {new Date(history.returnDate).toLocaleDateString()}
              </span>
              <div className="flex items-center">
                {[...Array(history.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500">
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadingHistory;
