import React from 'react';
import avt from '../../assests/friend1.jpg';
import './Friend-item.scss';
import { motion } from 'framer-motion';
const FriendItem = () => {
    return (
        <div className="friend-item">
            <div className="friend-item__img">
                <img src={avt} alt='avt' />
            </div>
            <div className="friend-item__name">Nhật Lam</div>
            <div className="friend-item__btn">Gửi lời chào</div>
        </div>
    );
};

export default FriendItem;
