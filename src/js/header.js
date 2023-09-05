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