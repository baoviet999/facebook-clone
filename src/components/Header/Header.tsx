import React, { useEffect, useRef, useState } from 'react';
import Tag from 'components/Tag/Tag';

import { HEADER_LEFT } from 'constant/common';
import { HEADER } from 'constant/Heder';
import { Upper } from 'util/Upper';

import Avatar from '../../assests/avatar.png';
import { ReactComponent as Logo } from '../../assests/svg/facebookLogo.svg';
import { ReactComponent as Search } from '../../assests/svg/search.svg';

import { ReactComponent as List } from '../../assests/svg/list.svg';
import { ReactComponent as Mess } from '../../assests/svg/mess.svg';
import { ReactComponent as Ring } from '../../assests/svg/bell.svg';
import { ReactComponent as Drop } from '../../assests/svg/drop.svg';

import { ReactComponent as BellIcon } from '../../icons/bell.svg';
import { ReactComponent as MessengerIcon } from '../../icons/messenger.svg';
import { ReactComponent as CaretIcon } from '../../icons/caret.svg';
import { ReactComponent as PlusIcon } from '../../icons/plus.svg';
import { ReactComponent as CogIcon } from '../../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';
import { ReactComponent as BoltIcon } from '../../icons/bolt.svg';

import { CSSTransition } from 'react-transition-group';

import { motion, useMotionValue, useTransform } from 'framer-motion';

import './Header.scss';
import './Item.scss';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigation = useNavigate();

    const [activeTab, setActiveTab] = useState('home');
    const handleSetActive = (icon: any) => {
        setActiveTab(icon.name);
        navigation(icon?.link);
    };
    const x = useMotionValue(0);
    const background = useTransform(x, [-100, 0, 100], ['#ff008c', '#7700ff', 'rgb(230, 255, 0)']);

    return (
        <motion.div className="header" layout>
            <div className="grid">
                <div className="row">
                    <div className="col l-3">
                        <div className="header__left">
                            <div className="header__left-img">
                                <Logo />
                            </div>
                            <div className="header__left-input">
                                <input type="text" placeholder="Tìm kiếm trên Facebook" />
                                <motion.div className="header__left-search">
                                    <Search />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className="col l-6">
                        <div className="header__center">
                            {HEADER.map((icon, index) => (
                                <div
                                    onClick={() => handleSetActive(icon)}
                                    className={`header__center-icon ${
                                        activeTab === icon.name ? 'active' : ''
                                    }`}
                                >
                                    <icon.icon />
                                    {icon.badge !== '' && (
                                        <div className="header__center-badge">
                                            <span>{icon.badge}</span>
                                        </div>
                                    )}
                                    <Tag label={Upper(icon.name)} />
                                    {activeTab === icon.name ? (
                                        <motion.div className="underline" layoutId="underline" />
                                    ) : null}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col l-3">
                        <div className="header__right">
                            <motion.div className="header__right-avt">
                                <img src={Avatar} alt="" />
                                <motion.span
                                // style={{ x }}
                                // animate={{ color: 'red' , fontSize : 50 , x : 2, y : 100}}
                                // whileHover={{ scale: 1.1 }}
                                // whileTap={{ scale: 0.9, color: '#000' }}
                                // drag="x"
                                // dragConstraints={{ left: 0, right: 0 }}
                                >
                                    Bảo Việt
                                </motion.span>
                            </motion.div>
                            <ul className="header__right-menu">
                                <NavItem icon={<List />} />
                                <NavItem icon={<Mess />} />
                                <NavItem icon={<Ring />} />

                                <NavItem icon={<Drop />}>
                                    <DropdownMenu></DropdownMenu>
                                </NavItem>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Header;

function NavItem(props: any) {
    const [open, setOpen] = useState(false);
    return (
        <motion.li animate={{ scale: 1 }} className="nav-itemm">
            <span className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </span>

            {open && props.children}
        </motion.li>
    );
}

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('animals');
    const [menuHeight, setMenuHeight] = useState<any>(0);
    const dropdownRef = useRef<any>(null);
    console.log(menuHeight);
    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
    }, []);

    function calcHeight(el: any) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props: any) {
        return (
            <div className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </div>
        );
    }

    return (
        <div className="dropdown" style={{ height: `${menuHeight + 40}px` }} ref={dropdownRef}>
            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />} goToMenu="settings">
                        Settings
                    </DropdownItem>
                    <DropdownItem leftIcon="🦧" rightIcon={<ChevronIcon />} goToMenu="animals">
                        Animals
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'settings'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                        <h2>My Tutorial</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'animals'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                        <h2>Animals</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
                    <DropdownItem leftIcon="🐸">Frog</DropdownItem>
                    <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
                    <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
}
