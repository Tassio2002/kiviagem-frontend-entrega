import React from 'react';

import MainIndex from './components/main/MainIndex';
import PromoCard from './components/promo/PromoIndex';
import ServicesSection from './components/services/ServicesIndex';
import TokyoImage from './assets/img/tokyo.png'
import ParisImage from './assets/img/paris.png'

import './css/index.css'
import FinalSection from './components/final/FinalIndex';


const Index = () => {
    return (
        <div>
            <MainIndex />
            <ServicesSection />
            <section className='promos'>
                <PromoCard
                city="TÓKYO"
                percent="20"
                image={TokyoImage}
                alt="Um centro urbano em Tokyo no Japão, muitas pessoas na rua, vários comércios."
                />

                <PromoCard 
                city="PARIS"
                percent="30"
                image={ParisImage}
                alt="Visão a distância da torre eiffel, céu bem azul com poucas nuvens"
                />
            </section>
            <FinalSection />
        </div>
    );
}

export default Index;