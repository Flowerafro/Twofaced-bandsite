import React from 'react';
import type { NavItem } from './types';
import { NavLink } from './NavLink';

interface DesktopMenuProps {
    navItems: NavItem[];
    activeTab: NavItem;
    onNavClick: (item: NavItem) => void;
}

export const DesktopMenu: React.FC<DesktopMenuProps> = ({ navItems, activeTab, onNavClick }) => {
    return (
        <ul className="hidden md:flex gap-10">
            {navItems.map((item) => (
                <li key={item}>
                    <NavLink
                        item={item}
                        isActive={activeTab === item}
                        onClick={() => onNavClick(item)}
                        variant="desktop"
                    />
                </li>
            ))}
        </ul>
    );
};
