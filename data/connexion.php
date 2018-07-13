<?php

header("Access-Control-Allow-Origin: *");

@ini_set('display_errors', 'on'); 

// VARIABLES DE CONNEXION
$DB_host = "mysql458.sql004";
$DB_user = "fabriquetssimplo";
$DB_name = "fabriquetssimplo";
$DB_pass = "qgtsNaJy4FHh";

$code_cabinet = $_POST['codeCabinet'];
//var_dump($_POST['codeCabinet']);

try
{
    // ON SE CONNECTE ET ON SELECTIONNE LA BASE
    $DB_con = new PDO("mysql:host={$DB_host};dbname={$DB_name}",$DB_user,$DB_pass);
    $DB_con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $query = $DB_con->prepare("SELECT code_cabinet FROM cabinet WHERE code_cabinet = :codeCabinet");
    $query->bindParam('codeCabinet', $code_cabinet);
        
    $query->execute();
    $result = $query->fetch();
    if($result[0] != FALSE){
        //Si oui nous accueillons l'utilisateur identifié
        echo "Success";  
    }else{
        //Sinon nous signalons une erreur d'identifiant ou de mot de passe
        echo "Error";
    }
}
catch(PDOException $e)
{
	echo $e->getMessage();
}

?>
