import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import contatoService from '../../../../services/contato.service';

import './assets/styles.css'

const ContatoRead = () => {

    const [contatos, setContatos] = useState([]);

    useEffect(() => {
        contatoService.getAll()
            .then(response => {
                console.log('mostrando os contatos', response.data);
                setContatos(response.data);
            })
            .catch(error => {
                console.log('erro', error);
            })
    }, [])

    const handleDelete = (id) => {
        console.log('impimindo id', id);
        contatoService.remove(id)
            .then(response => {
                alert('Contato deletado', response.data);
                window.location.reload();
            })
            .catch(error => {
                console.log('Algo deu errado', error);
            })
    }

    return (
        <div className="list-container">
            <h1 className="table-title">Lista de Contatos</h1>
            <div className="btn-container">
                <Link to="/addContato" className="btn-crud">Adicionar Contato</Link>
            </div>
            <table class="table table-dark table-striped">
                <thead>
                    <tr className="thead">
                        <th scope="col">Nome</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Mensagem</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Apagar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contatos.map(contato => (
                            <tr key={contato.id}>
                                <td data-label="Nome">{contato.nome}</td>
                                <td data-label="Email">{contato.email}</td>
                                <td data-label="Telefone">{contato.telefone}</td>
                                <td data-label="Mensagem">{contato.mensagem}</td>
                                <td className="row-edit">
                                    <Link className="edit-btn" to={`/contatos/edit/${contato.id}`}>Editar</Link>
                                </td>
                                <td>
                                    <button className="delete-btn" onClick={()=>{
                                    handleDelete(contato.id);
                                    }}>Apagar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
export default ContatoRead;