<?php require_once('./src/config/config.php')?>
<!DOCTYPE html>
<html lang="fr">
  <head>
    <?php include($root."src/includes/head.html")?>
    <title>accueil • mmifolio</title>
  </head>
  <body>
    <header>
      <?php include($root."src/includes/header.html") ?>
      <section class="hero">
        <h2>Explore les créations</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis placeat tempore laudantium deleniti consequatur libero repellendus tempora illum exercitationem nemo minima magnam, at eaque repellat dolores. Eos, est similique.</p>
        <a href="" class="cta">Ajoute-tes&nbsp;créations&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11 11V7H13V11H17V13H13V17H11V13H7V11H11Z"></path></svg></a>
      </section>
    </header>
    <main>
      <h2>Récemments ajoutés</h2>
      <div class="galery-container"></div>
      <a href="/discover/" class="cta cta-center">En&nbsp;découvrir&nbsp;plus<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg></a>
    </main>
    <footer>
      <?php include($root."src/includes/footer.html") ?>
    </footer>
    <?php include($root."src/includes/scriptjs.html") ?>
    <script src="/src/js/displayGalery.js"></script>
    <script>
      window.onload = displayGalery(8, 'all', 'all', false)
    </script>
  </body>
</html>