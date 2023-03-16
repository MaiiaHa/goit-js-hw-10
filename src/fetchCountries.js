const BASE_URL = 'https://restcountries.com/v3.1/';

function fetchCountries(name) {}
return fetch(`${BASE_URL}${name}`)
  .then(responce => {
    return responce.json();
    console.log(responce.json());
  })
  .then(countries => {
    console.log(countries);
  })
  .catch(error => {
    console.log(error);
  });

export default { fetchCountries };
