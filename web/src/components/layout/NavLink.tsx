import React from 'react';
import type { NavItem } from './types';

interface NavLinkProps {
    item: NavItem;
    isActive: boolean;
    onClick: () => void;
    variant: 'desktop' | 'mobile';
    style?: React.CSSProperties;
}

export const NavLink: React.FC<NavLinkProps> = ({ item, isActive, onClick, variant, style }) => {
    const baseStyles = "uppercase transition-all hover:text-brand-red";

    const desktopStyles = `text-sm font-bold tracking-widest duration-500 ${isActive ? 'text-brand-red' : 'text-brand-light-gray'
        }`;

    const mobileStyles = `text-4xl font-black tracking-tighter duration-200 transform hover:scale-105 ${isActive ? 'text-brand-red' : 'text-brand-white'
        }`;

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variant === 'desktop' ? desktopStyles : mobileStyles}`}
            style={style}
        >
            {item}
        </button>
    );
};
