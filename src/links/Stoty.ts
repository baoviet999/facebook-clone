import img1 from '../assests/tiktok/video2.jpeg';
import video1 from '../assests/tiktok/video1.mp4';
import img2 from '../assests/tiktok/video2.jpeg';
import video2 from '../assests/tiktok/video2.mp4';
import video3 from '../assests/tiktok/video3.mp4';
import video4 from '../assests/tiktok/video4.mp4';
import img5 from '../assests/tiktok/video5.jpeg';
import video5 from '../assests/tiktok/video5.mp4';
import video6 from '../assests/tiktok/video6.mp4';

export interface TiktokAccount {
    avatar?: string;
    follower?: string;
    following?: string;
    totalLike?: string;
    isFollow?: boolean;
    desc1?: string;
    desc2?: string;
}
export interface TiktokStatus {
    like: string;
    comment: string;
    share: string;
    music: string;
    isLike: boolean;
}
export interface Tiktok {
    video: string;
    namePage: string;
    content: string;
    account: TiktokAccount;
    status: TiktokStatus;
}
const TIKTOK: Tiktok[] = [
    {
        video: video1,
        namePage: '_editnhacchill_',
        content: ' Dám viết tên babe của bạn vào đây không ???  #xuhuong🌟',
        account: {
            avatar: img1,
            follower: '505.9K',
            following: '2',
            totalLike: '5.5M',
            isFollow: false,
            desc1: 'ib for job📩',
            desc2: 'instagram: _hthun02',
        },
        status: {
            like: '588.7K',
            comment: '31.4K',
            share: '10K',
            music: 'Anh Sẽ Đón Em (Cukak TikTok)',
            isLike: true,
        },
    },
    {
        video: video2,
        namePage: 'nhac.va.tinh',
        content: 'Đôi lời cuộc đời mình đã lỡ phó thác xuân xanh ',
        account: {
            avatar: img2,
            follower: '505.9K',
            following: '2',
            totalLike: '5.5M',
            isFollow: false,
            desc1: 'ib for job📩',
            desc2: 'instagram: _hthun02',
        },
        status: {
            like: '97.5K',
            comment: '317',
            share: '153',
            music: 'nhạc nền - Nhạc và Tình',
            isLike: true,
        },
    },
    {
        video: video3,
        namePage: '_hthun02',
        content: 'Che mắt lại 🦋#tiktok #viral #fyp #foryou #hthun02 #dtu',
        account: {
            avatar: img1,
            follower: '505.9K',
            following: '2',
            totalLike: '5.5M',
            isFollow: false,
            desc1: 'ib for job📩',
            desc2: 'instagram: _hthun02',
        },
        status: {
            like: '609.7K',
            comment: '4903',
            share: '312',
            music: 'sonido original - GamsterGaming',
            isLike: true,
        },
    },
    {
        video: video4,
        namePage: '_editnhacchill_ 🌻',
        content: 'Biết tìm đâu slow',
        account: {
            avatar: img1,
            follower: '376k',
            following: '6312',
            totalLike: '2.4M',
            isFollow: false,
            desc1: 'Fb : Đông Thy',
            desc2: 'Follow ig mình nhen : _ndthy.10',
        },
        status: {
            like: '376k',
            comment: '122',
            share: '6312',
            music: 'say yes - 𝑡𝑟𝑖𝑠ℎ𝑔𝑢𝑘',
            isLike: true,
        },
    },
    {
        video: video5,
        namePage: 'motngaymotbannhac.acv',
        content: 'Hạnh phúc cho người nhưng buồn chuyện đôi ta...',
        account: {
            avatar: img5,
            follower: '210K',
            following: '1053',
            totalLike: '2.4M',
            isFollow: false,
            desc1: 'Fb : Đông Thy',
            desc2: 'Follow ig mình nhen : _ndthy.10',
        },
        status: {
            like: '121.4K',
            comment: '433',
            share: '143',
            music: 'Gieo Quẻ (feat. Den) - Hoang Thuy Linh',
            isLike: true,
        },
    },
    {
        video: video6,
        namePage: '_editnhacchill_',
        content: 'Nếu có cơ hội , bạn muốn quay lại với nyc không ?',
        account: {
            avatar: img1,
            follower: '391.5k',
            following: '122K',
            totalLike: '2.4M',
            isFollow: false,
            desc1: 'Fb : Đông Thy',
            desc2: 'Follow ig mình nhen : _ndthy.10',
        },
        status: {
            like: '391.5k',
            comment: '122K',
            share: '1913',
            music: 'Ít Nhưng Dài Lâu(Nam Con Remix) ',

            isLike: false,
        },
    },
    {
        video: video1,
        namePage: '_editnhacchill_',
        content: ' Dám viết tên babe của bạn vào đây không ???  #xuhuong🌟',
        account: {
            avatar: img1,
            follower: '505.9K',
            following: '2',
            totalLike: '5.5M',
            isFollow: false,
            desc1: 'ib for job📩',
            desc2: 'instagram: _hthun02',
        },
        status: {
            like: '588.7K',
            comment: '31.4K',
            share: '10K',
            music: 'Anh Sẽ Đón Em (Cukak TikTok)',
            isLike: true,
        },
    },
    {
        video: video2,
        namePage: 'nhac.va.tinh',
        content: 'Đôi lời cuộc đời mình đã lỡ phó thác xuân xanh ',
        account: {
            avatar: img2,
            follower: '505.9K',
            following: '2',
            totalLike: '5.5M',
            isFollow: false,
            desc1: 'ib for job📩',
            desc2: 'instagram: _hthun02',
        },
        status: {
            like: '97.5K',
            comment: '317',
            share: '153',
            music: 'nhạc nền - Nhạc và Tình',
            isLike: true,
        },
    },
    {
        video: video3,
        namePage: '_hthun02',
        content: 'Che mắt lại 🦋#tiktok #viral #fyp #foryou #hthun02 #dtu',
        account: {
            avatar: img1,
            follower: '505.9K',
            following: '2',
            totalLike: '5.5M',
            isFollow: false,
            desc1: 'ib for job📩',
            desc2: 'instagram: _hthun02',
        },
        status: {
            like: '609.7K',
            comment: '4903',
            share: '312',
            music: 'sonido original - GamsterGaming',
            isLike: true,
        },
    },
    {
        video: video4,
        namePage: '_editnhacchill_ 🌻',
        content: 'Biết tìm đâu slow',
        account: {
            avatar: img1,
            follower: '376k',
            following: '6312',
            totalLike: '2.4M',
            isFollow: false,
            desc1: 'Fb : Đông Thy',
            desc2: 'Follow ig mình nhen : _ndthy.10',
        },
        status: {
            like: '376k',
            comment: '122',
            share: '6312',
            music: 'say yes - 𝑡𝑟𝑖𝑠ℎ𝑔𝑢𝑘',
            isLike: true,
        },
    },
    {
        video: video5,
        namePage: 'motngaymotbannhac.acv',
        content: 'Hạnh phúc cho người nhưng buồn chuyện đôi ta...',
        account: {
            avatar: img5,
            follower: '210K',
            following: '1053',
            totalLike: '2.4M',
            isFollow: false,
            desc1: 'Fb : Đông Thy',
            desc2: 'Follow ig mình nhen : _ndthy.10',
        },
        status: {
            like: '121.4K',
            comment: '433',
            share: '143',
            music: 'Gieo Quẻ (feat. Den) - Hoang Thuy Linh',
            isLike: true,
        },
    },
    {
        video: video6,
        namePage: '_editnhacchill_',
        content: 'Nếu có cơ hội , bạn muốn quay lại với nyc không ?',
        account: {
            avatar: img1,
            follower: '391.5k',
            following: '122K',
            totalLike: '2.4M',
            isFollow: false,
            desc1: 'Fb : Đông Thy',
            desc2: 'Follow ig mình nhen : _ndthy.10',
        },
        status: {
            like: '391.5k',
            comment: '122K',
            share: '1913',
            music: 'Ít Nhưng Dài Lâu(Nam Con Remix) ',

            isLike: false,
        },
    },
];

export default TIKTOK;
