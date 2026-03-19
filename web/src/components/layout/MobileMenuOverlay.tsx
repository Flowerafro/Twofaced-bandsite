import React from 'react';
import type { NavItem } from './types';
import { NavLink } from './NavLink';

interface MobileMenuOverlayProps {
    isOpen: boolean;
    navItems: NavItem[];
    activeTab: NavItem;
    onNavClick: (item: NavItem) => void;
}

export const MobileMenuOverlay: React.FC<MobileMenuOverlayProps> = ({ isOpen, navItems, activeTab, onNavClick }) => {
    return (
        <div
            className={`fixed inset-0 z-[9999] bg-brand-red w-screen h-screen flex flex-col items-center justify-center space-y-8 pt-20 pb-safe transition-all duration-500 ease-in-out ${isOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-full pointer-events-none'
                }`}
        >
            {navItems.map((item, index) => (
                <NavLink
                    key={item}
                    item={item}
                    isActive={activeTab === item}
                    onClick={() => onNavClick(item)}
                    variant="mobile"
                    style={{
                        transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                    }}
                />
            ))}

            <div className={`flex gap-6 pt-8 transition-all duration-700 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            </div>
        </div>
    );
};
