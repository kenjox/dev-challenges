const REST_COUNTRIES_URL = 'https://restcountries.eu/rest/v2/all';

// Fetch countries from rest api
const getCountries = async () => {
  const resp = await fetch(REST_COUNTRIES_URL);
  const jsonResponse = await resp.json();
  const countriesArray = jsonResponse.map(({ name, capital, flag }) => {
    return {
      name,
      capital,
      flag,
    };
  });

  return countriesArray;
};

// Gets subset of 3 random countries from a collection: []
const getRandomCountries = (data) => {
  const results = [];
  for (let i = 0; i < 3; i++) {
    results.push(data[Math.floor(Math.random() * data.length)]);
  }
  return results;
};

// Format countries fetched into desired quiz api
const createQuestionsAPI = (data) => {
  // Types of questions e.g capital city or flag to identify the country
  const types = ['capital', 'flag'];

  const quiz = data.map((country) => {
    const options = getRandomCountries(data).map((c) => c.name);
    options.push(country.name);

    return {
      type: types[Math.floor(Math.random() * types.length)],
      capital: country.capital,
      flag: country.flag,
      answer: country.name,
      options, // TODO: fix shuffle of the choices
    };
  });

  return quiz;
};

// Saves the data to local storage
const saveQuestionsToLocalStore = async (data) => {
  window.localStorage.setItem('questions', JSON.stringify(data, null, 2));
};

// Fetch data from local storage
const getQuestionsFromLocalStore = () =>
  JSON.parse(window.localStorage.getItem('questions')) || [];

// Fetches the data if not available from local store otherwise uses the local store data
const init = async () => {
  let localStore = getQuestionsFromLocalStore();

  if (localStore.length < 1) {
    const responseData = await getCountries();
    const formattedData = createQuestionsAPI(responseData);
    saveQuestionsToLocalStore(formattedData);
    localStore = formattedData;
  }

  return localStore;
};

export { init };
