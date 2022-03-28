import React, { useEffect, useState } from 'react';
import './StoryPage.scss';
import video from '../../assests/videott/video1.mp4';
import ReactPlayer from 'react-player/lazy';
import { useParams } from 'react-router-dom';
import TIKTOK from 'links/Stoty';
import { STORY } from 'constant/Story';
import Item from './components/Item/Item';
const StoryPage = () => {
    const params = useParams();
    const [index, setIndex] = useState<number>(Number(params));
    const [muted, setMuted] = useState(true);
    useEffect(() => {
        setIndex(Number(params?.id));
    }, [params]);
    const handleActive = (idx: number) => {
        setIndex(idx);
        setMuted(false);
    };
    const handleEnd = () => {
        if (index < STORY.length - 1) {
            setIndex((prev) => prev + 1);
        } else {
            setIndex(0);
        }
        setMuted(false);
    };
    return (
        <div className="storypage">
            <div className="grid">
                <div className="row sm-gutter">
                    <div className="col l-3">
                        <div className="storypage-wrapper">
                            <div className="storypage__user">
                                {STORY.map((item, idx) => (
                                    <Item
                                        onChangeActive={handleActive}
                                        activeIdx={index}
                                        idx={idx}
                                        img={item.img}
                                        name={item.name}
                                        hour="2 gio truoc"
                                        key={idx}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col l-9">
                        <div className="storypage__video-wrap">
                            <div className="storypage__video">
                                {/* <div className="storypage__video-info">
                                    <img src={STORY[index]?.img} alt="" />
                                </div> */}
                                <ReactPlayer
                                    url={STORY[index]?.video}
                                    playing
                                    controls
                                    muted={muted}
                                    width="100%"
                                    height="100%"
                                    onEnded={handleEnd}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryPage;
