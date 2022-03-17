import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import destinoService from '../../../../services/destino.service';


const DestinoRead = () => {

    const [destinos, setDestinos] = useState([]);

    useEffect(() => {
        destinoService.getAll()
            .then(response => {
                console.log('mostrando os destinos', response.data);
                setDestinos(response.data);
            })
            .catch(error => {
                console.log('erro', error);
            })
    }, [])

    const handleDelete = (id) => {
        console.log('impimindo id', id);
        destinoService.remove(id)
            .then(response => {
                alert('Destino deletado', response.data);
                window.location.reload();
            })
            .catch(error => {
                console.log('Algo deu errado', error);
            })
    }
    
    return (
        <div className="list-container">
            <h1 className="table-title">Lista de Destinos</h1>
            <div className="btn-container">
                <Link to="/addDestino" className="btn-crud">Adicionar Destino</Link>
            </div>
            <table class="table table-dark table-striped">
                <thead>
                    <tr className="thead">
                        <th scope="col">Local</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Apagar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        destinos.map(destino => (
                            <tr key={destino.id}>
                                <td data-label="Nome">{destino.local}</td>
                                <td data-label="Email">{`R$${destino.preco}`}</td>
                                <td className="row-edit">
                                    <Link className="edit-btn" to={`/destinos/edit/${destino.id}`}>Editar</Link>
                                </td>
                                <td>
                                    <button className="delete-btn" onClick={()=>{
                                    handleDelete(destino.id);
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
 
export default DestinoRead;