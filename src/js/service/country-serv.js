const base = 'https://restcountries.com/v2/name/';

export default {
    fetchArticles(query) {
        const param = query;
        return fetch(`${base}/${param}`)
        .then(e => e.json())
        .catch(error => console.error(error))
    },
};