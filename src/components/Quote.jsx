import React, { useState, useEffect } from 'react';

const quotes = [
    {
        thequote: "Never be afraid to try something new because life gets boring when you stay within the limits of what you already know."
    },
    {
        thequote: "When you focus on problems, you'll have more problems | When you focus on possibilities, you'll have more opportunities."
    },
    {
        thequote: "The less you say, the more your words will matter."
    },
    {
        thequote: "No matter how much it hurts now, someday you will look back and realize your struggle changed your life for the better."
    }
];

const Quotes = () => {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuoteIndex(prevIndex => (prevIndex + 1) % quotes.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div>
                <p>{quotes[currentQuoteIndex].thequote}</p>
            </div>
        </>
    );
}

export default Quotes;

