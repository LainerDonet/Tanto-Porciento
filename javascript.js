const fetch = require("node-fetch");
const url = "https://restcountries.com/v3.1/all";

async function fecthData() {
  const res = await fetch(url);
  const countries = await res.json();
  const nameBuscado = "Somalia"; // ID del usuario que quieres buscar
  const countryName = countries.name.common.find((name) => name === nameBuscado);
  if (countryName) {
    console.log("Usuario encontrado:", countryName);
  } else {
    console.log("Usuario no encontrado");
  }
  //console.log(countries[6].name.common);
}
fecthData();

// fetch('ruta/al/archivo.json')
//  .then(response => response.json())
//  .then(data => {
//     const idBuscado = 2; // ID del usuario que quieres buscar
//     const usuario = data.usuarios.find(usuario => usuario.id === idBuscado);
//     if (usuario) {
//       console.log('Usuario encontrado:', usuario);
//     } else {
//       console.log('Usuario no encontrado');
//     }
//  })
//  .catch(error => console.error('Error al leer el archivo JSON:', error));
