import React from 'react';
import { FRIEND } from 'constant/Friend';
import './FriendList.scss';

interface FriendItemProps {
    name: string;
    avt: any;
    isActive?: boolean;
}

const FriendList = () => {
    return (
        <div className="friend__list">
            {FRIEND.map((item, idx) => (
                <FriendItem name={item.name} isActive={item.isActive} avt={item.avatar} key={idx} />
            ))}
        </div>
    );
};

const FriendItem = ({ name, avt, isActive }: FriendItemProps) => {
    return (
        <div className="friend__item">
            <div className="friend__item-img">
                <img src={avt} alt="" />
                {isActive && <span className="friend__item-active"></span>}
            </div>
            <div className="friend__item-name">{name}</div>
        </div>
    );
};

export default FriendList;
