import React, { ChangeEvent, useState } from 'react';

import bg1 from '../../assests/bg1.jpg';
//iocns
import { IoCloseSharp } from 'react-icons/io5';
import avt from '../../assests/avatar.png';
import lock from '../../assests/lock.png';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './CreateStatus.scss';
import StatusInput from './components/StatusInput/StatusInput';
import { BsEmojiSmile } from 'react-icons/bs';
import Picker from 'emoji-picker-react';
import BgOptions from 'components/BgOptions/BgOptions';

interface CreateStatusProps {
    onCloseModal: () => void;
}

const CreateStatus = ({ onCloseModal }: CreateStatusProps) => {
    const [inputValue, setInputValue] = useState('');
    const [background, setBackGroud] = useState(bg1);
    const handleInputValue = (value: string) => {
        setInputValue(value);
    };
    const [openEmoji, setOpenEmoji] = useState(false);
    const onEmojiClick = (event: any, emojiObject: any) => {
        console.log(inputValue);
        setInputValue((prev) => `${prev}${emojiObject.emoji}`);
    };
    const handleChangeBg = (bg: any) => {
        setBackGroud(bg);
    };
    const handleClose = () => {
        onCloseModal();
    };
    return (
        <div className="status-cr">
            <div className="status-cr__header">
                <h3>Tạo bài viết</h3>
                <div className="status-cr__close" onClick={handleClose}>
                    <IoCloseSharp />
                </div>
            </div>
            <div className="status-cr__content">
                <div className="status-cr__user">
                    <div className="status-cr__user-img">
                        <img src={avt} alt="avt" />
                    </div>
                    <div className="status-cr__user-info">
                        <div className="status-cr__user-name">
                            <div>Bảo Việt</div>
                        </div>
                        <div className="status-cr__user-options">
                            <img src={lock} alt="lock" />
                            <span>Chỉ mình tôi</span>
                            <MdOutlineArrowDropDown />
                        </div>
                    </div>
                </div>
            </div>
            <div className="status-cr__create">
                <div className="status-cr__input">
                    <StatusInput
                        background={background}
                        onInputChange={handleInputValue}
                        inputValue={inputValue}
                    />
                </div>
                <div className="status-cr__input-options">
                    <div className="status-cr__input-option">
                        <BgOptions onChangeBg={handleChangeBg} />
                    </div>
                    <div className="status-cr__input-emoji">
                        <BsEmojiSmile onClick={() => setOpenEmoji(!openEmoji)} />
                        {openEmoji && (
                            <Picker
                                disableSkinTonePicker
                                disableSearchBar
                                pickerStyle={{ width: '300px', height: '300px' }}
                                onEmojiClick={onEmojiClick}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateStatus;
