import { Status } from 'features/CreateStatus/statusSlice';
import React, { forwardRef } from 'react';
import ReactTimeAgo from 'react-time-ago';
import './Post.scss';
import avt from '../../assests/avatar.png';
import { BiWorld } from 'react-icons/bi';
import { ReactComponent as Love } from '../../assests/svg/facebook-love.svg';
import { ReactComponent as Sad } from '../../assests/svg/facebook-sad.svg';
import { ReactComponent as Like } from '../../assests/svg/like.svg';
interface PostProps {
    item?: Status;
    date?: any;
}

const Post = forwardRef(({ item }: PostProps, ref: any) => {
    const hasBg = item?.hasBg;
    return (
        <div ref={ref} className="post">
            <div className="post__name">
                <div className="post__name-avt">
                    <img src={avt} alt="" />
                </div>
                <div className="post__name-info">
                    <div className="post__name-name">Bao Viet</div>
                    <div className="post__name-timer">
                        <span>
                            <ReactTimeAgo date={item?.time} timeStyle="round-minute" />
                        </span>
                        <BiWorld />
                    </div>
                </div>
            </div>

            {hasBg ? (
                <>
                    <div className="post__img-hasBg">
                        {item?.image ? (
                            <img className="post-img__img" alt="not found" src={item.image} />
                        ) : (
                            ''
                        )}
                        <div className="post__title-hasbg">
                            <div>{`${item?.title ? item?.title : ''}`}</div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="post__title">{`${item?.title ? item?.title : ''}`}</div>
                    <div className="post__img">
                        {item?.image ? (
                            <img className="post-img__img" alt="not found" src={item.image} />
                        ) : (
                            ''
                        )}
                    </div>
                </>
            )}

            <div className="post__footer">
                <div className="post__footer-top">
                    <div className="post__footer-icons">
                        <div className="post__footer-icon">
                            <Like />
                        </div>
                        <div className="post__footer-icon">
                            <Love />
                        </div>
                        <div className="post__footer-icon">
                            <Sad />
                        </div>
                        <div className="post__footer-like">139K</div>
                    </div>
                    <div className="post__footer-comment">
                        <span>71 bình luận</span>
                        <span>14 lượt chia sẻ</span>
                    </div>
                </div>
                <div className="post__footer-bt"></div>
            </div>
        </div>
    );
});

export default Post;
