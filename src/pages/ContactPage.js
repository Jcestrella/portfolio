import React from 'react';
import ContactItem from '../components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Title from '../components/Title'

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Title title={'Contacto'} span={'Contacto'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe title="iframeaa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d934.3842212060867!2d-86.91250751192749!3d20.48420599913929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDI5JzAzLjEiTiA4NsKwNTQnNDMuMSJX!5e0!3m2!1ses!2smx!4v1612228232990!5m2!1ses!2smx" width="600" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+52 987-118-5950'} title={'Teléfono'} />
                    <ContactItem icon={email} text1={'jcestrella49@gmail.com'} title={'Email'} />
                    <ContactItem icon={location} text1={'Carr. Transversal Km 4.5'} text2={'Cozumel QRoo, México'} title={'Ubicación'} />
                </div>
            </div>
        </div>
    )
}

export default ContactPage
