import axios from "axios";

export function getTopHeadlineStories(category, page) {
    let url = `http://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}`;
    return performRestCall(url);
}

export function getStoriesByInputSearch(searchInput, page) {
    let url = `http://newsapi.org/v2/everything?q=${searchInput}&page=${page}`;
    return performRestCall(url);
}

function performRestCall(url) {
    const headers = {
        'X-Api-Key': 'f7fdee5e51c8452dba29bd5305dd8b94'
    }

    return axios.get(url, {headers: headers})
        .then(res => {
            return res.data && res.data.articles;
        })
        .catch(err => {
            console.log(err);
            return [];
        });
}
