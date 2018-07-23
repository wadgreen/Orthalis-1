<?php

// header("Access-Control-Allow-Origin: *");

// VARIABLES DE CONNEXION
$DB_host = "mysql458.sql004";
$DB_user = "fabriquetssimplo";
$DB_name = "fabriquetssimplo";
$DB_pass = "qgtsNaJy4FHh";

$code_patient = $_POST['codePatient'];
$mdp_patient = $_POST['mdpPatient'];

try
{
    // On se connecte et on selectionne la base
    $DB_con = new PDO("mysql:host={$DB_host};dbname={$DB_name}",$DB_user,$DB_pass);
    $DB_con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // On prépare la requête SQL
    $query = $DB_con->prepare("SELECT id_patient FROM login WHERE code_patient = :codePatient AND mdp_patient = :mdpPatient");
    $query->bindValue(':codePatient', $code_patient, PDO::PARAM_STR);
    $query->bindValue(':mdpPatient', $mdp_patient, PDO::PARAM_STR);
    $query->execute();
    
    // On teste si le tableau associatif est vide
    if($query->rowCount() == 1){
        // On récupère le résultat de la requête sous forme de tableau associatif
        $result = $query->fetchAll();
        // Si non on retourne l'id du cabinet
        echo $result[0]['id_patient'];
    }else{
        // Si oui il y'a erreur
        echo 'error';
    }
}
catch(PDOException $e)
{
    echo $e->getMessage();
}

?>


