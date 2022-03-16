import React from 'react';

import '../css/section-options.css' 

const SectionOptions = () => {
    return ( 
        <section className="section-option">
            <div className="option-container">

                <div className="option-title">
                    <h2>Escolha o seu proximo destino</h2>
                </div>
                
                <div className="btn-container">
                    <button className="btn" id='btn-nacional'>Nacional</button>
                    <button className="btn" id='btn-internacional' >internacional</button>
                </div> 

            </div>          
        </section>
     );
}
 
export default SectionOptions;