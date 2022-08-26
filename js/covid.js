fetch("https://disease.sh/v3/covid-19/countries/")
.then((response)=>response.json())
.then((paises) =>{

	let paisesHTML="";
	paises.forEach(pais => {
		paisesHTML+=`<option value="${pais.countryInfo._id}"> ${pais.country}</option>`
	});

document.getElementById("paises").innerHTML= paisesHTML;

})


function mostrarInfo() {
	let idPaises = document.getElementById("paises").value;
	fetch("https://disease.sh/v3/covid-19/countries/" + idPaises)
	.then((response) => response.json())
	.then((casos)=> {

		let infoHTML = "";

		infoHTML+=`
		<h2>Pais: ${casos.country}</h2>
		<h2>Test Realizados: ${casos.tests}</h2>
		<h2>Total de casos: ${casos.cases}</h2>
		<h2 style="color: green;">Recuperados: ${casos.recovered}</h2>
		<h2>Casos Activos:${casos.active}</h2>
		<h2>Estado Critico: ${casos.critical}</h2>
		<h2 style="color: red;">Muertes: ${casos.deaths}</h2>
		`
		document.getElementById("información").innerHTML = infoHTML;
	})
}