import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>Soy<span> Juan Carlos</span></h4>
                <p className="about-text">
                    Desarrollador Jr BackEnd con NodeJs, he realizado proyectos con el stack MERN. Mi último proyecto fue un videojuego educativo para el Centro de Investigación Científica de Yucatán.
                    Tengo amplios conocimientos de Java orientado a apps móviles, conocimientos amplios en bases de datos SQL y NoSQL.
                    Se trabajar en equipo y estoy dispuesto a seguir aprendiendo.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Nombre</p>
                        <p>Edad</p>
                        <p>Idiomas</p>
                        <p>Estado</p>
                        <p>Ciudad</p>
                        <p>País</p>
                    </div>
                    <div className="right-section">
                        <p>: Juan Carlos Estrella</p>
                        <p>: 22</p>
                        <p>: Español, Inglés</p>
                        <p>: Quintana Roo</p>
                        <p>: Cozumel</p>
                        <p>: México</p>
                    </div>
                </div>
                <button className="btn">Descargar CV</button>
            </div>
        </div>
    )
}

export default ImageSection;
