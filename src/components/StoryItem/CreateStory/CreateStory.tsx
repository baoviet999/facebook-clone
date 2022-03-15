import React from 'react';
import './CreateStory.scss';
import avt from '../../../assests/createStory.png';
import { ReactComponent as Plus } from '../../../assests/svg/plus.svg';
import './CreateStory.scss'

const CreateStory = () => {
    return (
        <div className="story-item">
            <div className="create-story__img">
                <img src={avt} alt="" />
            </div>
            <div className="create-story__footer">
                <span>Tạo tin</span>
                <div className="create-story__footer-plus">
                    <Plus/>
                </div>
            </div>
        </div>
    );
};

export default CreateStory;
