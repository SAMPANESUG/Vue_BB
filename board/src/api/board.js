import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

export default {
    getArticle: function(id) {
        return axios.get(BASE_URL + `posts/${id}`);
    },

    getArticles: function (page) {
        console.log(page);
        return axios.get(BASE_URL + "posts");
    },

    postArticle: function (userId, title, body) {
        return axios.post(
            BASE_URL + "posts",
            {
                userId: userId,
                title: title,
                body: body,
            }
        );
    }
}