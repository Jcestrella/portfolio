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
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'50%'} />
                <SkillsSection skill={'Javascript'} progress={'30%'} />
                <SkillsSection skill={'Javascript'} progress={'70%'} />
                <SkillsSection skill={'Javascript'} progress={'35%'} />
                <SkillsSection skill={'Javascript'} progress={'50%'} />
                <SkillsSection skill={'Javascript'} progress={'45%'} />
                <SkillsSection skill={'Javascript'} progress={'80%'} />
            </div>
            <Title title={'Services'} span={'Services'} />
            <div className="services-container">
                <ServicesSection image={design} title={'Web Design'} text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'} />
                <ServicesSection image={intelligence} title={'Artificial Intelligence'} text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'} />
                <ServicesSection image={gamedev} title={'Game Development'} text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'} />
            </div>
        </div>
    )
}

export default AboutPage;
