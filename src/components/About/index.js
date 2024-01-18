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
                <p>      
                    Notice the use of %PUBLIC_URL% in the tags above.
                    It will be replaced with the URL of the `public` folder during the build.
                    Only files inside the `public` folder can be referenced from the HTML.
                </p>
                <p>      
                    Notice the use of %PUBLIC_URL% in the tags above.
                    It will be replaced with the URL of the `public` folder during the build.
                    Only files inside the `public` folder can be referenced from the HTML.
                </p>
                <p>      
                    Notice the use of %PUBLIC_URL% in the tags above.
                    It will be replaced with the URL of the `public` folder during the build.
                    Only files inside the `public` folder can be referenced from the HTML.
                </p>
            </div>
            {/* <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faNodeJs} color="#539E43"/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faReact} color="#087A9F"/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faSass} color="#C66394"/>
                    </div>
                </div>
            </div> */}
            </div>
            <Logo/>
            <Loader type="ball-spin-fade-loader"/>
        </>
    )
}

export default About;