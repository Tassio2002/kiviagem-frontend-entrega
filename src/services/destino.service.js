import httpClient from '../http-common';

const getAll = () => {
    return httpClient.get('/destinos');
}

const create = (data) =>
 {
    return httpClient.post("/destinos", data);
 }

 const get = (id) => {
     return httpClient.get(`/destinos/${id}`);
 }

const update = (data) => {
    return httpClient.put('/destinos', data);
}

const remove = id => {
    return httpClient.delete(`/destinos/${id}`);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getAll, create, get, update, remove};