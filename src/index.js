import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const refs = {
  form: document.querySelector('#search-box'),
};

refs.form.addEventListener('input', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  console.log(e.target.value);
}
