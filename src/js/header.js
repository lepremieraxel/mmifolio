document.write(`<nav>
<h1 class="logo">
  <a href="/"><span class="title-bold">mmi</span>folio</a>
</h1>
<div class="burger mobile-only"><span></span><span></span><span></span></div>
<div class="menu">
  <a href="/" class="link-hover">Accueil</a>
  <a href="/discover/" class="link-hover">Découvrir</a>
  <a href="/categories/" class="link-hover">Catégories</a>
  <a href="/archives/" class="link-hover">Archives</a>
  <a href="/add/" class="link-gradient link-hover">Déposer une création</a>
  <div class="separator mobile-only"></div>
  <!-- <a href="" class="cta cta-gradient">Se&nbsp;connecter&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path></svg></a> -->
  <!-- <a href="" class="profil-btn">
    <div class="profil-btn-img">
      <img src="/assets/img/avatar.webp" alt="avatar">
    </div>
    <p class="mobile-only">Voir le profil</p>
  </a> -->
  <div class="profil-menu">
    <p></p>
    <a id="profil-link" href=""
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path
          d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"
        ></path></svg>&nbsp;Profil</a
    >
    <a id="settings-link" href=""
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path
          d="M2 11.9998C2 11.1353 2.1097 10.2964 2.31595 9.49631C3.40622 9.55283 4.48848 9.01015 5.0718 7.99982C5.65467 6.99025 5.58406 5.78271 4.99121 4.86701C6.18354 3.69529 7.66832 2.82022 9.32603 2.36133C9.8222 3.33385 10.8333 3.99982 12 3.99982C13.1667 3.99982 14.1778 3.33385 14.674 2.36133C16.3317 2.82022 17.8165 3.69529 19.0088 4.86701C18.4159 5.78271 18.3453 6.99025 18.9282 7.99982C19.5115 9.01015 20.5938 9.55283 21.6841 9.49631C21.8903 10.2964 22 11.1353 22 11.9998C22 12.8643 21.8903 13.7032 21.6841 14.5033C20.5938 14.4468 19.5115 14.9895 18.9282 15.9998C18.3453 17.0094 18.4159 18.2169 19.0088 19.1326C17.8165 20.3043 16.3317 21.1794 14.674 21.6383C14.1778 20.6658 13.1667 19.9998 12 19.9998C10.8333 19.9998 9.8222 20.6658 9.32603 21.6383C7.66832 21.1794 6.18354 20.3043 4.99121 19.1326C5.58406 18.2169 5.65467 17.0094 5.0718 15.9998C4.48848 14.9895 3.40622 14.4468 2.31595 14.5033C2.1097 13.7032 2 12.8643 2 11.9998ZM6.80385 14.9998C7.43395 16.0912 7.61458 17.3459 7.36818 18.5236C7.77597 18.8138 8.21005 19.0652 8.66489 19.2741C9.56176 18.4712 10.7392 17.9998 12 17.9998C13.2608 17.9998 14.4382 18.4712 15.3351 19.2741C15.7899 19.0652 16.224 18.8138 16.6318 18.5236C16.3854 17.3459 16.566 16.0912 17.1962 14.9998C17.8262 13.9085 18.8225 13.1248 19.9655 12.7493C19.9884 12.5015 20 12.2516 20 11.9998C20 11.7481 19.9884 11.4981 19.9655 11.2504C18.8225 10.8749 17.8262 10.0912 17.1962 8.99982C16.566 7.90845 16.3854 6.65378 16.6318 5.47605C16.224 5.18588 15.7899 4.93447 15.3351 4.72552C14.4382 5.52844 13.2608 5.99982 12 5.99982C10.7392 5.99982 9.56176 5.52844 8.66489 4.72552C8.21005 4.93447 7.77597 5.18588 7.36818 5.47605C7.61458 6.65378 7.43395 7.90845 6.80385 8.99982C6.17376 10.0912 5.17754 10.8749 4.03451 11.2504C4.01157 11.4981 4 11.7481 4 11.9998C4 12.2516 4.01157 12.5015 4.03451 12.7493C5.17754 13.1248 6.17376 13.9085 6.80385 14.9998ZM12 14.9998C10.3431 14.9998 9 13.6567 9 11.9998C9 10.343 10.3431 8.99982 12 8.99982C13.6569 8.99982 15 10.343 15 11.9998C15 13.6567 13.6569 14.9998 12 14.9998ZM12 12.9998C12.5523 12.9998 13 12.5521 13 11.9998C13 11.4475 12.5523 10.9998 12 10.9998C11.4477 10.9998 11 11.4475 11 11.9998C11 12.5521 11.4477 12.9998 12 12.9998Z"
        ></path></svg>&nbsp;Paramètres</a
    >
    <div class="separator"></div>
    <a href="" class="profil-menu-unlog unlog-btn"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path
          d="M6.26489 3.80698L7.41191 5.44558C5.34875 6.89247 4 9.28873 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 9.28873 18.6512 6.89247 16.5881 5.44558L17.7351 3.80698C20.3141 5.61559 22 8.61091 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 8.61091 3.68594 5.61559 6.26489 3.80698ZM11 12V2H13V12H11Z"
        ></path></svg>&nbsp;Déconnexion</a
    >
  </div>
</div>
</nav>
`)
const nav = document.querySelector('header .menu')
const profilMenu = document.querySelector('.profil-menu')

const token = sessionStorage.getItem('token')

if(token !== null){
  let userInfos = {}
  const tokenData = new FormData()
  tokenData.append('token', token)
  window.fetch('/src/php/checkToken.php', {method: 'post', body: tokenData}).then(response => response.json()).then(data => {

    if(data['data'] !== 'inexist'){
      userInfos = {
        id: data['id'],
        token: data['token'],
        username: data['username'],
        fullname: data['fullname'],
        email: data['email'],
        promo: data['promo'],
        avatar: data['avatar']
      }

      const btn = document.createElement('a')
      btn.href = `/profil/${userInfos.username}`
      btn.classList.add('profil-btn')
      
      const divImg = document.createElement('div')
      divImg.classList.add('profil-btn-img')
    
      const img = document.createElement('img')
      img.src = `/assets/avatar/${userInfos.avatar}`
      img.alt = userInfos.username

      const text = document.createElement('p')
      text.classList.add('mobile-only')
      text.textContent = 'Voir le profil'

      divImg.appendChild(img)
      btn.appendChild(divImg)
      btn.appendChild(text)
      nav.insertBefore(btn, profilMenu)

      profilMenu.querySelector('p').textContent = `Bonjour ${userInfos.fullname.split(' ')[0]} !`
      profilMenu.querySelector('#profil-link').href = `/profil/${userInfos.username}`
    }
  })
} else {
  const btn = document.createElement('a')
  btn.classList.add('cta', 'cta-gradient')
  btn.href = '/account/login.html'
  btn.innerHTML = 'Se&nbsp;connecter&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path></svg>'

  nav.insertBefore(btn, profilMenu)
}