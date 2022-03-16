import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import FinalImage from '../../assets/img/final-image.svg'
import '../../css/final.css'



const FinalSection = () => {
    return ( 
        <section className='final-section'>

            <div className="final-info">
                <h1>Acumule pontos que não são passageiros,</h1>
                <h1 className="text-color">vai perder essa oportunidade?</h1>

                <p>
                Aqui tudo o que voce fizer relacionado a sua viagem geram pontos para as proximas aventuras,
                <strong className="text-color">comprar passagem, alugar veiculos, visitar pontos turisticos e até comer em restaurantes te dá direito a pontuação.</strong>
                </p>
                <div className="points">
                    <ul className='final-list'>
                        <li>
                            <FontAwesomeIcon icon={faTicketAlt} className='final-icon'/>
                            <p>Passagem aérea <strong>500pts</strong></p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCar} className='final-icon'/>
                            <p>Aluguel de carros <strong>200pts</strong></p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCompass} className='final-icon'/>
                            <p>Visitar pontos turísticos <strong>100pts</strong></p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faUtensils} className='final-icon'/>
                            <p>Comer em restaurantes locais <strong>50pts</strong></p>
                        </li>
                    </ul>
                    
                </div>
                <button className='final-btn'>Saiba mais</button>
            </div>


            <div className="final-image">
                <div className="image1">
                    <img src={FinalImage} alt="Compras online" className='final-image-principal'/>
                </div>
              
            </div>
        </section>
     );
}
 
export default FinalSection;