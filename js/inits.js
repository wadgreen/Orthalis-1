// import 2 js :
import { RequeteAjax } from "./req_ajax.js";
import { MajAccueil } from "./maj_accueil.js";

class Init {

    constructor() {
        this.xhr = new RequeteAjax('./json/accueil.json', 'json');
        console.log(this.xhr);
        this.xhr.xmlhttp.onload = () => {
            this.myObj = this.xhr.xmlhttp.response;
            this.page = new MajAccueil(this.myObj.logoCab, this.myObj.nomCab, this.myObj.imgHeader, this.myObj.imgProfil, this.myObj.imgDoc1, this.myObj.imgDoc2, this.myObj.notice);
        }
    }
}
var init = new Init();

localStorage.setItem('monJson', JSON.stringify(myObj));