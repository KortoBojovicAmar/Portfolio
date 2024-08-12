import "./index.scss";
import "../Layout/index.scss"
import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCss3, faHtml5, faJsSquare, faNodeJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import LogoK from '../../assets/images/logo-Kondulé.png';
import gasDiffusionFull from '../../assets/images/gas_diffusion_full.png';
import gasDiffusionPart1 from '../../assets/images/gas_diffusion_part_1.png';
import gasDiffusionPart2 from '../../assets/images/gas_diffusion_part_3.png';
import gasDiffusionPart3 from '../../assets/images/gas_diffusion_part_2.png';
import gasDiffusionPart4 from '../../assets/images/gas_diffusion_part_4.png';
import greenRootPart1 from '../../assets/images/greenRoots/green_roots_part_1.png';
import greenRootPart2 from '../../assets/images/greenRoots/green_roots_part_2.png';
import greenRootPart3 from '../../assets/images/greenRoots/green_roots_part_3.png';
import greenRootPart4 from '../../assets/images/greenRoots/green_roots_part_4.png';
import greenRootPart5 from '../../assets/images/greenRoots/green_roots_part_5.png';
import greenRootPart6 from '../../assets/images/greenRoots/green_roots_part_6.png';
import greenRootPart7 from '../../assets/images/greenRoots/green_roots_part_7.png';
import greenRootPart8 from '../../assets/images/greenRoots/green_roots_part_8.png';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import Logo from "./Logo";

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() =>{
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="container projects-page">
                <div className="text-zone">
                     <h1>
                        <AnimatedLetters 
                        index={15} letterClass={letterClass} stringArray={['M', 'e', 's', ' ', 'p', 'r', 'o', 'j', 'e', 't', 's']}/>
                     </h1>
                </div>
                <div className="container-projects">
                <div className="text-zone-project">

                    <div className="card">
                        <h2>Gas Diffusion</h2>
                        <Carousel>
                            <img src={gasDiffusionFull} alt="test projet 1"/>
                            <img src={gasDiffusionPart1} alt="test projet 1"/>
                            <img src={gasDiffusionPart2} alt="test projet 1"/>
                            <img src={gasDiffusionPart3} alt="test projet 1"/>
                            <img src={gasDiffusionPart4} alt="test projet 1"/>
                        </Carousel>
                        <h3> 
                            Gas Diffusion est un outil de recherche qui permet à un utilisateur de déduire des propriétés physiques
                            à partir d’échantillons de ciment ou de béton.
                            Il s’agit de la migration et d’une refonte compléte de l’interface d’un outil plus ancien.
                            La partie front-end est codée en Vue 3 et communique avec un back préexistant (Lambda AWS / Python).
                            <br/>
                            <br/>
                            <i>(Projet réalisé lors d'un stage).</i>
                            <br/>
                            <br/>
                            Lien vers l'<a className="application-link" href="https://dev.d35b2bs6q6ilgi.amplifyapp.com/" target="_blank">application</a>.
                        </h3>
                    </div>
                </div>
                <div className="text-zone-project">
                    <div className="card">
                        <h2> Green Roots</h2>
                        <Carousel>
                            <img src={greenRootPart1} alt="test projet 1"/>
                            <img src={greenRootPart2} alt="test projet 1"/>
                            <img src={greenRootPart3} alt="test projet 1"/>
                            <img src={greenRootPart4} alt="test projet 1"/>
                            <img src={greenRootPart5} alt="test projet 1"/>
                            <img src={greenRootPart6} alt="test projet 1"/>
                            <img src={greenRootPart7} alt="test projet 1"/>
                            <img src={greenRootPart8} alt="test projet 1"/>
                        </Carousel>
                        <h3>
                            Green Roots est une plateforme web qui permet à ses usagers de participer à la reforestation via différentes campagnes.
                            Le site propose plusieurs fonctionnalités selon le statut de l’usager.
                            Il existe également un back office pour administrer l'application.
                            La partie front-end à été écrite en React et la partie back-end avec Node.js et Express. La base de données à été créée avec PostgreSQL et liée avec Sequelize.
                            <br/>
                            <br/>
                            <i>(Projet réalisé pour le titre professionnel DWWM).</i>
                        </h3>
                    </div>
                    </div>
                </div>
            </div>
            <Loader type="ball-spin-fade-loader"/>
        </>
    )
}

export default Projects;