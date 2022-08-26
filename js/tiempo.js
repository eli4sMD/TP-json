fetch("/json/provincias.json")
.then((response) =>response.json())
.then((provincias)=>{
    let provinciasHTML="";
    provincias.provincias.forEach(propiedades => {
        provinciasHTML+=`<option value="${propiedades.id}">${propiedades.nombre}</option>`
    });

    document.getElementById("provincia").innerHTML=provinciasHTML;
});


function  selectLocalidad() { 
    let idProvincia = document.getElementById("provincia").value;
    document.getElementById("información");
    document.getElementById("clima");

    fetch("/json/localidad.json")
    .then((response)=>response.json())
    .then((localidades)=>{
        let localidadesHTML="";
        localidades.localidades.forEach(información =>{
                if(idProvincia == información.provincia.id){
                    localidadesHTML+=`<option value="${información.id}">${información.nombre}</option>`
                };
            });
            document.getElementById("localidad").innerHTML= localidadesHTML;
        });
}


document.getElementById("localidad").addEventListener('change',(e)=>{
    document.getElementById("información");
    document.getElementById("clima");

    fetch("/json/localidad.json")
    .then((response)=>response.json())
    .then((localidades)=>{
        localidades.localidades.forEach(información =>{

            if(e.target.value == información.id){
                document.getElementById("información").innerHTML=`
                <p><b>Nombre: </b>${información.nombre}</p>
                <p><b>Departamento: </b>${información.departamento.nombre}</p>`;

                 fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${información.centroide.lat}&lon=${información.centroide.lon}&appid=734bb07a09bedbf173dc322e447cf158`)
                 .then((response)=>response.json())
                 .then((clima)=>{
                     document.getElementById("clima").innerHTML=`
                     <p><b>Temperatura: </b>${(Math.round((clima.main.temp)-273.15))}ºC</p>`
                })
            }
        });
    })
});