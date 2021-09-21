const base = 'https://restcountries.eu/rest/v2/name/';

export default {
    fetchArticles(query) {
        const param = `${query}`;
        return Object.fetchArticles(base + param).then(e => e.json());
    },
};