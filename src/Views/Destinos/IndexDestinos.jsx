import React from 'react';
import CardDestino from './Components/CardDestino';
import HeaderDestinos from './Components/HeaderDestino';
import SectionOptions from './Components/SectionOptions';
import Paris from './assets/paris.jpg'
import Tailandia from './assets/ilha.jpg'
import Republica from './assets/praga.jpg'
import Portugal from './assets/lisboa.jpg'
import Peru from './assets/lima.jpg'
import Africa from './assets/cabo.jpg'
import Colombia from './assets/bogota.jpg'
import Japao from './assets/toquio.jpg'

import './css/index-destinos.css'
const IndexDestinos = () => {
    return (
        <>
            <HeaderDestinos />
            <SectionOptions />
            <section className='section-cards'>
                <div className="cards-container">
                    <CardDestino
                        image={Paris}
                        country="França"
                        city="Paris"
                        desc="Nenhum outro destino faz o coração suspirar como a simples menção a Paris. A cidade encanta com sua extraordinária arte."
                        price={6499}
                        note="9,71"
                        visits="75 mil"
                    />
                    <CardDestino
                        image={Tailandia}
                        country="Tailândia"
                        city="Ilha de Phuket"
                        desc="Um destino paradisíaco, seguro e barato, com um povo amigável e boa infraestrutura turística. Precisa de mais alguma coisa?"
                        price={6499}
                        note="9,54"
                        visits="65 mil"
                    />
                    <CardDestino
                        image={Republica}
                        country="República Tcheca"
                        city="Praga"
                        desc="A República Tcheca é famosa pela incrível arquitetura, que une construções históricas em diversos estilos, de castelos medievais a prédios modernos."
                        price={6499}
                        note="8,88"
                        visits="46 mil"
                    />
                    <CardDestino
                        image={Portugal}
                        country="Portugal"
                        city="Lisboa"
                        desc="Em 1500, Portugal descobriu o Brasil. Em 2019, o Brasil descobriu Portugal. Os brasileiros já bateram todos os recordes de visitação ao pequeno país"
                        price={6499}
                        note="8,85"
                        visits="115 mil"
                    />

                    <CardDestino
                        image={Peru}
                        country="Peru"
                        city="Lima"
                        desc="Há vários motivos para visitar o Peru, e não é só porque o país está perto da gente!"
                        price={6499}
                        note="8,85"
                        visits="32 mil"
                    />

                    <CardDestino
                        image={Africa}
                        country="África do Sul"
                        city="Cidade do Cabo"
                        desc="A África do Sul vem conquistando os viajantes brasileiros com atrações bonitas e de alta qualidade. "
                        price={6499}
                        note="8,80"
                        visits="42 mil"
                    />

                    <CardDestino
                        image={Colombia}
                        country="Colômbia"
                        city="Bogotá"
                        desc="A Colômbia é o melhor exemplo de como um país pode evoluir, deixando o passado conturbado para trás. "
                        price={6499}
                        note="8,71"
                        visits="77 mil"
                    />

                    <CardDestino
                        image={Japao}
                        country="Japão "
                        city="Tokyo"
                        desc="Mesmo caindo da 1ª para a 8ª posição no ranking, não há quem discorde de que o Japão é um destino fascinante."
                        price={6499}
                        note="8,67"
                        visits="23 mil"
                    />

                </div>
            </section>
        </>
    );
}

export default IndexDestinos;