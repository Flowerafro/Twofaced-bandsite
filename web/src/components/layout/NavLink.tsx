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
    const baseStyles = "uppercase transition-colors duration-150 hover:text-brand-black";

const desktopStyles = `text-sm font-bold tracking-widest ${
  isActive
    ? "text-brand-black underline decoration-2 underline-offset-4 decoration-brand-black"
    : "text-brand-black no-underline"
}`;

    const mobileStyles = `text-4xl font-black tracking-tighter  transform hover:scale-105 ${isActive ? "text-brand-black underline decoration-2 underline-offset-4 decoration-brand-black"
    : "text-brand-black no-underline"
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
