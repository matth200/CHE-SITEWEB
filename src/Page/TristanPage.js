import React from 'react';
import '../css/Tristan.scss';
import Typewriter from '../Component/TypeWriter';
import ButtonBack from '../Component/ButtonBack';

export default function TristanPage(){

    return <div className='Page TristanPage'>
        <ButtonBack/>
        <Typewriter text="LE RETEX" speed={50}/>
    </div>
}