<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        
        
        $login = $_POST["login"];
        $name = $_POST["name"];
        $password = $_POST["password"];
        $lastname = $_POST["lastname"];
        
        echo("Email = " . $email);
        echo("Nome = " . $name);
        echo("Senha = " . $password);
        echo("Sobrenome = " . $lastname);
        
    ?>
</body>
</html>