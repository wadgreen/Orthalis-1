<?php

header("Access-Control-Allow-Origin: *");

// VARIABLES DE CONNEXION
$DB_host = "mysql458.sql004";
$DB_user = "fabriquetssimplo";
$DB_name = "fabriquetssimplo";
$DB_pass = "qgtsNaJy4FHh";

$code_cabinet = $_POST['codeCabinet'];

try
{
    // On se connecte et on selectionne la base
    $DB_con = new PDO("mysql:host={$DB_host};dbname={$DB_name}",$DB_user,$DB_pass);
    $DB_con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // On prépare la requête SQL
    $query = $DB_con->prepare("SELECT id_cabinet FROM login WHERE code_cabinet = :codeCabinet");
    $query->bindParam('codeCabinet', $code_cabinet);
    $query->execute();

    // On teste si le tableau associatif est vide
    if($query->rowCount() == 1){
        // On récupère le résultat de la requête sous forme de tableau associatif
        $result = $query->fetchAll();
        // Si non on retourne l'id du cabinet
        echo $result[0]['id_cabinet'];  
    }else{
        // Si oui il y'a erreur
        echo "Error";
    }
}
catch(PDOException $e)
{
	echo $e->getMessage();
}

?>
