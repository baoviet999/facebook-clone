import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'features/Home/Home';
import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en.json';
import ru from 'javascript-time-ago/locale/ru.json';
import StoryPage from 'features/StoryPage/StoryPage';
import ConverVideo from 'features/ConvertVideo/ConverVideo';

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Home />} />
                    </Route>
                    <Route path="/story/:id" element={<StoryPage />} />
                    <Route path='/video' element={<ConverVideo/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
