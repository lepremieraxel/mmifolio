<?php require_once('../src/config/config.php')?>
<!DOCTYPE html>
<html lang="fr">
  <head>
  <?php include($root."src/includes/head.html")?>
  <link rel="stylesheet" href="/src/css/creation.css">
  <link rel="stylesheet" href="/src/css/creation-responsive.css">
    <title>mmifolio</title>
  </head>
  <body class="creation">
    <header>
      <?php include($root."src/includes/header.html") ?>
    </header>
    <main>
      <!-- <a href="" class="close-btn link-hover"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path></svg>&nbsp;Fermer</a>
      <div class="flex-line profil-like">
        <a href="" class="profil">
          <img src="/assets/avatar/lepremieraxel-avatar.webp" alt="profil">
          <span>• Full Name • @username</span>
        </a>
        <div class="like-container">
          <p class="like-count">666</p>
          <a class="like like-black"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z"></path></svg></a>
        </div>
      </div>
      <div class="main-part">
        <div class="flex-line title-infos">
          <p>Titre de la création</p>
          <p>Catégorie • Année</p>
        </div>
        <img src="/assets/mainImg/f04e31b678-1693753994199-eo1ecwtcqyp.png" alt="mainImg">
        <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odio dolore quod laudantium ab corrupti nemo quia, voluptatem accusantium hic eum aspernatur ut, accusamus vero nobis iusto asperiores sapiente natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quibusdam, commodi officia sit ipsum nihil vel eius nisi eveniet, modi quisquam. Accusantium numquam sunt sit ea incidunt laudantium earum distinctio!</p>
      </div>
      <div class="galery-part">
        <img class="galery-view" src="/assets/galery/f04e31b678-1693753998897-fichier-28.png" alt="galery view">
        <div class="galery-selector">
          <img class="active" src="/assets/galery/f04e31b678-1693753998897-fichier-28.png" alt="">
          <img src="/assets/galery/f04e31b678-1693753998897-img4.png" alt="">
          <img src="/assets/galery/f04e31b678-1693753998897-img4.png" alt="">
          <img src="/assets/galery/f04e31b678-1693753998897-img4.png" alt="">
          <img src="/assets/galery/f04e31b678-1693753998897-img4.png" alt="">
        </div>
      </div> -->
    </main>
    <footer>
      <?php include($root."src/includes/footer.html") ?>
    </footer>
    <?php include($root."src/includes/scriptjs.html") ?>
    <script src="/src/js/displayCreation.js"></script>
  </body>
</html>