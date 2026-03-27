import React, { useState } from 'react'
import logoSrc from "../../assets/Twofaced-logo1.png"


interface NavLogoProps {
    onClick: () => void;
}

export const NavLogo: React.FC<NavLogoProps> = ({ onClick }) => {
    const [hasError, setHasError] = useState(false);

    return (
        <div
            className="text-2xl font-black tracking-tighter uppercase text-brand-black cursor-pointer hover:text-brand-black transition-colors z-[10000]"
            onClick={onClick}
        >
            {hasError ? (
                <h2>
                    Twofaced<span className="text-brand-red">HK</span>
                </h2>
            ) : (
                <img
                    src={logoSrc}
                    alt="Twofaced band logo"
                    className="w-24 md:w-32 h-auto object-contain"
                    onError={() => setHasError(true)}
                />
            )}
        </div>

    );
};
