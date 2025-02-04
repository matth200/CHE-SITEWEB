import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import './css/index.scss';
import AppPage from './Page/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={<AppPage />}/>
        <Route path="*" Component={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
