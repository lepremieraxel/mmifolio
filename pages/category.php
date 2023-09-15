<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/src/css/main.css">
    <link rel="stylesheet" href="/src/css/responsive.css">
    <title>mmifolio</title>
  </head>
  <body>
    <header>
      <script src="/src/js/header.js"></script>
    </header>
    <main>
      <div class="galery-container"></div>
    </main>
    <footer>
      <script src="/src/js/footer.js"></script>
    </footer>
    <script src="/src/js/mobileMenu.js"></script>
    <script src="/src/js/like.js"></script>
    <script src="/src/js/unlogBtn.js"></script>
    <script src="/src/js/displayGalery.js"></script>
    <script>window.onload = displayGalery(4, <?php echo '"'.$_GET['name'].'"'?>, 'all', 'simple')</script>
  </body>
</html>