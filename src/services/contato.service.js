import httpClient from '../http-common';

const getAll = () => {
    return httpClient.get('/contatos');
}

const create = (data) =>
 {
    return httpClient.post("/contatos", data);
 }

 const get = (id) => {
     return httpClient.get(`/contatos/${id}`);
 }

const update = (data) => {
    return httpClient.put('/contatos', data);
}

const remove = id => {
    return httpClient.delete(`/contatos/${id}`);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getAll, create, get, update, remove};