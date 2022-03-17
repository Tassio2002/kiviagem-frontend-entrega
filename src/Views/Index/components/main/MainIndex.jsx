import React from 'react';

import '../../css/main.css'
import MainImage from '../../assets/img/main-image.svg'

const MainIndex = () => {
    return (
        <div className='main-container'>
            <div className='title'>
                <h2>Explore o mundo</h2>
                <h1>Nossa missão é tornar o seu sonho possivel</h1>

                <div className='container'>
                    <div className='select-container'>
                        <div className='selects'>
                            <h4>Tipo de viagem</h4>
                            <select id='select'>
                                <option>Nacional</option>
                                <option>Internaiconal</option>
                            </select>
                        </div>

                        <div className='selects'>
                            <h4>Mês da viagem</h4>
                            <select >
                                <option>Janeiro</option>
                                <option>Fevereiro</option>
                                <option>Março</option>
                                <option>Abril</option>
                                <option>Maio</option>
                                <option>Junho</option>
                                <option>Julho</option>
                                <option>Agosto</option>
                                <option>Setembro</option>
                                <option>Outubro</option>
                                <option>Novembro</option>
                                <option>Dezembro</option>
                            </select>
                        </div>
                    </div>

                    <div className='btn-main'>
                        <button>Ver ofertas</button>
                    </div>
                </div>


            </div>
            <div className='main-image'>
                <img src={MainImage} alt="Ilustração de duas pessoas viajando, uma delas porta um binoculo." />
            </div>
        </div>
    );
}

export default MainIndex;