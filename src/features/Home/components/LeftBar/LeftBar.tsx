//item components
import NavItem from 'components/NavItem/NavItem';
//data
import { LEFT_NAV, LEFT_NAV_GROUP } from 'constant/LeftNav';
import React, { useState } from 'react';
// react spinner
import ClipLoader from 'react-spinners/ClipLoader';
import { ReactComponent as drop } from '../../../../assests/svg/drop2.svg';
import { ReactComponent as subDrop } from '../../../../assests/svg/subDrop.svg';
import './LeftBar.scss';

const LeftBar = () => {
    const [itemNum, setitemNum] = useState<number | undefined>(6);
    const [groupNum, setGroupNum] = useState<number | undefined>(5);
    const [loading, setLoading] = useState(false);
    const [loading1, setLoading1] = useState(false);
    const [mainDrop, setDrop] = useState<any>(drop);
    const [mainDrop1, setDrop1] = useState<any>(drop);
    const delayMore = (name: string) => {
        return new Promise((resolve) => {
            switch (name) {
                case '1':
                    setTimeout(() => {
                        setitemNum((prev) => (prev === 6 ? undefined : 6));
                        resolve('');
                    }, 500);
                    break;
                case '2':
                    setTimeout(() => {
                        setGroupNum((prev) => (prev === 5 ? undefined : 5));
                        resolve('');
                    }, 500);
                    break;
                default:
                    break;
            }
        });
    };
    const handleShowMore = async () => {
        setLoading(true);
        await delayMore('1')
            .then(() => setLoading(false))
            .then(() => setDrop((prev: any) => (prev === drop ? subDrop : drop)));
    };
    const handleShowMoreGroup = async () => {
        setLoading1(true);
        await delayMore('2')
            .then(() => setLoading1(false))
            .then(() => setDrop1((prev: any) => (prev === drop ? subDrop : drop)));
    };

    return (
        <div className="left-bar">
            <div className="left-bar__detail">
                {LEFT_NAV.slice(0, itemNum).map((item, idx) => (
                    <NavItem Icon={item.icon} detail={item.detail} label={item.label} />
                ))}
                <NavItem
                    Icon={loading ? ClipLoader : mainDrop}
                    isSvg
                    label="Xem thêm"
                    onShowMore={handleShowMore}
                />
            </div>
            <div className="left-bar__group">
                <div className="left-bar__group-header">
                    <h4>Lối tắt của bạn</h4>
                    <span>Chỉnh sửa</span>
                </div>
                <div className="left-bar__group-content">
                    {LEFT_NAV_GROUP.slice(0, groupNum).map((item, idx) => (
                        <NavItem Icon={item.icon} label={item.label} />
                    ))}
                    <NavItem
                        Icon={loading1 ? ClipLoader : mainDrop1}
                        isSvg
                        label="Xem thêm"
                        onShowMore={handleShowMoreGroup}
                    />
                </div>
            </div>
        </div>
    );
};

export default LeftBar;
