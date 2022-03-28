import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StoryItem.scss';
import { motion } from 'framer-motion';
interface StoreItemProps {
    name: string;
    background: any;
    avatar: any;
    isFirst?: boolean;
    id: number;
}
const StoryItem = ({ name, background, avatar, isFirst, id }: StoreItemProps) => {
    const navigation = useNavigate();
    const handleNavigation = () => {
        navigation(`/story/${id}`);
    };
    return (
        <div className="story-item" onClick={handleNavigation}>
            <div className="story-item__bg" style={{ backgroundImage: `url(${background})` }}></div>
            <div className="story-item__avt">
                <motion.img
                    key={id}
                    src={avatar}
                    initial={{ opacity: 0, y: 200 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />
            </div>
            <div className="story-item__name">{name}</div>
        </div>
    );
};

export default StoryItem;
