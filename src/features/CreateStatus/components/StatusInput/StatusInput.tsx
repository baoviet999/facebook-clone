import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import './StatusInput.scss';

interface StatusInputProps {
    background: any;
    onInputChange: (value: string) => void;
    inputValue: string;
}

const StatusInput = ({ background, onInputChange, inputValue }: StatusInputProps) => {
    const [hasBG, setHasbg] = useState(false);
    const newStyle = {
        backgroundImage: `url(${background})`,
    };
    const inputRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (inputRef.current !== null) {
            inputRef.current.innerText = inputValue;
        }
    }, [inputValue]);
    useEffect(() => {
        if (background !== 'isbg') {
            setHasbg(true);
        } else {
            setHasbg(false);
        }
    }, [background]);
    return (
        <>
            {hasBG ? (
                <div className={`status-inp ${background ? 'center' : ''}`} style={newStyle}>
                    <textarea
                        placeholder={`${inputValue !== '' ? undefined : 'Bảo ơi, bạn đang nghĩ gì thế?'}`}
                        value={inputValue}
                        onChange={(e) => onInputChange(e.target.value)}
                    />
                </div>
            ) : (
                <div className={`status-inp status-inp--nobg`}>
                    <textarea
                        style={{ minHeight: '35%' }}
                        placeholder={`${inputValue !== '' ? undefined : 'Bảo ơi, bạn đang nghĩ gì thế?'}`}
                        value={inputValue}
                        onChange={(e) => onInputChange(e.target.value)}
                    />
                </div>
            )}
        </>
    );
};

export default StatusInput;
