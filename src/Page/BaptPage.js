import React from 'react';
import '../css/Bapt.scss';
import Typewriter from '../Component/TypeWriter';
import ButtonBack from '../Component/ButtonBack';

export default function BaptPage(){


    return <div className='Page BaptPage'>
        <ButtonBack/>
        <Typewriter text="Page de Baptiste" speed={50}/>
    </div>
}