let personas = [];
function addPersonas() {
  let nombre = document.getElementById("nombre");
  let email = document.getElementById("email");
  let destino = document.getElementById("destino");

  let persona = {
    nombre_persona: nombre.value,
    email_persona: email.value,
    destino_persona: destino.value,
  };

  personas.push(persona);
  console.log(persona);
}


let array = [];


personas.forEach(function(item){

if(array.indexOf(item.destino) === -1)
    {

        array.push(item.nombre + " " + item.email + " " + item.destino);
    }
});

console.log(array);

function mostrarPersonas() {
  let lista = document.getElementById("personas");
  let aside = document.querySelector(".aside2");

  if (aside.classList.contains("aside")) {
    aside.classList.remove("aside");
  }

  lista.innerHTML = `<tr class="head">
    <th>Nombre</th>
    <th>Email</th>
    <th>Destino</th>
    </tr>`;

  for (let i = 0; i < personas.length; i++) {
    lista.innerHTML += `<tr>
        <th class= "table">
        ${personas[i].nombre_persona}
        </th>
        <th class ="table">
        ${personas[i].email_persona}
        </th>
        <th class ="table">
        ${personas[i].destino_persona}
        </th>`;
  }
}

function filtrarDestinos () {

  for(let i = 0; i < personas.length; i++) {

    let vacaciones = personas[i].destino_persona;
    let destinoLowercase = vacaciones.toLowerCase();

    if (destinoLowercase == "canarias" || destinoLowercase == "mallorca" || destinoLowercase == "galicia") {

      console.log(personas[i]);

    let promociones = document.getElementById("personas");
    let filtered = document.querySelector(".aside3");
  
    if (filtered.classList.contains("filtered")) {
      filtered.classList.remove("filtered");
    }
  
    promociones.innerHTML = `<tr class="head">
      <th>Nombre</th>
      <th>Email</th>
      <th>Destino</th>
      </tr>`;
  
    for (let i = 0; i < personas.length; i++) {
      promociones.innerHTML += `<tr>
          <th class= "table">
          ${personas[i].nombre_persona}
          </th>
          <th class ="table">
          ${personas[i].email_persona}
          </th>
          <th class ="table">
          ${personas[i].destino_persona}
          </th>`;
    }
}
}
}