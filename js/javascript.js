
fetch('https://randomuser.me/api/?gender=male&nat=ES,BR,US')
      .then(Response => Response.json())
      .then(json => mostrar(json));

const mostrar = (json) => {
  //console.log('probando');
  //console.log(json.results[0].name);
  let nombre=  json.results[0].name.first + ' ' + json.results[0].name.last;
  let dir = '<i class="fa-solid fa-house"></i> ' + json.results[0].location.street.name + ' ' + json.results[0].location.street.number +
   ', ' + json.results[0].location.city + ', ' + json.results[0].location.country;
  let celu = '<i class="fa-solid fa-mobile-screen"></i> ' + json.results[0].cell;
  let mail = '<i class="fa-regular fa-envelope"></i> ' + json.results[0].email;
  let foto =  json.results[0].picture.large;
  let foto2 =  json.results[0].picture.medium;
  let fotoPerfil = '<img id="foto" srcset="' + foto + ' 576w, ' + foto2 + ' 768w,' + foto + 
  ' 900w" ' + 
  ' src="' + foto + '" alt="Foto Perfil" ' + 
  ' class=" rounded-circle"></img>';

  document.getElementById('nombre').innerText = nombre ;
  document.getElementById('domicilio').innerHTML = dir ;
  document.getElementById('celular').innerHTML = celu ;
  document.getElementById('mail').innerHTML = mail ;
  document.getElementById('foto2').innerHTML = fotoPerfil;
  document.title = nombre;

};