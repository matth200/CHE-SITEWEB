import React from 'react';
import Typewriter from "../Component/TypeWriter";
import ButtonBack from "../Component/ButtonBack";

import '../css/matth.scss';

export default function MatthPage(){

    return (
      <div className="Page MatthPage">
        <ButtonBack />
        <Typewriter text="LA PREPARATION" speed={50} />
      </div>
    );
}