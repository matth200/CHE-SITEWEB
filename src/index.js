import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import './css/index.scss';
import AppPage from './Page/App';
import ErrorPage from './Page/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppPage />}/>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
