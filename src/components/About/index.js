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
            </div>
            <Logo/>
            <Loader type="ball-spin-fade-loader"/>
        </>
    )
}

export default About;