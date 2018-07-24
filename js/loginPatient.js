// // Test if an id_cabinet is present in the local storage
// var jso = JSON.parse(localStorage.getItem('id_cabinet'));
// if (jso) {
//     window.location.href = "loginPatient.html";
// }
// else {}

function login() {
    // form input data
    inputCodePatient = document.querySelector("#codePatient").value;
    inputMdpPatient = document.querySelector("#mdpPatient").value;
    
    // Ajax
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://fabriquenumerique.fr/OrthalisDemo/loginPatient.php", true);
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    // xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send("codePatient=" + encodeURI(inputCodePatient) + "&mdpPatient=" + encodeURI(inputMdpPatient));
    
    xhr.addEventListener('readystatechange', (e) => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var resultat = xhr.response.trim();
            
            if (resultat != "error") {
                document.querySelector("#resultat").innerHTML = "<p>Vous avez été connecté avec succès !</p>";
                //localStorage.setItem("id_patient", resultat);
                //window.location.href = "accueil.html";
            }
            else {
                document.querySelector("#resultat").innerHTML = "<p>Mauvais code patient</p>";
            }
        }
    });
}