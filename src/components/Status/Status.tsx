import React, { useState } from 'react';
import './Status.scss';

import avt from '../../assests/avatar.png';
import { ReactComponent as Video } from '../../assests/svg/video.svg';
import { ReactComponent as Img } from '../../assests/svg/img.svg';
import { ReactComponent as Icon } from '../../assests/svg/icon.svg';
import Modal from 'components/Modal/Modal';
import CreateStatus from 'features/CreateStatus/CreateStatus';

const Status = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleCloseStatus = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(!open);
    };
    console.log(open);
    return (
        <div className="status">
            <div className="status__input">
                <div className="status__input-avt">
                    <img src={avt} alt="" />
                </div>
                <div className="status__input-input" onClick={handleOpen}>
                    <div>Bảo ơi, bạn đang nghĩ gì thế?</div>
                </div>
                {open && (
                    <Modal>
                        <CreateStatus onCloseModal={handleCloseStatus} />
                    </Modal>
                )}
            </div>
            <div className="status__footer">
                <div className="grid">
                    <div className="row no-gutter">
                        <div className="col l-4 m-4 c-4">
                            <div className="status__option">
                                <Video fill="#f3425f" />
                                <span>Video trực tiếp</span>
                            </div>
                        </div>
                        <div className="col l-4 m-4 c-4">
                            <div className="status__option">
                                <Img fill="#45BD62" />
                                <span>Ảnh/video</span>
                            </div>
                        </div>
                        <div className="col l-4 m-4 c-4">
                            <div className="status__option">
                                <Icon fill="#F7B928" />
                                <span>Cảm xúc/Hoạt động</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Status;
