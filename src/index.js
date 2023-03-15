import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const refs = {
  form: document.querySelector('#search-box'),
};

refs.form.addEventListener('input', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  // console.log(e.target.value);
}

fetch(`https://restcountries.com/v3.1/name/Ukraine`)
  .then(responce => {
    responce.json;
  })
  .then(data => console.log(data));
console.log(responce.json);

//===============
// fetchCountries(Ukraine);

// function fetchCountries(name) {
//   return fetch(`https://restcountries.com/v3.1/name/${name}`).then(responce => {
//     return responce.json;
//     console.log(responce.json);
//   });
// }
