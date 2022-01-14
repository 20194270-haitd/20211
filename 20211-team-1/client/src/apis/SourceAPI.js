const axios = require('axios');

class SourceAPI {
    
    url = 'https://sever-news.herokuapp.com/api/v1/sources/';

    getSources = async () => {
        try {
            const res = await axios.get(this.url);
            return res.data;
        }
        catch (err) {
            console.error(err)
        }
    }

    getSource = async (sourceId) => {
        try {
            const res = await axios.get(this.url + sourceId);
            return res.data;
        }
        catch (err) {
            console.error(err)
        }
    }

    postSource = async (source) => {
        try {
            const res = await axios.post(this.url, source);
            return res.data;
        }
        catch (error) {
            console.error(error)
        }
    }

    putSource = async (sourceId, source) => {
        try {
            const res = await axios.put(this.url + sourceId, source);
            return res.data;
        }
        catch (error) {
            console.error(error)
        }
    }

    deleteSource = async (sourceId) => {
        try {
            const res = await axios.delete(this.url + sourceId);
            return res.data;
        }
        catch (error) {
            console.error(error)
        }
    }



}

export default new SourceAPI;
