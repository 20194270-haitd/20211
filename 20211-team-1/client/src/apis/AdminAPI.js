const axios = require('axios');

class AdminAPI {
    
    url = 'https://sever-news.herokuapp.com/api/v1/admins/';

    getadmins = async () => {
        try {
            const res = await axios.get(this.url);
            return res.data;
        }
        catch (err) {
            console.error(err)
        }
    }

    getadmin = async (adminId) => {
        try {
            const res = await axios.get(this.url + adminId);
            return res.data;
        }
        catch (err) {
            console.error(err)
        }
    }

    postadmin = async (admin) => {
        try {
            const res = await axios.post(this.url, admin);
            return res.data;
        }
        catch (error) {
            console.error(error)
        }
    }

    putadmin = async (adminId, admin) => {
        try {
            const res = await axios.put(this.url + adminId, admin);
            return res.data;
        }
        catch (error) {
            console.error(error)
        }
    }

    deleteStudent = async (adminId) => {
        try {
            const res = await axios.delete(this.url + adminId);
            return res.data;
        }
        catch (error) {
            console.error(error)
        }
    }



}

export default new AdminAPI;
