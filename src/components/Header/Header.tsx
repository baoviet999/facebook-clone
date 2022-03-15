import React, { useState } from 'react';
import Tag from 'components/Tag/Tag';

import { HEADER_LEFT } from 'constant/common';
import { HEADER } from 'constant/Heder';
import { Upper } from 'util/Upper';

import Avatar from '../../assests/avatar.png';
import { ReactComponent as Logo } from '../../assests/svg/facebookLogo.svg';
import { ReactComponent as Search } from '../../assests/svg/search.svg';

import './Header.scss';



const Header = () => {
    const [activeTab, setActiveTab] = useState('home');
    return (
        <div className="header">
            <div className="grid">
                <div className="row">
                    <div className="col l-3">
                        <div className="header__left">
                            <div className="header__left-img">
                                <Logo />
                            </div>
                            <div className="header__left-input">
                                <input type="text" placeholder="Tìm kiếm trên Facebook" />
                                <div className="header__left-search">
                                    <Search />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l-6">
                        <div className="header__center">
                            {HEADER.map((icon, index) => (
                                <div
                                    onClick={() => setActiveTab(icon.name)}
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
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col l-3">
                        <div className="header__right">
                            <div className="header__right-avt">
                                <img src={Avatar} alt="" />
                                <span>Bảo Việt</span>
                            </div>
                            <div className="header__right-menu">
                                {HEADER_LEFT.map((item, idx) => (
                                    <div key={idx} className="header__right-icon">
                                        <item.icon />
                                        <Tag isRight label={Upper(item.label)} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
