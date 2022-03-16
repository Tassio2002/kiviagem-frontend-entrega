import React from 'react';

import HeaderImage from '../assets/header-image3.svg'
import '../css/header-destinos.css'

const HeaderDestinos = () => {
    return ( 
        <>
        <header className='header-destino'>
            <div className="header-title">
                <h1>Viva sua</h1>
                <h1>aventura</h1>
                <p>Viva os momentos mais incriveis de toda sua vida e melhor <strong>sem se preocupar com a parte chata e burocratica de uma viagem</strong>, agora é a hora de escolher sua proxima jornada, conte conosco</p>
            </div>

            <div className='header-image'>
                <img src={HeaderImage} alt="" />
            </div>   
        </header>


        </>
     );
}
 
export default HeaderDestinos;