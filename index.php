<?php require_once('./src/config/config.php')?>
<!DOCTYPE html>
<html lang="fr">
  <head>
    <?php include($root."src/includes/head.html")?>
    <title>mmifolio</title>
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
    </main>
    <footer>
      <?php include($root."src/includes/footer.html") ?>
    </footer>
    <?php include($root."src/includes/scriptjs.html") ?>
  </body>
</html>