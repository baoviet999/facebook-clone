import React from 'react';
import LeftBar from './components/LeftBar/LeftBar';
import Main from './components/Main/Main';
import RightBar from './components/RightBar/RightBar';
import './Home.scss';
const Home = () => {
    return (
        <div className="home">
            <div className="grid">
                <div className="row">
                    <div className="col l-3">
                        <LeftBar />
                    </div>
                    <div className="col l-6">
                        <Main />
                    </div>
                    <div className="col l-3">
                        <RightBar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
