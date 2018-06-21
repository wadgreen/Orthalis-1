// AJAX
// Requête vers liens du JSON
var request = new XMLHttpRequest();
request.open('GET', 'data/cabinet.json');
// Identification du type de données
request.responseType = 'json';
request.send();

request.onload = function() {
    var reponse = request.response;
    remplirInfos(reponse);
    remplirSlider(reponse);
}

class NotreCabinet {
    constructor(imageH, description, cabinetAdresse, cabinetTel, cabinetMail, cabinetHoraires) {
        this.description = description;
        this.imageH = imageH;
        this.cabinetAdresse = cabinetAdresse;
        this.cabinetTel = cabinetTel;
        this.cabinetMail = cabinetMail;
        this.cabinetHoraires = cabinetHoraires;
        this.recupererInfosCabinet();
    }
    recupererInfosCabinet() {
        document.querySelector("#imageH").src = this.imageH;
        document.querySelector("#description").textContent = this.description;
        document.querySelector("#cabinetAdresse").textContent = this.cabinetAdresse;
        document.querySelector("#cabinetTel").textContent = this.cabinetTel;
        document.querySelector("#cabinetMail").textContent = this.cabinetMail;
        document.querySelector("#cabinetHoraires").innerHTML = this.cabinetHoraires;
    }

}

class SliderCabinet {
    constructor(praticienNom, praticienDesc, praticienPhoto) {
        this.praticienNom = praticienNom;
        this.praticienDesc = praticienDesc;
        this.praticienPhoto = praticienPhoto;
    }
    recupererInfosSlider() {
        document.querySelector(".carousel").innerHTML += 
        `<a class="carousel-item">
            <div class="card Formecard">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src=${this.praticienPhoto}>
                </div>
                <div class="card-content pad">
                    <span class="card-title activator grey-text text-darken-4 Taillepolice ">
                        <i class="material-icons right teal-text text-accent-4">add_circle_outline</i>${this.praticienNom}</span>
                    <!-- <p><a href="#">This is a link</a></p> -->
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">${this.praticienNom}
                        <i class="material-icons right">close</i>
                    </span>
                    <p>${this.praticienDesc}</p>
                </div>
            </div>
        </a>`;
        $('.carousel').carousel();
        console.log(document.querySelector(".carousel").clientWidth);
    }
}

function remplirInfos(jsonObj) {
    var infosCeCabinet = new NotreCabinet(jsonObj.imageH, jsonObj.description, jsonObj.adresse, jsonObj.tel, jsonObj.mail, jsonObj.horaires); 
}

function remplirSlider(jsonObj) {
    let listePraticiens = jsonObj['praticiens'];
    console.log(listePraticiens);
    for (let i = 0; i < listePraticiens.length; i++) {
        let sliderCeCabinet = new SliderCabinet(listePraticiens[i].praticienNom, listePraticiens[i].praticienDesc, listePraticiens[i].praticienPhoto);
        sliderCeCabinet.recupererInfosSlider();
    }
}
