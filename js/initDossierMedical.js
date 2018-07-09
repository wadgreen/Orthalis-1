
import { DossierMedical, HistoRdv } from './dossierMedical.js';
/**
 *
 *
 * @class InitDossiermedical
 */

class InitDossiermedical {
    constructor() {
        // Requête vers liens du JSON
        this.request = new XMLHttpRequest();
        this.request.open('GET', 'modele/dossierMedical.json');

        // Identification du type de données
        this.request.responseType = 'json';
        this.request.send();
        // On utilise une méthode en flat arrow éviter que le onload (asynchrone) n'ait de contexte
        this.request.onload = () => {

            this.myJson = this.request.response;
            this.DossierMedical = new DossierMedical(this.myJson.dossierMed, this.myJson.download, this.myJson.factures, this.myJson.histoRdv, this.myJson.solde);
            ;
            console.log(this.myJson.factures);

            var fa = this.myJson.factures;

            for (let facture of fa) {

                let divFact = document.createElement("div");
                divFact.classList.add("collapsible-header");
                // console.log(divFact);

                let iFact = document.createElement("i");
                iFact.classList.add("material-icons");
                iFact.innerHTML = "file_download";
                divFact.appendChild(iFact);

                document.querySelector("#fact").appendChild(divFact);
                let spanFact = document.createElement("span");
                spanFact.innerHTML = facture;
                divFact.appendChild(spanFact);
                document.querySelector("#fact").appendChild(divFact);
                // console.log(iFact);
                // console.log(divFact); 
            }



                var fl = this.myJson.histoRdv;

                for (let rdv of fl) {

                    let divRdv = document.createElement("div");
                    divRdv.classList.add("collapsible-header");
                    console.log(divRdv);

                    let histoRdvv = document.createElement("i");
                    histoRdvv.classList.add("material-icons");
                    histoRdvv.innerHTML = "file_download";
                    divRdv.appendChild(histoRdvv);
                    // console.log(divRdv);
                    document.querySelector("#historendv").appendChild(divRdv);
                    let spanRdv = document.createElement("span");
                    spanRdv.innerHTML = rdv;
                    divRdv.appendChild(spanRdv);
                    document.querySelector("#historendv").appendChild(divRdv);




                }
        }
    }
}
var init = new InitDossiermedical;