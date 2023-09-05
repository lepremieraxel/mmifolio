<?php require_once('../src/config/config.php')?>
<!DOCTYPE html>
<html lang="fr">
  <head>
  <?php include($root."src/includes/head.html")?>
    <title>mmifolio</title>
  </head>
  <body>
    <header>
      <?php include($root."src/includes/header.html") ?>
    </header>
    <main>
      <div class="galery-container"></div>
    </main>
    <footer>
      <?php include($root."src/includes/footer.html") ?>
    </footer>
    <?php include($root."src/includes/scriptjs.html") ?>
    <script src="/src/js/displayGalery.js"></script>
    <script>window.onload = displayGalery(4, <?php $_GET['name']?>, 'all', 'simple')</script>
  </body>
</html>