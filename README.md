<!DOCTYPE html>
<html lang="lv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tūrisma aģentūra</title>
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
            color: #333;
        }
        header {
            background: #4a4a4a;
            color: #a8d5ba;
            padding: 20px;
            text-align: center;
            font-size: 24px;
        }
        nav {
            display: flex;
            justify-content: center;
            background: #6a6a6a;
            padding: 10px;
        }
        nav a {
            color: #a8d5ba;
            text-decoration: none;
            padding: 10px 20px;
            font-size: 18px;
        }
        nav a:hover {
            background: #7c9d8e;
            border-radius: 5px;
        }
        .container {
            max-width: 1200px;
            margin: 20px auto;
            padding: 20px;
            background: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
        }
        .services {
            display: flex;
            justify-content: space-around;
            text-align: center;
            margin-top: 20px;
        }
        .service {
            background: #e0e0e0;
            padding: 20px;
            border-radius: 10px;
            width: 30%;
        }
        .service i {
            font-size: 40px;
            color: #4a4a4a;
        }
        footer {
            text-align: center;
            padding: 20px;
            background: #4a4a4a;
            color: #a8d5ba;
            margin-top: 20px;
        }
    </style>
</head>
<body>

<header>
    <h1>Tūrisma aģentūra</h1>
</header>

<nav>
    <a href="#">Sākums</a>
    <a href="#">Ceļojumi</a>
    <a href="#">Par mums</a>
    <a href="#">Kontakti</a>
</nav>

<div class="container">
    <h2>Mūsu pakalpojumi</h2>
    <div class="services">
        <div class="service">
            <i class="fas fa-plane"></i>
            <h3>Aviobiļetes</h3>
            <p>Labākās cenas avioreisiem.</p>
        </div>
        <div class="service">
            <i class="fas fa-hotel"></i>
            <h3>Viesnīcas</h3>
            <p>Rezervējiet labākās viesnīcas.</p>
        </div>
        <div class="service">
            <i class="fas fa-map-marked-alt"></i>
            <h3>Ekskursijas</h3>
            <p>Aizraujoši maršruti visā pasaulē.</p>
        </div>
    </div>
</div>

<footer>
    <p>&copy; 2025 Tūrisma aģentūra. Visas tiesības aizsargātas.</p>
</footer>

</body>
</html>
