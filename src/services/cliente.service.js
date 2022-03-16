import httpClient from '../http-common';

const getAll = () => {
    return httpClient.get('/clientes');
}

const create = (data) =>
 {
    return httpClient.post("/clientes", data);
 }

 const get = (id) => {
     return httpClient.get(`/clientes/${id}`);
 }

const update = (data) => {
    return httpClient.put('/clientes', data);
}

const remove = id => {
    return httpClient.delete(`/clientes/${id}`);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getAll, create, get, update, remove};