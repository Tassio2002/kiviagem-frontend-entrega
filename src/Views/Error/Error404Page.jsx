import React from 'react';
import ErrorImg from './assets/img/error-img.svg'

import './styles.css'

const Error404Page = () => {
    return (
        <div className="error-container">
            <div className="error-text">
                <h1>404</h1>
                <h3>Página não encontrada</h3>
            </div>
            <div className="error-img">
                <img src={ErrorImg} alt="error img" />
            </div>
        </div>
    );
}

export default Error404Page;