import "./index.scss";
import "../Layout/index.scss"
import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCss3, faHtml5, faJsSquare, faNodeJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import Logo from "./Logo";

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() =>{
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                        index={15} letterClass={letterClass} stringArray={['Q', 'u', 'i', ' ', 's', 'u', 'i', 's', '-', 'j', 'e', ' ', '?']}/>
                    </h1>
                    <div className="paragraph-container">
                        <p>      
                            Diplômé d’un master en arts visuels en 2017,
                            j’ai exercé en tant qu’artiste plasticien, commissaire d’exposition,
                            et responsable d’un espace d’art. Après un post-master en art numérique en 2022,
                            j’ai entrepris une reconversion professionnelle pour devenir développeur web.
                        </p>
                        <p>      
                            Lors d’une formation d’un an, J’ai eu l’opportunité d’apprendre les bonnes pratiques html,
                            notamment l’accessibilité, et les technologies suivantes :
                            CSS, Sass, JavaScript avec les frameworks React et Vue.Js côté front-end.
                            Coté back-end j’ai été formé sur Express avec Node.Js,
                            j’ai également appris à modéliser une base de données relationnelle avec PostgreSQL.
                        </p>
                        <p>      
                            J’ai désormais pour ambition d'approfondir et d’étoffer mes connaissances afin d’ouvrir le champ des possibles.
                        </p>
                    </div>
                </div>
            </div>
            <Logo className="mobile-K"/>
            <Loader type="ball-spin-fade-loader"/>
        </>
    )
}

export default About;