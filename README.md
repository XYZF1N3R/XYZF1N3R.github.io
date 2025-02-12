<html lang="lv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tūrisma aģentūra - JS ROUTE</title>
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
        .search-bar {
            text-align: center;
            margin-bottom: 20px;
        }
        .search-bar input {
            padding: 10px;
            width: 60%;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .tours {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            text-align: center;
        }
        .tour {
            background: #e0e0e0;
            padding: 20px;
            border-radius: 10px;
        }
        .tour i {
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
    <h1>Tūrisma aģentūra - JS ROUTE</h1>
</header>
<nav>
    <a href="#">Sākums</a>
    <a href="#">Ceļojumi</a>
    <a href="#">Par mums</a>
    <a href="#">Kontakti</a>
</nav>
<div class="container">
    <div class="search-bar">
        <input type="text" placeholder="Meklēt ceļojumu...">
    </div>
    <h2>Izvēlies labāko ceļojumu</h2>
    <div class="tours">
        <div class="tour">
            <i class="fas fa-plane"></i>
            <h3>AAE 2025</h3>
            <p>Arābu Emirāti - 14.02.2025 līdz 18.02.2025</p>
            <p><strong>no 553.00€</strong></p>
        </div>
        <div class="tour">
            <i class="fas fa-umbrella-beach"></i>
            <h3>Atpūta Majorkā</h3>
            <p>Maljorka - 27.04.2025 līdz 04.05.2025</p>
            <p><strong>no 537.00€</strong></p>
        </div>
        <div class="tour">
            <i class="fas fa-hotel"></i>
            <h3>Turcija 2025</h3>
            <p>Turcija - 02.05.2025 līdz 03.05.2025</p>
            <p><strong>no 415.00€</strong></p>
        </div>
    </div>
</div>
<footer>
    <p>&copy; 2025 Tūrisma aģentūra - JS ROUTE. Visas tiesības aizsargātas.</p>
</footer>
</body>
</html>

</body>
</html>
