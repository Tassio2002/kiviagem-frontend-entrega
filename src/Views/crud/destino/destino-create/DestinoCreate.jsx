import React from 'react';

import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import destinoService from '../../../../services/destino.service';

import DestinoForm from './assets/destino-form.jpg'

const DestinoCreate = () => {

    const [local, setLocal] = useState('');
    const [preco, setPreco] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const saveDestino = (c) => {
        c.preventDefault();

        const destino = { local, preco, id };
        if (id) {
            //update
            destinoService.update(destino)
                .then(response => {
                    alert('Destino editado', response.data);
                    navigate('/DestinoCRUD');
                })
                .catch(error => {
                    console.log('Algo deu errado', error);
                });
        }
        else {
            //create
            destinoService.create(destino)
                .then(response => {
                    //trocar por alert
                    alert('Destino adicionado', response.data);
                    navigate('/DestinoCRUD');
                })
                .catch(error => {
                    console.log('Algo deu errado', error);
                });
        }
    }

    useEffect(() => {
        if (id) {
            destinoService.get(id)
                .then(destino => {
                    setLocal(destino.data.local);
                    setPreco(destino.data.preco);
                })
                .catch(error => {
                    console.log('Algo deu errado', error);
                })
        }
    }, [])

    return (
<div className="flex-container-form">
            
            <div className="form-container">
                <div className="form-img">
                    <img src={DestinoForm} alt="" />
                </div>

                <div className="form">
                    <form>
                        <h2>Adicionar destino</h2>
                        <label>Local:</label>
                        <input
                            type="text"
                            className="form-imput"
                            id="nome"
                            value={local}
                            onChange={(c) => setLocal(c.target.value)}
                            placeholder="Digite o local do destino.."
                        />

                        <label>Preco:</label>
                        <input
                            type="number"
                            className="form-imput"
                            id="email"
                            value={preco}
                            onChange={(c) => setPreco(c.target.value)}
                            placeholder="Digite o preço do destino.."
                        />

                        <div className="btn-form">
                            <button className="btn-save" onClick={(c) => saveDestino(c)}>Salvar</button>
                            <Link to='/DestinoCRUD' className="btn-back">Voltar</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default DestinoCreate;