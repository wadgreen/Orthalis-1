import { InfosCabinet, SliderCabinet } from './InfosCabinet.js';

class InitCabinet {
    constructor(){
        // Requête vers liens du JSON
        this.request = new XMLHttpRequest();
        this.request.open('GET', 'data/cabinet.json');
        // Identification du type de données
        this.request.responseType = 'json';
        this.request.send();
        // On utilise une méthode en flat arrow éviter que le onload (asynchrone) n'ait de contexte
        this.request.onload = () => {
            this.jsonObj = this.request.response;
            this.cabinet = new InfosCabinet(this.jsonObj.image, this.jsonObj.description, this.jsonObj.adresse, this.jsonObj.tel, this.jsonObj.mail, this.jsonObj.horaires);
            for (let i = 0; i < this.jsonObj['praticiens'].length; i++) {
                let slider = new SliderCabinet(this.jsonObj['praticiens'][i].praticienNom, this.jsonObj['praticiens'][i].praticienDesc, this.jsonObj['praticiens'][i].praticienPhoto);
                slider.recupererInfosSlider();
            }
        }
    }
}

var init = new InitCabinet();

// améliorer pour lundi : local storage & session storage