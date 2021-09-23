const base = 'https://restcountries.com/v3/all/';

export default {
    fetchArticles(query) {
        const param = query;
        return fetch(`${base + param}`).then(e => e.json());
    },
};