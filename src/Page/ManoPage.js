import React from 'react';
import '../css/Mano.scss';
import Typewriter from '../Component/TypeWriter';
import ButtonBack from '../Component/ButtonBack';

export default function ManoPage(){

    return <div className='Page ManoPage'>
        <ButtonBack/>
        <Typewriter text="LA REMISE DES PRIX" speed={50}/>
    </div>
}