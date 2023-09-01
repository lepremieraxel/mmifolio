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
        <div class="filter-container cta cta-small">
          <label for="discover-filter">Trier par :</label>
          <select name="discover-filter" id="discover-filter">
            <option value="default">Date d'ajout</option>
          </select>
        </div>
      </div>
      <section class="galery">
        <article class="galery-item">
          <a href="#user" class="overlay overlay-user" title="Axel Marcial • 2021-2024">
            <img class="overlay-user-avatar" src="/assets/img/avatar.webp" alt="avatar">
            <p> • Axel Marcial</p>
          </a>
          <a href="#creation-a" title="Titre de la création • Catégorie • Axel Marcial">
            <img class="item-img" src="/assets/img/img1square.webp" alt="test">
          </a>
          <div class="overlay overlay-line">
            <a href="#creation-b" class="overlay-infos" title="Titre de la création • Catégorie"><span>Titre de la création</span> • <span>Catégorie</span></a>
            <div class="like-container">
              <p>360</p>
              <button class="like">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z"></path></svg>
                <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z"></path></svg> -->
              </button>
            </div>
          </div>
        </article>
        <article class="galery-item">
          <a href="#user" class="overlay overlay-user" title="Axel Marcial • 2021-2024">
            <img class="overlay-user-avatar" src="/assets/img/avatar.webp" alt="avatar">
            <p> • Axel Marcial</p>
          </a>
          <a href="#creation-a" title="Titre de la création • Catégorie • Axel Marcial">
            <img class="item-img" src="/assets/img/img2.webp" alt="test">
          </a>
          <div class="overlay overlay-line">
            <a href="#creation-b" class="overlay-infos" title="Titre de la création • Catégorie"><span>Titre de la création</span> • <span>Catégorie</span></a>
            <div class="like-container">
              <p>360</p>
              <button class="like">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z"></path></svg>
                <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z"></path></svg> -->
              </button>
            </div>
          </div>
        </article>
      </section>
      <a href="" class="cta cta-center">Charger plus&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg></a>
    </main>
    <footer>
      <?php include($root."src/includes/footer.html") ?>
    </footer>
    <?php include($root."src/includes/scriptjs.html") ?>
  </body>
</html>