import React from 'react';
import '../css/ButtonBack.scss';

import { ReactComponent as BackIcon } from "../image/back.svg";
import { useNavigate } from 'react-router-dom';

export default function ButtonBack(props){

    const navigate = useNavigate();

    return <button onClick={() => {
        navigate("/")
    }} className='ButtonBack'>
        <BackIcon className="back-icon" />
    </button>
}