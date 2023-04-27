<?php
include("conecta.php");
$email = $_POST["E-mail"];
$nome = $_POST["Nome"];
$senha = $_POST["Senha"];
$confirmação_da_senha = $_POST["Confirmação da senha"];
$sobrenome = $_POST["Sobrenome"];
$id_usuario = $_POST["Id_usuario"];
$celular = $_POST["Celular"];
$genero = $_POST["Genero"];
$comando= $pdo->prepare("INSERT INTO cadastro(E-mail,Nome,Senha,Confirmação da senha,Sobrenome,Id_usuario,Celular,Genero) VALUES($email,$nome,$senha,$confirmação_da_senha,$sobrenome,$id_usuario,$celular,$genero)");
$resultado = $comando->execute();

//Para voltar no formulário:
    header("location: cadastro.html");
?>