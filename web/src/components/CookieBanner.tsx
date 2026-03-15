import React, { useState, useEffect } from 'react';

export const CookieBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookie-consent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-brand-black/95 backdrop-blur-md border-t border-brand-dark-gray p-6 z-50 animate-in slide-in-from-bottom-full duration-500 shadow-2xl">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-sm text-brand-light-gray text-center md:text-left max-w-2xl">
                    <p className="leading-relaxed">
                        <span className="text-brand-white font-bold uppercase mr-2">Privacy Notice:</span>
                        We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
                    </p>
                </div>
                <div className="flex gap-4 w-full md:w-auto justify-center md:justify-end">
                    <button
                        onClick={handleDecline}
                        className="flex-1 md:flex-none px-6 py-3 border border-brand-light-gray text-brand-light-gray text-xs uppercase font-bold tracking-widest hover:bg-brand-light-gray hover:text-brand-black transition-colors"
                    >
                        Decline
                    </button>
                    <button
                        onClick={handleAccept}
                        className="flex-1 md:flex-none px-6 py-3 bg-brand-red text-white text-xs uppercase font-bold tracking-widest hover:bg-white hover:text-black transition-colors"
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
};
