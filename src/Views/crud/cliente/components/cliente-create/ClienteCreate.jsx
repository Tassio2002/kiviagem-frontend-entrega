import React from 'react';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import clienteService from '../../../../../services/cliente.service';

import './assets/styles.css'

const ClienteCreate = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const saveCliente = (c) => {
        c.preventDefault();

        const cliente = { nome, email, telefone, id };
        if (id) {
            //update
            clienteService.update(cliente)
                .then(response => {
                    alert('Cliente editado', response.data);
                    navigate('/ClienteCreate');
                })
                .catch(error => {
                    console.log('Algo deu errado', error);
                });
        }
        else {
            //create
            clienteService.create(cliente)
                .then(response => {
                    //trocar por alert
                    alert('Cliente adicionado', response.data);
                    navigate('/ClienteCreate');
                })
                .catch(error => {
                    console.log('Algo deu errado', error);
                });
        }
    }

    useEffect(() => {
        if(id) {
            clienteService.get(id)
                .then(cliente => {
                    setNome(cliente.data.nome);
                    setEmail(cliente.data.email);
                    setTelefone(cliente.data.telefone);
                })
                .catch(error => {
                    console.log('Algo deu errado', error);
                })
        }
    }, [])

    return (
        <>
            <h1>Adicionar cliente</h1>
            <div className="form-container">
                <form>
                    <h3>Insira os dados do cliente</h3>

                    <label>Nome:</label>
                    <input
                        type="text"
                        className="form-imput"
                        id="nome"
                        value={nome}
                        onChange={(c) => setNome(c.target.value)}
                        placeholder="digite o nome do cliente.."
                    />

                    <label>Email:</label>
                    <input
                        type="text"
                        className="form-imput"
                        id="email"
                        value={email}
                        onChange={(c) => setEmail(c.target.value)}
                        placeholder="digite o email do cliente.."
                    />

                    <label>Telefone:</label>
                    <input
                        type="text"
                        className="form-imput"
                        id="telefone"
                        value={telefone}
                        onChange={(c) => setTelefone(c.target.value)}
                        placeholder="digite o telefone do cliente.."
                    />
                    <div className="btn-form">
                        <button className="btn-save" onClick={(c) => saveCliente(c)}>Salvar</button>
                        <Link to='/ClienteCreate'>Voltar</Link>
                    </div>
                </form>

            </div>
        </>
    );
}

export default ClienteCreate;