import "../css/matth.scss";
import ButtonBack from "../Component/ButtonBack";
import Typewriter from "../Component/TypeWriter";
import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ScanImg from "../image/scan.jpg"

import TablesImg from "../image/IMG_5495.jpg";
import AdaImg from "../image/IMG_5492.jpg"
import DbImg from "../image/IMG_5491.jpg"

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
};


export default function MatthPage() {
    return (
        <div className="MatthPage">
            <ButtonBack/>
            <Typewriter text="CYBERHUMANUM'EST 2025 - L'EVENEMENT" speed={50}/>
            <div className="body">
                <div className="firstSection">
                    <div className="strategy">
                        <h2>Notre strategie</h2>
                        <p className="bahnschrift">Notre stratégie principale fût dans un premier temps d'obtenir le
                            plus d'informations sur notre réseau et surtout nos vulnérabilités.
                            La partie LID de l'équipe avait accès à notre réseau, alors que notre partie offensive
                            était localisée sur le réseau des anumérics.
                            Nous avons alors essayé de cartographier le plus précisément possible chaque partie de l'infrastructure:
                            <ul>
                                <li>La LID s'est occupée de la cartographie de notre réseau grâce notamment à des scans</li>
                                <li>La LIO s'est empressé de chercher des vulnérabilités et des
                                domaines dans le réseau adverse afin de patcher ces potentielles même vulnérabilités dans notre
                                réseau.</li>
                            </ul>
                        </p>
                    </div>
                    <div className="img-strategy">
                        <img src={ScanImg} alt="Scan Nmap"/>
                    </div>

                </div>
                <div className="secondSection">
                    <div className="img-attacks">
                        <Slider {...settings}>
                            <div>
                                <img src={AdaImg} alt="Attack 1" />
                            </div>
                            <div>
                                <img src={DbImg} alt="Attack 2" />
                            </div>
                            <div>
                                <img src={TablesImg} alt="Attack 3" />
                            </div>
                        </Slider>

                    </div>
                    <div className="attacks">
                        <h2>Nos attaques</h2>
                        <p className="bahnschrift">
                            Les attaques ont pris des formes différentes tout au long de l'exercice.
                            Dans un premier temps, on s'est concentré sur les attaques dites "évidentes": crédentials
                            par défaut,
                            bruteforce, arborescence non protégée...<br/>
                            Grâce à notre rapidité, nous avons pu accéder à plusieurs de leurs services mal protégés,
                            notamment leur Gitlab,
                            GLPI et autres grâce auxquels nous avons pu recupérer nos premiers flags.
                            <br/><br/>
                            Par la suite, nous avons pu exploiter des failles avec une complexité plus élevée dans
                            certains
                            de leurs sites gouvernementaux ou d'influence. Par exemple, nous avons pu exploiter leur
                            serveur "Adamantium":
                            Obtention d'un reverse-shell via une CVE, scan avec linpeas, mise en place d'une backdoor
                            dans les crontab,
                            et dump de leur BDD (qui contenait d'ailleurs quelques flags).
                            <br/><br/>
                            Plus tard dans l'évenement, notamment pendant la nuit de mardi à mercredi, nous avons tenté des attaques
                            physiques sur les équipements adverses.
                            Nous avons (Matthéo) implanté un programme malveillant dans une clé USB: son effet ? Une fois branchée, le PC
                            reboot en boucle, et si par chance la victime arrive à sortir de la boucle nous obtenons une backdoor sur son PC.
                            Malheuresement, nos attaques ont été infructueuses et on très souvent terminé par la case prison.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
