import { useEffect, useState } from 'react';
import './index.scss';
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const hiArray = ['S', 'a', 'l', 'u', 't', ','];
    const nameArray = ['o', 'r', 't', 'o'];
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v'];

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
                    <img src={LogoTitle} alt='developer'/>
                    <AnimatedLetters letterClass={letterClass} stringArray={nameArray} index={15}/>
                    <br/>
                    <AnimatedLetters letterClass={letterClass} stringArray={jobArray} index={22}/>
                    </h1>
                    <h2> Developpeur Web et Webmobile</h2>
                    <Link to='/contact' className='flat-button'>CONTACTEZ MOI</Link>
                </div>
                <Logo/>
            </div>
            <Loader type="ball-spin-fade-loader"/>
        </>
    )
}

export default Home;