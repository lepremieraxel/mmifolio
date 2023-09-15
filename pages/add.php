<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/src/css/main.css">
    <link rel="stylesheet" href="/src/css/responsive.css">
    <link rel="stylesheet" href="/src/css/account.css">
    <link rel="stylesheet" href="/src/css/account_responsive.css">
    <title>mmifolio</title>
  </head>
  <body class="add">
    <header>
      <script src="/src/js/header.js"></script>
    </header>
    <main>
      <h2>Ajouter une création</h2>
      <form action="" method="post" enctype="multipart/form-data" name="addForm">
        <div class="form-line">
          <div class="input-container">
            <label for="title">Pour commencer, il lui faut un titre* :</label>
            <input type="text" name="title" id="title" placeholder="Titre de la création (max: 100 caractères)">
            <small></small>
          </div>
          <div class="input-container">
            <label for="category">Et une catégorie* :</label>
            <select name="category" id="category">
              <option value="null">Choisis une catégorie</option>
            </select>
            <small></small>
          </div>
        </div>
        <div class="input-container">
          <label for="description">Ensuite, il faut un texte qui décrit ton projet* :</label>
          <textarea name="description" id="description" placeholder="Description de la création (max: 1000 caractères)"></textarea>
          <small></small>
        </div>
        <div class="form-line">
          <div class="input-container">
            <label for="link">Peut-être un lien externe vers le projet :</label>
            <input type="url" name="link" id="link" placeholder="https://lien-vers-le-projet.mmi">
            <small></small>
          </div>
          <div class="input-container">
            <label for="year">Et une date* :</label>
            <input type="number" name="year" id="year" placeholder="2023" min="2015">
            <small></small>
          </div>
        </div>
        <div class="input-container">
          <label for="miniature">Maintenant, il lui faut une miniature* :</label>
          <div class="input-file">
            <div class="special-input">
              <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M15 8V4H5V20H19V8H15ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM11 9.5C11 10.3284 10.3284 11 9.5 11C8.67157 11 8 10.3284 8 9.5C8 8.67157 8.67157 8 9.5 8C10.3284 8 11 8.67157 11 9.5ZM17.5 17L13.5 10L8 17H17.5Z"></path></svg></span>
              <label class="file-label miniature-label" for="miniature">Choisis un fichier*</label>
              <input type="file" name="miniature" id="miniature" accept="image/png, image/jpeg, image/webp, video/avi, video/mp4, video/mov, video/webm">
            </div>
            <small>Tu peux choisir une image ou une vidéo. Affiché en 1/1. Max: 5Mo.</small>
          </div>
          <div class="img-preview miniature-preview"></div>
        </div>
        <div class="input-container">
        <label for="mainImg">Ensuite, il lui faut une image principale* :</label>
          <div class="input-file">
            <div class="special-input">
              <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M15 8V4H5V20H19V8H15ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM11 9.5C11 10.3284 10.3284 11 9.5 11C8.67157 11 8 10.3284 8 9.5C8 8.67157 8.67157 8 9.5 8C10.3284 8 11 8.67157 11 9.5ZM17.5 17L13.5 10L8 17H17.5Z"></path></svg></span>
              <label class="file-label main-label" for="mainImg">Choisis un fichier*</label>
              <input type="file" name="mainImg" id="mainImg" accept="image/png, image/jpeg, image/webp, video/avi, video/mp4, video/mov, video/webm">
            </div>
            <small>Tu peux choisir une image ou une vidéo. Affiché en 4/3. Max: 5Mo.</small>
          </div>
          <div class="img-preview main-preview"></div>
        </div>
        <div class="input-container">
          <label for="galery">Et pour finir, tu peux ajouter une belle galerie d'images et de vidéos :</label>
          <div class="input-file">
            <div class="special-input">
              <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M15 8V4H5V20H19V8H15ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM11 9.5C11 10.3284 10.3284 11 9.5 11C8.67157 11 8 10.3284 8 9.5C8 8.67157 8.67157 8 9.5 8C10.3284 8 11 8.67157 11 9.5ZM17.5 17L13.5 10L8 17H17.5Z"></path></svg></span>
              <label class="file-label galery-label" for="galery">Choisis des fichiers</label>
              <input type="file" name="galery[]" id="galery" multiple accept="image/png, image/jpeg, image/webp, video/avi, video/mp4, video/mov, video/webm">
            </div>
            <small>Tu peux choisir jusqu'à cinq images et vidéos. Affiché en 4/3. Max: 5Mo par fichier.</small>
          </div>
          <div class="img-preview img-preview-grid"></div>
        </div>
        <button class="cta cta-account">Ajouter</button>
      </form>
    </main>
    <footer>
      <script src="/src/js/footer.js"></script>
    </footer>
    <script src="/src/js/mobileMenu.js"></script>
    <script src="/src/js/like.js"></script>
    <script src="/src/js/unlogBtn.js"></script>
    <script src="/src/js/addForm.js"></script>
  </body>
</html>