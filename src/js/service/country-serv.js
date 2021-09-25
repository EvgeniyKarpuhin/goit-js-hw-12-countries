const base = 'https://restcountries.com/v3/name/';

export default {
    fetchArticles(query) {
        const param = query;
        return fetch(`${base}/${param}`).then(e => e.json())
        .then(e => e.json())
        .then(o => console.log(o))
    },
};