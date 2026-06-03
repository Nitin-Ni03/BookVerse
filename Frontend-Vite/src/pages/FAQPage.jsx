import React, { useState } from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';

const FAQPage = () => {
    const faqs = [
        {
            question: "How do I become a member?",
            answer: "Joining is easy! Simply click on the 'Sign Up' button at the top right, fill in your details, and select a membership plan. You'll get instant access to our digital collection."
        },
        {
            question: "How long can I keep borrowed books?",
            answer: "For standard members, the loan period is 14 days. Premium members enjoy a 30-day loan period. You can renew books online if they haven't been reserved by another member."
        },
        {
            question: "Are there fines for late returns?",
            answer: "Yes, there is a small daily fine for late returns to ensure availability for all members. However, we offer a 3-day grace period for Premium members."
        },
        {
            question: "Can I suggest a book for the library to purchase?",
            answer: "Absolutely! We love recommendations. You can submit book requests through your user dashboard once you're logged in."
        },
        {
            question: "Is there a limit to how many books I can borrow?",
            answer: "Basic members can borrow up to 2 books at a time. Premium members can borrow up to 10. Family plans allow for up to 25 books across all profiles."
        }
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16">
                <div className="bg-gray-50 py-16">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-3xl font-bold sm:text-4xl text-gray-900 mb-4">Frequently Asked Questions</h1>
                            <p className="text-gray-600 text-lg">
                                Have questions? We're here to help.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <Accordion key={index} disableGutters elevation={0} sx={{ border: '1px solid #e5e7eb', borderRadius: '8px !important', '&:before': { display: 'none' }, mb: 2 }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls={`panel${index}-content`}
                                        id={`panel${index}-header`}
                                        sx={{ borderRadius: '8px' }}
                                    >
                                        <Typography fontWeight={600} color="text.primary">{faq.question}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography color="text.secondary">
                                            {faq.answer}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </div>

                        <div className="mt-12 text-center bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Still have questions?</h3>
                            <p className="text-gray-600 mb-4">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                            <a href="/contact" className="text-indigo-600 font-semibold hover:text-indigo-800">Get in touch &rarr;</a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default FAQPage;
