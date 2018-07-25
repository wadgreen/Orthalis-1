export class MajAccueil {

    constructor(logoCab, nomCab, imgHeader, imgProfil, imgDoc1, imgDoc2, notice) {
        this.logoCab = logoCab;
        this.nomCab = nomCab;
        this.imgHeader = imgHeader;
        this.imgProfil = imgProfil;
        this.imgDoc1 = imgDoc1;
        this.imgDoc2 = imgDoc2;
        this.notice = notice;
        this.ajout();
    }


    ajout() {
        document.getElementById('logo_d').setAttribute('src', this.logoCab);

        document.getElementById('nameCabinet').textContent = this.nomCab;

        document.getElementById('imagHeader').setAttribute('src', this.imgHeader);

        document.getElementById('imgUser').setAttribute('src', this.imgProfil);

        var cnotice = document.getElementsByClassName('Notif');
        var j;
        for (let j = 0; j < this.notice.length; j++) {
        var spanCreat = document.createElement('span');
        spanCreat.innerText = this.notice[j];
        spanCreat.style.color = "red";
        spanCreat.style.fontWeight = "bold";
        cnotice[j].appendChild(spanCreat);
        }
        
        document.getElementById('doc1').setAttribute('src', this.imgDoc1);
        document.getElementById('doc2').setAttribute('src', this.imgDoc2);
    }


}