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
      <div class="galery-title">
        <h2>Découvrir</h2>
        <!-- <div class="filter-container cta cta-small">
          <label for="discover-filter">Trier par :</label>
          <select name="discover-filter" id="discover-filter">
            <option value="default">Date d'ajout</option>
          </select>
        </div> -->
      </div>
      <div class="galery-container"></div>
      <div class="cta cta-center">Charger plus&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg></div>
      </main>
    <footer>
      <?php include($root."src/includes/footer.html") ?>
    </footer>
    <?php include($root."src/includes/scriptjs.html") ?>
    <script src="/src/js/displayGalery.js"></script>
    <script>window.onload = displayGalery(16, 'all', 'all', 'simple') </script>
  </body>
</html>