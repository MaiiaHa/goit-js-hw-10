const BASE_URL = 'https://restcountries.com/v3.1/';
function fetchCountries(country) {
  return fetch(
    `${BASE_URL}name/${country}?fields=name,capital,population,flags,languages`
  ).then(responce => {
    // if (!response.ok) {
    //   throw new Error(response.status);
    // }
    return responce.json();
    // console.log(responce.json());
  });
  // .then(countries => {
  //   console.log(countries);
  // })
  // .catch(error => {
  //   console.log(error);
  // });
}

export default { fetchCountries };
