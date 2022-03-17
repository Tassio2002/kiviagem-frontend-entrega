import React from 'react';

import Pessoal1 from '../assets/pessoal1.jpg'
import Pessoal2 from '../assets/pessoal2.jpg'
import Pessoal3 from '../assets/pessoal3.jpg'
import '../css/pessoal.css'

const PessoalSection = () => {
    return ( 
        <section className="pessoal">
            <div className="photos">
                <img src={Pessoal1} alt="Mulher loira debaixo de uma arvore." />
                <img src={Pessoal2} alt="Mulher morena a frente de uma parede amarela." />
                <img src={Pessoal3} alt="Homen negro segurando um globo." />
                <h2>Sobre nosso pessoal</h2>
            </div>
            <div className="pessoal-info">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur rerum amet neque odio. Quibusdam nemo ut quo,
                    repellat quas esse, molestiae quae ullam sit saepe, libero sed a. Culpa a, accusantium quo nostrum excepturi aut quam
                    iusto molestias velit quaerat voluptates enim nam dolor reiciendis perspiciatis. Aperiam provident eum iusto?
                </p>
                <button>Conheça mais</button>
            </div>
        </section>
     );
}
 
export default PessoalSection;