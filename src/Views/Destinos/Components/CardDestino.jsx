import React from 'react';

import '../css/card-destinos.css'
const CardDestino = (props) => {
    return ( 
        <div className="card-container">

            <div className="card-top">
                <img src={props.image} alt="" />
            </div>

            <div className="card-mid">
                <span>{props.country}</span>
                <h3>{props.city}</h3>
                <p>{props.desc}</p>
            </div>

            <div className="card-bottom">

                <div id="note" className='card-infos'>
                    <h4>{props.note}</h4>
                    <p>nota</p>
                </div>

                <div id="price" className='card-infos'>
                    <h4>R${props.price}.00</h4>
                    <p>A partir</p>
                </div>

                
                <div id="visits" className='card-infos'>
                    <h4>{props.visits}</h4>
                    <p>visitas</p>
                </div>

            </div>
        </div>
     );
}
 
export default CardDestino;