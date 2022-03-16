import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import './StatusInput.scss';

interface StatusInputProps {
    background: any;
    onInputChange: (value: string) => void;
    inputValue: string;
}

const StatusInput = ({ background, onInputChange, inputValue }: StatusInputProps) => {
    const newStyle = {
        backgroundImage: `url(${background})`,
    };
    const inputRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (inputRef.current !== null) {
            inputRef.current.innerText = inputValue;
        }
    }, [inputValue]);

    return (
        <div className={`status-inp ${background ? 'center' : ''}`} style={newStyle}>
            <textarea
                placeholder={`${inputValue !== '' ? undefined : 'Bảo ơi, bạn đang nghĩ gì thế?'}`}
                value={inputValue}
                onChange={(e) => onInputChange(e.target.value)}
            />
        </div>
    );
};

export default StatusInput;
