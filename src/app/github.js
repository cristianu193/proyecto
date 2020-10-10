/*github.js*/
class Github{
    constructor(clientId, clientSecret){
    this.client_id=clientId;
    this.client_secret=clientSecret;
    }
    async buscarUsuario(user){
        const datosUsuario = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        //const datosrep = await fetch(`http://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const datosUsrJson = await datosUsuario.json();
        //const datosrepos = await datosrep.json();
        console.log(datosUsrJson);
        //console.log(datosrepos);
        return datosUsrJson;
        }
    }
    module.exports = Github;