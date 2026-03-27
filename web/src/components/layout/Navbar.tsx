import React, { useState, useEffect } from 'react';
import { NavLogo } from './NavLogo';
import { MenuButton } from './MenuButton';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenuOverlay } from './MobileMenuOverlay';
import type { NavItem } from './types';

interface NavbarProps {
    activeTab: NavItem;
    setActiveTab: (tab: NavItem) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navItems: NavItem[] = ['Landing', 'Concerts', 'Merch', 'Contact'];

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const handleNavClick = (item: NavItem) => {
        setActiveTab(item);
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 h-20 bg-brand-black/95 backdrop-blur-sm drop-shadow z-50 p-6 md:px-12 flex items-center justify-between">
            <NavLogo onClick={() => handleNavClick('Landing')} />

            <DesktopMenu
                navItems={navItems}
                activeTab={activeTab}
                onNavClick={handleNavClick}
            />

            <MenuButton
                isOpen={isMobileMenuOpen}
                toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />

            <MobileMenuOverlay
                isOpen={isMobileMenuOpen}
                navItems={navItems}
                activeTab={activeTab}
                onNavClick={handleNavClick}
            />
        </nav>
    );
};
