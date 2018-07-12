<?php

@ini_set('display_errors', 'on'); 

// VARIABLES DE CONNEXION
$DB_host = "mysql458.sql004";
$DB_user = "fabriquetssimplo";
$DB_pass = "qgtsNaJy4FHh";
$DB_name = "fabriquetssimplo";

$code_cabinet = $_POST['codeCabinet'];

try
{
    // ON SE CONNECTE ET ON SELECTIONNE LA BASE
    $conn = new PDO("mysql:host={$DB_host};dbname={$DB_name}",$DB_user,$DB_pass);

    //Nous vérifions que l'utilisateur a bien envoyé les informations demandées 
    if(isset($_POST["codeCabinet"])){
        //Nous allons demander le hash pour cet utilisateur à notre base de données :
        $query = $conn->prepare("SELECT code_cabinet FROM cabinet WHERE code_cabinet = :codeCabinet");
        $query->bindParam('codeCabinet', $code_cabinet);
        $query->execute();
        $result = $query->fetch();

        if($result[0] != FALSE){
            //Si oui nous accueillons l'utilisateur identifié
            echo "Bienvenue";
        }else{
            //Sinon nous signalons une erreur d'identifiant ou de mot de passe
            echo "login/password incorrect";
        }
    }

    /*

    // ON SE CONNECTE ET ON SELECTIONNE LA BASE
    $conn = new PDO("mysql:host={$DB_host};dbname={$DB_name}",$DB_user,$DB_pass);
    echo'connexion reussie!!';
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // On recupère le code cabinet de la base correspondant à celui entré par l'utilisateur dans le formulaire
    $pseudo_Exist = $conn->prepare("SELECT code_cabinet FROM cabinet WHERE code_cabinet = :code_cabinet");
    $pseudo_Exist->bindValue('code_cabinet', $_POST["codeCabinet"], PDO::PARAM_STR);
    $pseudo_Exist->execute();
    */

}
catch(PDOException $e)
{
	echo $e->getMessage();
}

?>
