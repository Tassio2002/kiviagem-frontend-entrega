import React from 'react';

import MainIndex from './components/main/MainIndex';
import PromoCard from './components/promo/PromoIndex';
import ServicesSection from './components/services/ServicesIndex';
import TokyoImage from './assets/img/tokyo.png'
import ParisImage from './assets/img/paris.png'

import './css/index.css'
import FinalSection from './components/final/FinalIndex';
import ClientRead from '../crud/cliente/components/cliente-read/ClienteRead';

const Index = () => {
    return ( 
        <div>
            <MainIndex />
            <ServicesSection />
            <section className='promos'>
                <PromoCard city="TÓQUIO" percent="20" image={TokyoImage}/>
                <PromoCard city="PARIS" percent="30" image={ParisImage}/>
            </section>
            <ClientRead />
            <FinalSection />
            
        </div>
    );
}
 
export default Index;