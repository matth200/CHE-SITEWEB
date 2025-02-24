import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import './css/index.scss';
import AppPage from './Page/App';
import ErrorPage from './Page/Error';
import TermPage from './Page/Terminal';
import ManoPage from './Page/ManoPage';
import TristanPage from './Page/TristanPage';
import BaptPage from './Page/BaptPage';
import MatthPage from './Page/MatthPage';
import GaelPage from './Page/GaelPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppPage />}/>
        <Route path="/term" element={<TermPage />}/>
        <Route path="/mano" element={<ManoPage />} />
        <Route path="/bapt" element={<BaptPage />} />
        <Route path="/tristan" element={<TristanPage />}/>
        <Route path="/matth" element={<MatthPage />}/>
        <Route path="/gael" element={<GaelPage />} />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
