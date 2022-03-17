import React from 'react';
import HeaderPacotes from './components/HeaderPacotes';
import PessoalSection from './components/Pessoal';
import TestemonialSection from './components/Testemonials';
import Test1 from './assets/testemonial1.jpg'
import Test2 from './assets/testemonial2.jpg'
const IndexPacotes = () => {
    return ( 
    <>
        <HeaderPacotes />
        <PessoalSection />
        <section className="testemonials">
        <TestemonialSection 
        testImage={Test1}
        testComent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus officiis expedita earum dolor sapiente odit fugiat itaque natus perspiciatis? Illo, voluptates quod tenetur natus quaerat quisquam quibusdam optio ratione rem!"
       testName="Raissa Neves"
       alt="Selfie de mulher ruiva em uma escada."
       />
        <TestemonialSection 
        testImage={Test2}
        testComent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus officiis expedita earum dolor sapiente odit fugiat itaque natus perspiciatis? Illo, voluptates quod tenetur natus quaerat quisquam quibusdam optio ratione rem!"
       testName="Albert Azevedo"
       alt="Homen negro com oculos amarelos."
       />
       </section>
    </>
        );
}
 
export default IndexPacotes;