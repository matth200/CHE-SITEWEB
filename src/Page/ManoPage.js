import React from 'react';
import '../css/Mano.scss';
import Typewriter from '../Component/TypeWriter';
import ButtonBack from '../Component/ButtonBack';
import retexImg1 from "../image/RETEX2.jpg";
import retexImg2 from "../image/RETEX3.jpg";
import { Link } from 'react-router-dom';

export default function ManoPage(){

    return <div className='Page ManoPage'>
        <ButtonBack/>
        <Typewriter text="LE RETEX" speed={50}/>
        <div className="body">
            <div className="left bahnschrift">
                <p>
                    Le Retex se déroule un jour après la fin de l'épreuve de confrontation du CyberHumanum'Est.
                    C'est là que les différents acteurs de l'évènement font un retour sur expériences des trois jours de compétition.
                </p>
                <p>
                    Le Retex est un moment d'échange et de partage, où chacun peut exprimer ses ressentis et ses idées.
                    Le ComCyber et les différents acteurs militaires étant impliqués dans l'organisation du CyberHumanum'Est, ils se sont présentés pour assister au Retex et partager leur ressenti vis-à-vis de l'évenement.
                </p>
                <p>
                    Nous avons d'ailleurs eu le privilège d'être en présence du général d'armée de la région Grand Est de l'armée de terre qui est venu rappeler l'importance et la pertinence de l'évènement dans le contexte actuel. 
                </p>
                <img src={retexImg1} alt="Retex" className='imgRet'/>
            </div>
            <div className="right bahnschrift">
                <img src={retexImg2} alt="Retex" className='imgRet'/>
                <p>
                    Le Retex a commencé avec une introduction de la part de l'oganisation afin de rappeler le déroulement et l'objectif de l'évènement.
                </p>
                <p>
                    Ensuite, les capitaines de chaque équipe ont été invités à prendre la parole pour présenter l'évènement du point de vu des participants.
                </p>
                <p>
                    Ce sont donc les Anumeric, puis les Cryptanga et enfin les APT54 qui ont à tour de rôle expliqué leur différents faits d'armes et réussites lors de l'épreuve, mais également les difficultés qui ont pu être vécues lors des attaques subies.
                </p>
            </div>
        </div>
        <div className='conclusion'>
            <p>Les résultats de l'évènement ont été gardés secrets jusqu'au<br/><br/>lendemain pour la tant attendue </p>
            <Link to="/tristan">
                <div>🏆 Cérémonie de Remises des Prix 🏆</div>
            </Link>
        </div>
    </div>
}