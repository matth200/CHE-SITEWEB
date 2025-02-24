
import React from 'react';
import Typewriter from "../Component/TypeWriter";
import ButtonBack from "../Component/ButtonBack";

import '../css/gael.scss';

export default function GaelPage(){
    return (
      <div className="Page GaelPage">
        <ButtonBack />
        <Typewriter text="LE KICK'OFF" speed={50} />
      </div>
    );
}