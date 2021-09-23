const base = 'https://restcountries.com/v3/name/{name}';

export default {
    fetchArticles(query) {
        const param = query;
        return fetch(`${base + param}`).then(e => e.json());
    },
};