import Loader from 'react-loaders';
import "../Layout/index.scss";
import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

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
        .sendForm('service_41okf6k', 'template_7kbn7ts', refForm.current, 'n20PDO5k7cFg9zEZr')
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
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                        index={15} letterClass={letterClass} stringArray={['C', 'o', 'n', 't', 'a', 'c', 't', 'e', 'z', ' ', ' ', 'm', 'o', 'i']}/>
                    </h1>
                    <p>
                        Notice the use of %PUBLIC_URL% in the tags above. It will be replaced with the URL of the `public` folder during the build. Only files inside the `public` folder can be referenced from the HTML.
                        Notice the use of %PUBLIC_URL% in the tags above. It will be replaced with the URL of the `public` folder during the build. Only files inside the `public` folder can be referenced from the HTML. 
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
            <Loader type="ball-spin-fade-loader"/>
        </>
    )
}

export default Contact;