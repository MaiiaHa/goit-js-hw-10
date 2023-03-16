import './css/styles.css';

const DEBOUNCE_DELAY = 300;

//========

import debounce from 'lodash.debounce';
import API from './fetchCountries';

//========

const refs = {
  form: document.querySelector('s#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.form.addEventListener('input', debounce(onSubmitForm, DEBOUNCE_DELAY));

function onSubmitForm(e) {
  e.preventDefault();

  const countryName = e.target.value.trim();
  console.log(countryName);

  if (countryName !== '') {
    API.fetchCountries(countryName); // передаємо назву країни з інпут на бекенд
  }
}

//https://restcountries.com/v3.1/all?fields=name,capital,currencies

// const res = fetch(
//   `https://restcountries.com/v3.1/all?fields=name.official,capital,population,flags.svg,languages`
// )
//   .then(responce => {
//     return responce.json();
//     // console.log(responce.json());
//   })
//   .then(countries => {
//     console.log(countries);
//   })
//   .catch(error => {
//     console.log(error);
//   });

/*
name.official - повна назва країни
capital - столиця
population - населення
flags.svg - посилання на зображення прапора
languages - масив мов */
