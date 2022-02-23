const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

loadCountries();

const displayCountries = (Countries) => {
    // console.log(Countries);
    // for (const country of Countries) {
    //     console.log(country);
    // }
    const CountriesDiv = document.getElementById('countries');
    Countries.forEach(country => {
        // console.log(country.name);
        const div = document.createElement('div');
        div.classList.add('country');
        // const h3 = document.createElement('h3');
        // h3.innerText = country.name.common;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name.common}')">Details</button>
        `
        CountriesDiv.appendChild(div);


    })

}

const loadCountryByName = (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = (country) => {
    // console.log(data[0].name.common);
    console.log(country);
    const countryDiv = document.getElementById('countryDetails');
    countryDiv.innerHTML = `
    <h4>${country.name.common}</h4>
    <p>population: ${country.population}</p>
    <img width="200px" src="${country.flags.png}">
    `
}