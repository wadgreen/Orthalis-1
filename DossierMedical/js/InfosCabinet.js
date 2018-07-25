// Classe InfosCabinet, se sert de la partie cabinet de la bdd pour remplir son contenu
// Export rend cette classe publique, elle peut être importée
export class InfosCabinet{
    constructor(cabinetImageH, cabinetDescription, cabinetAdresse, cabinetTel, cabinetMail, cabinetHoraires) {
        this.cabinetDescription = cabinetDescription;
        this.cabinetImage = cabinetImageH;
        this.cabinetAdresse = cabinetAdresse;
        this.cabinetTel = cabinetTel;
        this.cabinetMail = cabinetMail;
        this.cabinetHoraires = cabinetHoraires;
        this.recupererInfosCabinet();
    }
    recupererInfosCabinet() {
        document.querySelector("#cabinetImage").src = this.cabinetImage;
        document.querySelector("#cabinetDescription").textContent = this.cabinetDescription;
        document.querySelector("#cabinetAdresse").textContent = this.cabinetAdresse;
        document.querySelector("#cabinetTel").textContent = this.cabinetTel;
        document.querySelector("#cabinetMail").textContent = this.cabinetMail;
        document.querySelector("#cabinetHoraires").innerHTML = this.cabinetHoraires;
    }
}
// Classe SliderCabinet, se sert de la partie praticiens de la bdd pour remplir son contenu
// Export rend cette classe publique, elle peut être importée
export class SliderCabinet {
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
    }
}