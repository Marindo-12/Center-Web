<?php
if (
  isset($_POST['sexe'], $_POST['nom'], $_POST['prenom'], $_POST['email'],
        $_POST['emailC'], $_POST['tel'], $_POST['fil'], $_POST['lyc'],
        $_POST['lyc-type'], $_POST['villeR'], $_POST['note-reg'], $_POST['note-nat'],
        $_POST['conco'], $_POST['mode'], $_POST['autorisation'])
) {
  $sexe = $_POST['sexe'];
  $nom = $_POST['nom'];
  $prenom = $_POST['prenom'];
  $email = $_POST['email'];
  $emailC = $_POST['emailC'];
  $tel = $_POST['tel'];
  $fil = $_POST['fil'];
  $lyc = $_POST['lyc'];
  $lycType = $_POST['lyc-type'];
  $villeR = $_POST['villeR'];
  $noteReg = $_POST['note-reg'];
  $noteNat = $_POST['note-nat'];
  $conco = $_POST['conco'];
  $mode = $_POST['mode'];
  $autorisation = $_POST['autorisation'];

  $con = mysqli_connect('localhost', 'root', 'mohammed21.@', 'stage');
  if (!$con) {
    http_response_code(500);
    echo "Erreur de connexion";
    exit;
  }

  $sql = "INSERT INTO concours(sexe, nom, prenom, email, emailC, tel, fil, lyc, lycType, noteReg, noteNat, choixC, modeF, villeR, autorisation)
          VALUES ('$sexe', '$nom', '$prenom', '$email', '$emailC', $tel, '$fil', '$lyc', '$lycType', $noteReg, $noteNat, '$conco', '$mode', '$villeR', '$autorisation')";

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
