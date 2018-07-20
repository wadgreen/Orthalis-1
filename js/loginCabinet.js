// Test if an id_cabinet is present in the local storage
var jso = JSON.parse(localStorage.getItem('id_cabinet'));
if (jso) {
    window.location.href = "loginPatient.html";
}
else {}

function login() {
    data = document.querySelector("#codeCabinet").value;
    alert(data);
    var xhr = new XMLHttpRequest();
    
    xhr.open("POST", "http://fabriquenumerique.fr/OrthalisDemo/loginCabinet.php", true);
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    // xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send("codeCabinet=" + escape(data));

    xhr.addEventListener('readystatechange', (e) => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

            // alert(e.currentTarget.response);
            // var resultat = e.currentTarget.response;
            var resultat = xhr.response.trim();
            console.dir(resultat);
            
            if (resultat != "error") {
                document.querySelector("#resultat").innerHTML = "<p>Vous avez été connecté avec succès !</p>";
                localStorage.setItem("id_cabinet", e.currentTarget.response);
                window.location.href = "loginPatient.html";
            }
            else {
                document.querySelector("#resultat").innerHTML = "<p>Mauvais code cabinet</p>";
            }
        }
    });
}