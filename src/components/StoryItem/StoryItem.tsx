import React from 'react';
import './StoryItem.scss';

interface StoreItemProps {
    name: string;
    background: any;
    avatar: any;
    isFirst?: boolean;
}
const StoryItem = ({ name, background, avatar, isFirst }: StoreItemProps) => {
    return (
            <div className="story-item">
                <div className="story-item__bg" style={{ backgroundImage: `url(${background})` }}></div>
                <div className="story-item__avt">
                    <img src={avatar} alt="" />
                </div>
                <div className="story-item__name">{name}</div>
            </div>
    );
};

export default StoryItem;
