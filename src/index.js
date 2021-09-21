import './sass/main.scss';
import countrySearch from './js/service/country-serv';
import refs from './js/refs';
import oneCountry from './templ/oneCountry.hbs';
import countryList from './templ/manyCountry';

import '@pnotify/core/dist/BrightTheme.css';
const { error } = require('@pnotify/core');
let debounce = require('lodash.debounce');

refs.search.addEventListener('input', debounce(countryInput, 500));

function countryInput(e) {
    e.preventDefault();
    clearArticles();
    const searchQuery = e.target.value;

    countrySearch.fetchArticles(searchQuery).then(f => {
        if (f.length > 10) {
            error({ text: "Too many matches found. Please enter a more specific query!" });
        } else if (f.status === 404) {
            error({ text: "No country has been found. Please enter a more specific query!" });
        } else if (f.length === 1) {
            buildList(f, oneCountry);
        } else if (f.length <= 10) {
            buildList(f, countryList);
        }
    })

    .catch(Error => {
        Error({ text: "You must enter query parameters!" });
        console.log(Error);
    })
}

function buildList(count, template) {
    const mark = count.map(c => template(c)).join();
    refs.search.insertAdjacentHTML('afterbegin', mark)
}

function clearArticles() {
    refs.search.innerHTML = '';
}