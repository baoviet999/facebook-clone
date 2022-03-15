import React from 'react';

import { ReactComponent as Video } from '../../../../assests/svg/friend-video.svg';
import { ReactComponent as Search } from '../../../../assests/svg/friend-search.svg';
import { ReactComponent as Option } from '../../../../assests/svg/friend-option.svg';
import './RightBar.scss';
// item component
import FriendList from 'components/FriendList/FriendList';
const RightBar = () => {
    return (
        <div className="right-bar">
            <div className="right-bar__friend">
                <div className="right-bar__friend-header">
                    <h4>Người liên hệ</h4>
                    <div className="right-bar__friend-btns">
                        <div className="right-bar__friend-btn">
                            <Video />
                        </div>
                        <div className="right-bar__friend-btn">
                            <Search />
                        </div>
                        <div className="right-bar__friend-btn">
                            <Option />
                        </div>
                    </div>
                </div>
                <div className="rigth-bar__content">
                    <FriendList />
                </div>
            </div>
        </div>
    );
};

export default RightBar;
