import React from 'react';
import '../css/Mano.scss';
import Typewriter from '../Component/TypeWriter';

export default function ManoPage(){

    return <div className='Page ManoPage'>
        <Typewriter text="Page de Manoel" speed={50}/>
    </div>
}