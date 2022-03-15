import React from 'react';
import './Tag.scss';

interface TagProps {
    label: string;
    isRight?: boolean;
}

const Tag = ({ label, isRight }: TagProps) => {
    return (
        <div className={`tag ${isRight ? 'active' : ''}`}>
            <span>{label}</span>
        </div>
    );
};

export default Tag;
