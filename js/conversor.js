const endpoint = 'http://data.fixer.io/api/latest?access_key=8a68958b25126e21306507320e9bd239'

const euroField = document.querySelector(".euro");
const pesoField = document.querySelector(".peso");

function conversor() {
    fetch(endpoint)
    .then(response => response.json())
    .then(date => {
        const euroAmount = date.rates.ARS;
        const euro = euroField.value;
        const peso = (euro * euroAmount).toFixed(2);
        pesoField.value = peso;
    })
}

document.querySelector(".convertButton").addEventListener("click", conversor);
dolarfield.addEventListener("input", conversor);