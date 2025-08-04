<?php
if (
  isset($_POST['sexe'], $_POST['nom'], $_POST['prenom'], $_POST['email'],
        $_POST['emailC'], $_POST['tel'], $_POST['age'], $_POST['bureau'],
        $_POST['niveau'], $_POST['mode'], $_POST['auto'])
) {
  $sexe = $_POST['sexe'];
  $nom = $_POST['nom'];
  $prenom = $_POST['prenom'];
  $email = $_POST['email'];
  $emailC = $_POST['emailC'];
  $tel = $_POST['tel'];
  $age = $_POST['age'];
  $bureau = $_POST['bureau'];
  $niveau = $_POST['niveau'];
  $mode = $_POST['mode'];
  $autorisation = $_POST['auto'];

  $con = mysqli_connect('localhost', 'root', 'mohammed21.@', 'stage');
  if (!$con) {
    http_response_code(500);
    echo "Erreur de connexion";
    exit;
  }

  $sql = "INSERT INTO bureautique(sexe, nom, prenom, email, emailC, tel, age, bureau, niveau, mode, autorisation)
          VALUES ('$sexe', '$nom', '$prenom', '$email', '$emailC', $tel, $age,'$bureau','$niveau', '$mode', '$autorisation')";

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
