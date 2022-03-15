import React from 'react';
import './NavItem.scss';

interface NavItemProps {
    Icon: any;
    label: string;
    detail?: string;
    isSvg?: boolean;
    onShowMore?: () => void;
}

const NavItem = ({ Icon, label, detail, isSvg, onShowMore }: NavItemProps) => {
    return (
        <div className={`nav-item ${isSvg ? 'svg' : ''}`} onClick={onShowMore}>
            <div className="nav-item__icon">{isSvg ? <Icon size={20} color='#050505'/> : <img src={Icon} alt="" />}</div>
            <div className="nav-item__label">
                <span>{label}</span>
                {detail && <div className="nav-item__detail">{detail}</div>}
            </div>
        </div>
    );
};

export default NavItem;
