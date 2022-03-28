import { useAppSelector } from 'app/hooks';
import FriendItem from 'components/FriendItem/FriendItem';
import Post from 'components/Post/Post';
// item component
import Status from 'components/Status/Status';
import CreateStory from 'components/StoryItem/CreateStory/CreateStory';
//file img
import StoryItem from 'components/StoryItem/StoryItem';
import { STORY } from 'constant/Story';
import { selectStatus } from 'features/CreateStatus/statusSlice';
import React, { useRef, useState } from 'react';
import FlipMove from 'react-flip-move';
import { Navigation } from 'swiper';
import 'swiper/css';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactComponent as Next } from '../../../../assests/svg/next.svg';
import { ReactComponent as Next1 } from '../../../../assests/svg/next2.svg';
//scss
import './Main.scss';
const Main = () => {
    const [disable, setDisable] = useState(false);
    const statusData = useAppSelector(selectStatus);
    const reStatusData = [...statusData].reverse();
    const dateRef = useRef(new Date());
    console.log(dateRef.current);
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
                                    <StoryItem key={idx} id={idx} background={item.img} name={item.name} avatar={item.avatar} />
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
                <FlipMove style={{ width: '100%' }}>
                    {reStatusData.map((item, idx) => (
                        <Post item={item} key={idx} />
                    ))}
                </FlipMove>
            </div>
        </div>
    );
};

export default Main;
