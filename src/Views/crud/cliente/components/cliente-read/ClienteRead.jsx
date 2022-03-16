import React from 'react';
import { useEffect, useState } from 'react';//possivel erro deixar só react
import { Link } from 'react-router-dom';
import clienteService from '../../../../../services/cliente.service';

import './assets/styles.css'

const ClientRead = () => {

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        clienteService.getAll()
            .then(response => {
                console.log('mostrando os clientes', response.data);
                setClientes(response.data);
            })
            .catch(error => {
                console.log('erro', error);
            })
    }, [])

    const handleDelete = (id) => {
        console.log('impimindo id', id);
        clienteService.remove(id)
            .then(response => {
                alert('Cliente deletado', response.data);
                window.location.reload();
            })
            .catch(error => {
                console.log('Algo deu errado', error);
            })
    }

    return (
        <div className="list-container">
            <h1 className='h'>Lista de Clientes</h1>
            <div className="btn-container">
                <Link to="/add" className="btn-crud">Adicionar Cliente</Link>
            </div>
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Apagar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clientes.map(cliente => (
                            <tr key={cliente.id}>
                                <td data-label="Nome">{cliente.nome}</td>
                                <td data-label="Email">{cliente.email}</td>
                                <td data-label="Telefone">{cliente.telefone}</td>
                                <td className="row-edit">
                                    <Link className="edit-btn" to={`/clientes/edit/${cliente.id}`}>Editar</Link>
                                </td>
                                <td>
                                    <button className="delete-btn" onClick={()=>{
                                    handleDelete(cliente.id);
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
export default ClientRead;