import React from 'react';
import '../css/footer.css'
import img1 from '../assets/img/img1.jpg'
import img2 from '../assets/img/img2.jpg'
import img3 from '../assets/img/img3.jpg'
import img4 from '../assets/img/img4.jpg'
import img5 from '../assets/img/img5.jpg'
import img6 from '../assets/img/img6.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return ( 
        <footer>
            <div className='images'>
                <img src={img1} alt="imagem" className='footer-images' id='img1'/>
                <img src={img2} alt="imagem" className='footer-images' id='img2'/>
                <img src={img3} alt="imagem" className='footer-images' id='img3'/>
                <img src={img4} alt="imagem" className='footer-images' id='img4'/>
                <img src={img5} alt="imagem" className='footer-images' id='img5'/>
                <img src={img6} alt="imagem" className='footer-images' id='img6'/>
            </div>

            <div className='social-media'>
                <a href="https://github.com/Tassio2002/KiViagem_v2" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className='social-icon'/></a>
                <a href="https://www.linkedin.com/in/tassio-santos-74b618207/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className='social-icon'/></a>
                <a href="https://www.linkedin.com/in/tassio-santos-74b618207/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGoogle} className='social-icon'/></a>
                <a href="https://www.linkedin.com/in/tassio-santos-74b618207/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className='social-icon'/></a>
                <a href="https://www.linkedin.com/in/tassio-santos-74b618207/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} className='social-icon'/></a>
                <a href="https://www.linkedin.com/in/tassio-santos-74b618207/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp} className='social-icon'/></a>
            </div>
            <div className='copyright'>
                <p>@2022 Copyright - Tassio dos Santos</p>
            </div>
        </footer>
     );
}
 
export default Footer;