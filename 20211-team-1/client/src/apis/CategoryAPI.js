const axios = require('axios');

class CategoryAPI {
    
    url = 'https://sever-news.herokuapp.com/api/v1/categories/';

    getCategories = async () => {
        try {
            const res = await axios.get(this.url);
            return res.data;
        }
        catch (err) {
            console.error(err)
        }
    }

    getCategory = async (categoryId) => {
        try {
            const res = await axios.get(this.url + categoryId);
            return res.data;
        }
        catch (err) {
            console.error(err)
        }
    }

    postCategory = async (category) => {
        try {
            const res = await axios.post(this.url, category);
            return res.data;
        }
        catch (error) {
            console.error(error)
        }
    }

    putCategory = async (categoryId, category) => {
        try {
            const res = await axios.put(this.url + categoryId, category);
            return res.data;
        }
        catch (error) {
            console.error(error)
        }
    }

    deleteCategory = async (categoryId) => {
        try {
            const res = await axios.delete(this.url + categoryId);
            return res.data;
        }
        catch (error) {
            console.error(error)
        }
    }



}

export default new CategoryAPI;
