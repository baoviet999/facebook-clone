import { STATUS_BG } from 'constant/StatusBg';
import React from 'react';
import './BgOptions.scss';

interface BgOptionProps {
    onChangeBg : (bg : any) => void
}

const BgOptions = ({onChangeBg} : BgOptionProps) => {
    return (
        <div className="grid">
            <div className="row">
                {STATUS_BG.map((item, idx) => (
                    <div className="col l-1" >
                        <div onClick={()=> onChangeBg(item.main)} className="bg__item"style={{ backgroundImage: `url(${item.bg})` }}></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BgOptions;
