fetch("json/provincias.json")
.then((response) =>response.json())
.then((provincias)=>{
    let provinciasHTML="";
    provincias.provincias.forEach(propiedades => {
        provinciasHTML+=`<option value="${propiedades.id}">${propiedades.nombre}</option>`
    });
    
    document.getElementById("provincia").innerHTML=provinciasHTML;
});


function  mostrarInfo() {
    document.getElementById("descripcion");
    let idProvincia = document.getElementById("provincia").value;

    fetch("json/provincias.json")
    .then((response)=>response.json())
    .then((provincias)=>{
        provincias.provincias.forEach(descripcion => {

            if(idProvincia == descripcion.id){
                document.getElementById("descripcion").innerHTML=`
                
                <p><b>Latitud: </b> ${descripcion.centroide.lat}</p>
                <p><b>Longitud: </b> ${descripcion.centroide.lon}</p>
                `
            }
        });
    });


    fetch("json/departamentos.json")
    .then((response)=>response.json())
    .then((departamentos)=>{
        let departamentosHTML="";
        
        departamentos.departamentos.forEach(propiedades =>{
            if(idProvincia==propiedades.provincia.id){
                departamentosHTML+=`<option value="${propiedades.id}">${propiedades.nombre}</option>`
            };
        });
        document.getElementById("departamento").innerHTML= departamentosHTML;
    });

};