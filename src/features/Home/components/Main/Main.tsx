import React, { useState } from 'react';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
//file img
import StoryItem from 'components/StoryItem/StoryItem';
import avata from '../../../../assests/avatar.png';
import story1 from '../../../../assests/story1.jpg';
import { ReactComponent as Next } from '../../../../assests/svg/next.svg';
import CreateStory from 'components/StoryItem/CreateStory/CreateStory';
import { ReactComponent as Next1 } from '../../../../assests/svg/next2.svg';
// item component
import Status from 'components/Status/Status';
import FriendItem from 'components/FriendItem/FriendItem';
//scss
import './Main.scss';
import { STORY } from 'constant/Story';
const Main = () => {
    const [disable, setDisable] = useState(false);
    return (
        <div className="main__wrapper">
            <div className="main">
                <div className="main__story">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.main__story-btn-next',
                            prevEl: '.main__story-btn-prev',
                        }}
                        spaceBetween={7}
                        slidesPerView={5}
                        onSlideChange={() => setDisable(false)}
                        onSwiper={(swiper) => console.log(swiper)}
                        // grabCursor={true}
                    >
                        <SwiperSlide>{({ isActive }) => <CreateStory />}</SwiperSlide>
                        {STORY.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                {({ isActive }) => (
                                    <StoryItem background={item.img} name={item.name} avatar={item.avatar} />
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className={`main__story-btn main__story-btn-next ${disable && 'disable'}`}>
                        <Next />
                    </div>
                    <div className={`main__story-btn main__story-btn-prev `}>
                        <Next />
                    </div>
                </div>
                <div className="main__status">
                    <Status />
                </div>
                <div className="main__friend">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.main__friend-btn-next',
                            prevEl: '.main__friend-btn-prev',
                        }}
                        spaceBetween={5}
                        slidesPerView={3.5}
                    >
                        <SwiperSlide>
                            <FriendItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <FriendItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <FriendItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <FriendItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <FriendItem />
                        </SwiperSlide>
                    </Swiper>
                    <div className="main__friend-btn main__friend-btn-next">
                        <Next1 />
                    </div>
                    <div className="main__friend-btn main__friend-btn-prev">
                        <Next1 />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
