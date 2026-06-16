-- Add features column to subscription_plans table
ALTER TABLE subscription_plans 
    ADD COLUMN IF NOT EXISTS features TEXT;

-- Update the default seeded plans with realistic names, prices, limits, and rich details
UPDATE subscription_plans 
SET 
    name = 'Basic Reader',
    description = 'Perfect for casual reading. Access standard library catalog.',
    duration_days = 30,
    price = 19900, -- ₹199.00 in paise
    max_books_allowed = 2,
    max_days_per_book = 14,
    badge_text = 'Casual',
    features = 'Access to Standard Catalog, 2 Concurrent Book Loans, 14 Days Borrow Period, Standard Support, Standard Reservations'
WHERE plan_code = 'MONTHLY';

UPDATE subscription_plans 
SET 
    name = 'Avid Scholar',
    description = 'Ideal for students and regular readers. Full catalog access and AI recommendations.',
    duration_days = 90,
    price = 49900, -- ₹499.00 in paise
    max_books_allowed = 6,
    max_days_per_book = 21,
    badge_text = 'Most Popular',
    features = 'Access to Full Catalog, 6 Concurrent Book Loans, 21 Days Borrow Period, AI-Powered Recommendations, Priority Support, Priority Reservations'
WHERE plan_code = 'QUARTERLY';

UPDATE subscription_plans 
SET 
    name = 'Bibliophile Elite',
    description = 'The ultimate reading experience. Unlimited access with maximum benefits for a full year.',
    duration_days = 365,
    price = 149900, -- ₹1499.00 in paise
    max_books_allowed = 12,
    max_days_per_book = 30,
    badge_text = 'Best Value',
    features = 'Access to All Catalog + Premium, 12 Concurrent Book Loans, 30 Days Borrow Period, AI-Powered Recommendations, Early Access to New Releases, High Priority Holds, Dedicated Support'
WHERE plan_code = 'YEARLY';
