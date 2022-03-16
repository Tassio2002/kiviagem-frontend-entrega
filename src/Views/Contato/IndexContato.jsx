import React from 'react';

import './css/contato.css'
const IndexContato = () => {
    return ( 
        <main className="contact">
            <form>
                <h1>Entre em contato</h1>
                <p>Fale conosco para tirar todas as suas duvidas, responderemos em tempo record!</p>
                
                <input type="text" placeholder='Digite seu nome..'/>
                
                <input type="email" placeholder='Digite seu melhor email..'/>
                
                <input type="phone" placeholder='Digite seu numero..'/>
                
                <input type="date" min="1900-01-01" max="2022-12-31"/>
                
                <textarea cols="100" rows="5" placeholder='Deixe sua mensagem..'></textarea>
                <button>Enviar!</button>
            </form>
        </main>
     );
}
 
export default IndexContato;