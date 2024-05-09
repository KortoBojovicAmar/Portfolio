import Loader from 'react-loaders';
import "../Layout/index.scss";
import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Mail from './Mail';
// import ThreeDeeObject from './3dObject';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() =>{
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (event) => {
        event.preventDefault()

        emailjs
        .sendForm(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE, refForm.current, process.env.REACT_APP_KEY)
        .then (
            () => {
                console.log("message envoyé")
                alert('Votre message a été envoyé')
                window.location.reload(false)
            },
            () => {
                alert("Votre message n'a pu être envoyé. Veuillez réésayer.")
            }
        )
    }

    return (
        <>
            <div className='container contact-page'>
            {/* <div id='container3D'>
                <ThreeDeeObject />
            </div> */}
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                        index={15} letterClass={letterClass} stringArray={['C', 'o', 'n', 't', 'a', 'c', 't', 'e', 'z', ' ', ' ', 'm', 'o', 'i']}/>
                    </h1>
                    <p>
                    Si vous êtes intéressé par mon profil, joignez moi via LinkedIn ou ce formulaire !
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail} >
                            <ul>
                                <li className='half'>
                                    <input type='text' name='user_name' placeholder='Votre nom' required/>
                                </li>
                                <li className='half'>
                                    <input type='email' name='user_email' placeholder='Votre email' required/>
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder="L'intitulé" required/>
                                </li>
                                <li>
                                    <textarea name='message' placeholder='Ici votre message' required/>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Mail/>
            <Loader type="ball-spin-fade-loader"/>
        </>
    )
}

export default Contact;