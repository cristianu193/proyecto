//index.js
const UI = require ('./ui');
const github = require ('./github');
const  {client_id, client_secret} = require('./config.json');
const githubObj = new github(client_id, client_secret);
const formulario = document.getElementById('userForm'); 
const ui = new UI ();
formulario.addEventListener('submit', (e)=>{ 
    e.preventDefault(); 
    const busqueda=document.getElementById('textSearch').value; 
    if (busqueda !== '') {
        githubObj.buscarUsuario(busqueda).then(data => { 
            // Render Profile 
            ui.showProfile(data); 
            ui.showRepositories(data);
});
}
});