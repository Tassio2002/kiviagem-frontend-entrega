import React from 'react';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import contatoService from '../../services/contato.service';
import ContatoForm from './assets/contato-form.jpg'
import './assets/styles.css';

const IndexContato = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [mensagem, setMensagem] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const saveContato = (c) => {
        c.preventDefault();

        const contato = { nome, email, telefone, mensagem, id };
        if (id) {
            //update
            contatoService.update(contato)
                .then(response => {
                    alert('Contato editado', response.data);
                    navigate('/ContatoCRUD');
                })
                .catch(error => {
                    console.log('Algo deu errado', error);
                });
        }
        else {
            //create
            contatoService.create(contato)
                .then(response => {
                    //trocar por alert
                    alert('Contato adicionado', response.data);
                    navigate('/ContatoCRUD');
                })
                .catch(error => {
                    console.log('Algo deu errado', error);
                });
        }
    }

    useEffect(() => {
        if (id) {
            contatoService.get(id)
                .then(contato => {
                    setNome(contato.data.nome);
                    setEmail(contato.data.email);
                    setTelefone(contato.data.telefone);
                    setMensagem(contato.data.mensagem);
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
                    <img src={ContatoForm} alt="Muro de tijolo com um porta cartas instalado." />
                </div>

                <div className="form">
                    <form>
                        <h1>Adicionar contato</h1>
                        <label>Nome:</label>
                        <input
                            type="text"
                            className="form-imput"
                            id="nome"
                            value={nome}
                            onChange={(c) => setNome(c.target.value)}
                            placeholder="Digite o nome do contato.."
                        />

                        <label>Email:</label>
                        <input
                            type="email"
                            className="form-imput"
                            id="email"
                            value={email}
                            onChange={(c) => setEmail(c.target.value)}
                            placeholder="Digite o email do contato.."
                        />

                        <label>Telefone:</label>
                        <input
                            type="phone"
                            className="form-imput"
                            id="telefone"
                            value={telefone}
                            onChange={(c) => setTelefone(c.target.value)}
                            placeholder="Digite o telefone do contato.."
                        />

                        <label>Mensagem:</label>
                        <textarea         
                            className="form-imput"
                            id="mensagem"
                            value={mensagem}
                            onChange={(c) => setMensagem(c.target.value)}
                            placeholder="Digite o telefone do contato.."
                        />
                        <div className="btn-form">
                            <button type="submit" className="btn-save" onClick={(c) => saveContato(c)}>Salvar</button>
                            <Link to='/ContatoCRUD' className="btn-back">Voltar</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default IndexContato;