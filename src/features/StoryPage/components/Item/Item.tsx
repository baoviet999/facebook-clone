import React from 'react';
import './Item.scss';

interface ItemProps {
    img: string;
    name: string;
    hour?: string;
    idx: string | number;
    activeIdx: string | number;
    onChangeActive: (idx: number) => void;
}

const Item = ({ img, name, hour, idx, activeIdx, onChangeActive }: ItemProps) => {
    return (
        <div
            className={`item ${idx === activeIdx ? 'active' : ''}`}
            onClick={() => onChangeActive(Number(idx))}
        >
            <div className="item__img">
                <img src={img} alt="" />
            </div>
            <div className="item__info">
                <div className="item__name">{name}</div>
                <div className="item__hour">{hour}</div>
            </div>
        </div>
    );
};

export default Item;
