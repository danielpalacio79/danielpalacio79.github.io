
  fetch('https://randomuser.me/api/').then(Response => Response.json()).then(json => console.log(json));