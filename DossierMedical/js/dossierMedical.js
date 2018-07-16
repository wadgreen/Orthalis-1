/**
 *
 *
 * @export
 * @class DossierMedical
 */
export class DossierMedical {
    constructor(factures, histoRdv, solde) {
        this.factures = factures;
        this.histoRdv = histoRdv;
        this.solde = solde;
        this.recupererdossierMed();


    /**
     *
     *
     * @param {class} dossierMed - Classe instanciée 
     * @param {array} factures - Tableau de factures à écrire dans le HTML
     * @param {array} histoRdv - Tableau des rendez-vous 
     * @param {pay cash} solde - Ce qu'il reste à payer (string)
     * @memberof DossierMedical - Classe instanciée
    */}

    recupererdossierMed(factures,solde) {
        // document.querySelector("h5").textContent = this.dossierMed;
        document.querySelector("h6").textContent = this.download;
        // document.querySelector(".factures").textContent = this.factures;
        document.querySelector("h7").textContent = this.solde;


    }

    /**
     *
     *
     * @export
     * @class HistoRdv
    */
}
export class HistoRdv {
    constructor(histoRdv) {
        this.histoRdv
        this.recupererhistoRdv();
    /**
     *
     *
     * @memberof HistoRdv
    */}

    recupererhistoRdv() {
        document.querySelector('.rdv').textContent = this.histoRdv;
    }
}