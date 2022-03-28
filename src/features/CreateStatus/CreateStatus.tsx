import { useAppDispatch, useAppSelector } from 'app/hooks';
import BgOptions from 'components/BgOptions/BgOptions';
import Picker from 'emoji-picker-react';
import React, { useRef, useState } from 'react';
import { BsEmojiSmile } from 'react-icons/bs';
//iocns
import { IoCloseSharp } from 'react-icons/io5';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import ClipLoader from 'react-spinners/ClipLoader';
import avt from '../../assests/avatar.png';
import lock from '../../assests/lock.png';
import StatusInput from './components/StatusInput/StatusInput';
import './CreateStatus.scss';
import { selectLoading, selectStatus, statusAction } from './statusSlice';

interface CreateStatusProps {
    onCloseModal: () => void;
}

const CreateStatus = ({ onCloseModal }: CreateStatusProps) => {
    const [inputValue, setInputValue] = useState('');
    const [background, setBackGroud] = useState('isbg');
    const [openImg, setOpenImg] = useState(false);
    const [selectedImage, setSelectedImage] = useState<any>(null);
    const dispatch = useAppDispatch();
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
    const loading = useAppSelector(selectLoading);
    const [images, setImages] = React.useState<any[]>([]);
    const maxNumber = 69;

    const onChange = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };
    const poseRef = useRef<any>(null)
    const handlePost = () => {
        const dataImg = images[0]?.dataURL;
        const hasBg = background !== 'isbg';
        dispatch(
            statusAction.setStatus({
                hasBg: hasBg,
                image: hasBg ? background : dataImg,
                title: inputValue,
                redirect: () => {
                    onCloseModal();
                },
                time: new Date(),
            })
        );
        setSelectedImage(null);
        poseRef.current.scrollIntoView({behavior : 'smooth'})
    };
    const handleAddImg = () => {
        setOpenImg(!openImg);
        setBackGroud('isbg');
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
                    {openImg && (
                        <ImageUploading value={images} onChange={onChange} maxNumber={maxNumber}>
                            {({ onImageUpload, isDragging, dragProps }) => (
                                <div className="status-cr__img-choose">
                                    {!images[0] ? (
                                        <div
                                            className="status-cr__img-choose-icon"
                                            style={isDragging ? { color: 'red' } : undefined}
                                            onClick={onImageUpload}
                                            {...dragProps}
                                        >
                                            <i></i>
                                            <div>Thêm ảnh/Video</div>
                                            <span>hoặc kéo và thả</span>
                                        </div>
                                    ) : (
                                        <img
                                            ref={poseRef}
                                            className="chosse-img"
                                            alt="not fount"
                                            src={images[0].dataURL}
                                        />
                                    )}
                                </div>
                            )}
                        </ImageUploading>
                    )}
                </div>
                <div className="status-cr__input-options">
                    <div className="status-cr__input-option">
                        {!openImg && <BgOptions onChangeBg={handleChangeBg} />}
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
            <div className="status-cr__img">
                <div className="status-cr__title">
                    <span>Thêm vào bài viết</span>
                </div>
                <div className="status-cr__list">
                    <div className="img">
                        <i onClick={handleAddImg}></i>
                    </div>
                </div>
            </div>
            <div className="status-cr__post" onClick={handlePost}>
                <span>
                    {loading ? <ClipLoader color={'blue'} size={'20px'} /> : ''}
                    Đăng
                </span>
            </div>
        </div>
    );
};

export default CreateStatus;
