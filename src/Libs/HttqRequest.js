const axios = require('axios');
const { base_api_url } = require('../config/config');

export default {
    films(url = 'films') {
        return {
            getOne: ({ id }) => axios.get(`${base_api_url+url}/${id}`),
            getAll: () => axios.get(base_api_url+url),
            update: (toUpdate) => axios.put(base_api_url+url, toUpdate),
            create: (toCreate) => axios.put(base_api_url+url, toCreate),
            delete: ({ id }) => axios.delete(`${base_api_url+url}/${id}`)
        }
    }
}