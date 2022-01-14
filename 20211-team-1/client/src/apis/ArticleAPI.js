const axios = require('axios');

class ArticleAPI {
    
    url = 'https://sever-news.herokuapp.com/api/v1/articles/';

    getArticles = async () => {
        try {
            const res = await axios.get(this.url);
            return res.data;
        }
        catch (err) {
            console.error(err);
        }
    }

    getArticle = async (articleId) => {
        try {
            const res = await axios.get(this.url + articleId);
            return res.data;
        }
        catch (err) {
            console.error(err);
        }
    }

    postArticle = async (article) => {
        try {
            const res = await axios.post(this.url, article);
            return res.data;
        }
        catch (error) {
            console.error(error);
        }
    }

    putArticle = async (articleId, article) => {
        try {
            const res = await axios.put(this.url + articleId, article);
            return res.data;
        }
        catch (error) {
            console.error(error);
        }
    }

    deleteArticle = async (articleId) => {
        try {
            const res = await axios.delete(this.url + articleId);
            return res.data;
        }
        catch (error) {
            console.error(error);
        }
    }



}

export default new ArticleAPI;
