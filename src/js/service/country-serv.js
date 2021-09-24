

export default {
    fetchArticles(query) {
        const base = 'https://restcountries.com/v3/name/';
        const param = query;
        return fetch(`${base}/${param}`).then(e => e.json());
    },
};