import React from 'react';
import { Menu, X } from 'lucide-react';

interface MenuButtonProps {
    isOpen: boolean;
    toggle: () => void;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, toggle }) => {
    return (
        <button
            className="md:hidden text-brand-white p-2 z-[10000] focus:outline-none"
            onClick={toggle}
            aria-label="Toggle menu"
        >
            {isOpen ? (
                <X size={28} className="transition-transform duration-300 rotate-0" />
            ) : (
                <Menu size={28} className="transition-transform duration-300 rotate-0" />
            )}
        </button>
    );
};
