import Header from 'components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
import './scss/index.scss';
import './App.scss';
import Modal from 'components/Modal/Modal';
function App() {
    return (
        <>
            <Header />
            <div className="app__content">
                <Outlet />
            </div>
        </>
    );
}

export default App;
