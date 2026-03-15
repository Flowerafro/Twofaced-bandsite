import React from 'react';
import { Logo } from './Logo';

export const Landing: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 animate-in fade-in duration-700">
            <Logo />

        </section>
    );
};
