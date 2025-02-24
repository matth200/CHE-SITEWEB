import React from 'react';
import '../css/Mano.scss';
import Typewriter from '../Component/TypeWriter';
import ButtonBack from '../Component/ButtonBack';

export default function ManoPage(){

    return <div className='Page ManoPage'>
        <ButtonBack/>
        <Typewriter text="Page de Manoel" speed={50}/>
    </div>
}