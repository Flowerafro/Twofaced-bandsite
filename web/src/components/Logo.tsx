import React, { useState } from 'react'
import logoSrc from "../assets/Facetwoface-logo.png"

export const Logo: React.FC = () => {
    const [hasError, setHasError] = useState(false);

    return (
        <>
            {hasError ? (
                <h1 className="text-4xl md:text-8xl lg:text-9xl font-black opacity-50 uppercase tracking-tighter text-brand-black mb-6 break-words">
                    Twofaced<span className="text-brand-black">HK</span>
                </h1>
            ) : (
                <img
                    src={logoSrc}
                    alt="Twofaced band logo"
                    className="w-64 md:w-96 h-auto object-contain"
                    onError={() => setHasError(true)}
                />
            )}
        </>
    );
};