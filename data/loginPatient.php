<?php

// header("Access-Control-Allow-Origin: *");

// Variables de connexion à la base de données
$DB_host = "mysql458.sql004";
$DB_user = "fabriquetssimplo";
$DB_name = "fabriquetssimplo";
$DB_pass = "qgtsNaJy4FHh";
// Entrées du formulaire
$code_patient = $_POST['codePatient'];
$mdp_patient = $_POST['mdpPatient'];

try
{
    // On se connecte et on selectionne la base
    $DB_con = new PDO("mysql:host={$DB_host};dbname={$DB_name}",$DB_user,$DB_pass);
    $DB_con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // On prépare et exécute la requête SQL
    $query = $DB_con->prepare("SELECT mdp_patient FROM login WHERE code_patient = :codePatient");
    $query->bindValue(':codePatient', $code_patient, PDO::PARAM_STR); 
    $query->execute();

    // On teste si le code patient est présent dans la table
    if($query->rowCount() == 1){
        // Si OUI on traite le resultat de la requête SQL sous forme de tableau associatif
        $resultat = $query->fetchAll(PDO::FETCH_ASSOC);
        // Puis on teste si le mot de passe est compatible avec le hash du mot de passe de la base de donnée
        if (password_verify($mdp_patient, $resultat[0]['mdp_patient'])) {
            echo 'Le mot de passe est valide !';
        } else {
            echo 'error';
        }
        // Si NON il y'a erreur de code patient
    }else{
        echo 'error';
    }
}
catch(PDOException $e)
{
    echo $e->getMessage();
}

?>


