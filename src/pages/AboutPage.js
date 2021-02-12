import React from 'react';
import Title from '../components/Title';
import ImageSection from '../components/ImageSection';
import SkillsSection from '../components/SkillsSection';
import ServicesSection from '../components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'Acerca De'} span={'Acerca De'} />
            <ImageSection />
            <Title title={'Habilidades'} span={'Habilidades'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Java'} progress={'75%'} />
                <SkillsSection skill={'C#'} progress={'50%'} />
                <SkillsSection skill={'Javascript'} progress={'45%'} />
                <SkillsSection skill={'PHP'} progress={'35%'} />
                <SkillsSection skill={'Node.js'} progress={'30%'} />
                <SkillsSection skill={'React.js'} progress={'25%'} />
                <SkillsSection skill={'Game Dev'} progress={'75%'} />
            </div>
            <Title title={'Servicios'} span={'Servicios'} />
            <div className="services-container">
                <ServicesSection image={design} title={'Desarrollo Web | BackEnd'} text={'Desarrollo web BackEnd con NodeJs el framework Express, Google Oauth, JWT, etc.'} />
                <ServicesSection image={intelligence} title={'Apps Móviles'} text={'Desarrollo de Apps móviles Android nativas y multiplataforma (Flutter)'} />
                <ServicesSection image={gamedev} title={'Game Development'} text={'Desarrollo de videojuegos en Unity con C#, 2D y 3D'} />
            </div>
        </div>
    )
}

export default AboutPage;
