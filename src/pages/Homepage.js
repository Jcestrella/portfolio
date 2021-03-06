import React from 'react';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hola, Soy
                    <span> Juan Carlos.</span>
                </h1>
                <p className="h-sub-text">
                    Pasante de Ingeniería en Sistemas Computacionales en proceso de titulación, especializado en el desarrollo de tecnologías móviles, principalmente Android, fanático del desarrollo de videojuegos y del desarrollo web BackEnd
                </p>
                <div className="icons">
                    <a target="_blank" rel="noreferrer" href="//facebook.com/Jcestrella49" className="icon-holder" >
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </a>
                    <a target= "_blank" rel="noreferrer" href="//github.com/Jcestrella" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a target= "_blank" rel="noreferrer" href="//linkedin.com/in/Jcestrella/" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon ln" />
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;