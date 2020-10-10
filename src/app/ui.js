/*ui.js*/
class UI {
    constructor() {
    this.profile = document.getElementById('profile');
    }
    showProfile(user) {
    this.profile.innerHTML = `
    <div class="card mt-2 animated bounceInLeft">
    <img src="${user.avatar_url}" class="card-img-top"/>
    <div class="card-body">
    <h3 class="card-title">${user.name} / ${user.login}</h3>
    <a href="${user.html_url}" class="btn btn-primary btn-block">
    View Profile
    </a>
    <span class="badge badge-success">
    followers: ${user.followers}
    </span>
    <span class="badge badge-primary">
    following: ${user.following}
    </span>
    <span class="badge badge-warning">
    company: ${user.company}
    </span>
    <span class="badge badge-info d-block">
    blog: ${user.blog}
    </span>
    </div>
    </div>
    `;
    //this.clearMessage();
    }
    }
    module.exports = UI;