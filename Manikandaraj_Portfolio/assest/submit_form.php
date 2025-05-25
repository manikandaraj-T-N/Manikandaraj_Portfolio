<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your message</title>
</head>
<body>


<?php
echo "hi mani"?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
echo $_POST["name"];
echo $_POST["email"];

}else {
    echo "No form data received.";
}
?>

</body>
</html>