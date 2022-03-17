import React from 'react';

import '../../css/promo.css'
const PromoCard = (props) => {
    return ( 
        <div className="promo-card">

            <div className="card-info">

                <div className="card-title">
                    <h1>PACOTE</h1>
                    <h1 className='city-title'>{props.city}</h1> 
                </div>

                <div className="card-offer">

                    <div className="percent">
                        <p>Até</p>
                        <h2>{props.percent}%</h2>
                        <h4>DE DESCONTO</h4>
                    </div>

                    <div className="offer">
                        <p>Em até</p>
                        <h2>12X</h2>
                        <h4>Sem juros</h4>
                    </div>

                </div>

            </div>

            <div className="card-image">
                <img src={props.image} alt={props.alt} />
            </div>
        </div>
     );
}
 
export default PromoCard;