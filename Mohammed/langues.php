<?php
if (
  isset($_POST['sexe'], $_POST['nom'], $_POST['prenom'], $_POST['email'],
        $_POST['tel'], $_POST['ecole'], $_POST['ann-et'],
        $_POST['villeR'], $_POST['langueC'], $_POST['autorise'],
        $_POST['mode'])
) {
  $sexe = $_POST['sexe'];
  $nom = $_POST['nom'];
  $prenom = $_POST['prenom'];
  $email = $_POST['email'];
  $tel = $_POST['tel'];
  $ecole = $_POST['ecole'];
  $anneeE = $_POST['ann-et'];
  $villeR = $_POST['villeR'];
  $langueC = $_POST['langueC'];
  $mode = $_POST['mode'];
  $autorisation = $_POST['autorise'];

  $con = mysqli_connect('localhost', 'root', 'mohammed21.@', 'stage');
  if (!$con) {
    http_response_code(500);
    echo "Erreur de connexion";
    exit;
  }

  $sql = "INSERT INTO langues(sexe, nom, prenom, email, tel, ecole, anneeE, langueC, mode, villeR, autorisation)
          VALUES ('$sexe', '$nom', '$prenom', '$email', $tel, '$ecole', '$anneeE', '$langueC', '$mode', '$villeR', '$autorisation')";

  if (mysqli_query($con, $sql)) {
    echo "success";
  } else {
    http_response_code(500);
    echo "Erreur lors de l'enregistrement.";
  }

} else {
  http_response_code(400);
  echo "Données incomplètes.";
}
?>
