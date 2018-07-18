// Test if an id_cabinet is present in the local storage
var jso = JSON.parse(localStorage.getItem('id_cabinet'));
if (jso) {
    window.location.href = "loginPatient.html";
}
else {}

// 'Se connecter' button submit function
$(document).ready(function () {
    $("#loginCabinet").submit(function (e) {
        e.preventDefault();
        $.post(
            'http://fabriquenumerique.fr/OrthalisDemo/loginCabinet.php',
            {
                codeCabinet: $("#codeCabinet").val() // Nous récupérons la valeur de notre input que l'on fait passer à connexion.php
            },
            function (data) {
                if (data !== 'Error') {
                    // Le membre est connecté. Ajoutons lui un message dans la page HTML.
                    $("#resultat").html("<p>Vous avez été connecté avec succès !</p>");
                    localStorage.setItem("id_cabinet", data);
                    window.location.href = "loginPatient.html";
                }
                else {
                    $("#resultat").html("<p>Erreur !</p>");
                }
            },
            'json'
        );
    });
});