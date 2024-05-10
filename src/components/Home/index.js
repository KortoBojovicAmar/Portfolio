import { useEffect, useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import LogoK from '../../assets/images/logo-Kondulé.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVuejs, faCss3, faHtml5, faJsSquare, faNodeJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const hiArray = ['S', 'a', 'l', 'u', 't', ','];
    const nameArray = ['o', 'r', 't', 'o'];
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v'];

    useEffect(() =>{
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
                    <AnimatedLetters letterClass={letterClass} stringArray={hiArray} index={12}/>
                    <br/> 
                    <img className='logo' src={LogoK} alt='developer'/>
                    <span className='absolute-text'>
                        <AnimatedLetters letterClass={letterClass} stringArray={nameArray} index={15}/>
                    </span>
                    <br/>
                    <AnimatedLetters letterClass={letterClass} stringArray={jobArray} index={22}/>
                    </h1>
                    <h2> Developpeur Web et Webmobile</h2>
                    <Link to='/contact' className='flat-button'>CONTACTEZ MOI</Link>
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faReact} color="#087A9F"/>
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faNodeJs} color="#539E43"/>
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faVuejs} color="#3FB27F"/>
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faSass} color="#C66394"/>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="ball-spin-fade-loader"/>
        </>
    )
}

export default Home;