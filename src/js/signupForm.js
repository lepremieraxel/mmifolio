const form = document.forms.signupForm
const btn = document.querySelector('.cta-account')

let fullname=null,promo=null,username=null,avatar=null,email=null,passwd=null,repasswd=null
let avatar_file

form.fullname.oninput = () => {
  if(form.fullname.value !== null && form.fullname.value.length >= 3 && form.fullname.value.length <= 100){
    form.fullname.style.border = '2px solid var(--green)'
    form.fullname.parentNode.querySelector('small').textContent = ""
    fullname = form.fullname.value
  } else {
    form.fullname.style.border = '2px solid var(--red)'
    form.fullname.parentNode.querySelector('small').textContent = "Vos nom et prénom doivent contenir au minimum 3 caractères."
    form.fullname.parentNode.querySelector('small').style.color = 'var(--red)'
    fullname = null
  }
}

form.promo.oninput = () => {
  if(form.promo.value !== 'null'){
    form.promo.style.border = '2px solid var(--green)'
    form.promo.parentNode.querySelector('small').textContent = ''
    promo = form.promo.value
  } else {
    form.promo.style.border = '2px solid var(--red)'
    form.promo.parentNode.querySelector('small').textContent = 'Vous devez sélectionner une promo.'
    form.promo.parentNode.querySelector('small').style.color = 'var(--red)'
    promo = null
  }
}

form.username.oninput = () => {
  const regex = /^(?!\.|\d|_)[a-z0-9._]{3,30}$/
  if(form.username.value !== null && form.username.value.match(regex)){
    form.username.parentNode.style.border = '2px solid var(--green)'
    form.username.parentNode.parentNode.querySelector('small').textContent = 'De 3 à 30 caractères alphanumériques. Ainsi que le point (.) et le tiret bas (_).'
    form.username.parentNode.parentNode.querySelector('small').style.color = 'var(--black)'
    username = form.username.value
    window.fetch('/src/php/checkUsername.php', {
      method: 'post',
      body: JSON.stringify({username: username}),
      headers: {"Content-Type": "application/json"}
    })
    .then(response => response.json())
    .then(data => {
      if(data['error'] == 'exist'){
        form.username.parentNode.style.border = '2px solid var(--red)'
        form.username.parentNode.parentNode.querySelector('small').textContent = 'Ce nom d\'utilisateur est déjà utilisé.'
        form.username.parentNode.parentNode.querySelector('small').style.color = 'var(--red)'
      }
      if(data['error'] == 'dont_exist'){
        form.username.parentNode.style.border = '2px solid var(--green)'
        form.username.parentNode.parentNode.querySelector('small').textContent = 'De 3 à 30 caractères alphanumériques. Ainsi que le point (.) et le tiret bas (_).'
        form.username.parentNode.parentNode.querySelector('small').style.color = 'var(--black)'
      }
    })
  } else {
    form.username.parentNode.style.border = '2px solid var(--red)'
    form.username.parentNode.parentNode.querySelector('small').textContent = 'Votre nom d\'utilisateur doit contenir entre 3 et 30 caractères. Seulement des lettres minuscules, des chiffres, des points (.) et des tirets bas (_). Ne peut pas commencer par un point ou un tiret bas.'
    form.username.parentNode.parentNode.querySelector('small').style.color = 'var(--red)'
    username = null
  }
}

form.avatar.oninput = () => {
  if(form.avatar.files.length !== 0){
    const previewDiv = document.querySelector('.avatar-preview')
    while(previewDiv.firstChild){
      previewDiv.removeChild(previewDiv.firstChild)
    }
    for(const file of form.avatar.files){
      if(file.size <= 5242880){
        const fileLabel = document.querySelector('.file-label')
        fileLabel.textContent = file.name
        const img = document.createElement('img')
        img.src = URL.createObjectURL(file)
        img.alt = file.name
        previewDiv.appendChild(img)
        form.avatar.parentNode.parentNode.querySelector('small').textContent = 'Taille recommandé : 256x256 pixel. Max : 5Mo. JPG, PNG et WEBP.'
        form.avatar.parentNode.parentNode.querySelector('small').style.color = 'var(--black)'
        form.avatar.parentNode.style.border = '2px solid var(--green)'
        avatar = `${username.split(' ').join('-')}-${file.name.split(' ').join('-').toLowerCase()}`
        avatar_file = file
      } else {
        form.avatar.parentNode.parentNode.querySelector('small').textContent = 'La taille maximale de fichier est de 5Mo.'
        form.avatar.parentNode.parentNode.querySelector('small').style.color = 'var(--red)'
        form.avatar.parentNode.style.border = '2px solid var(--red)'
        avatar = null
      }
    }
  }
}

form.email.oninput = () => {
  const regex = /^[a-z]+\.[a-z\-]+@iut-tarbes\.fr$/
  if(form.email.value.length !== null && form.email.value.match(regex)){
    form.email.style.border = '2px solid var(--green)'
    form.email.parentNode.querySelector('small').textContent = ''
    email = form.email.value
    window.fetch('/src/php/checkEmail.php', {
      method: 'post',
      body: JSON.stringify({email: email}),
      headers: {"Content-Type": "application/json"}
    })
    .then(response => response.json())
    .then(data => {
      if(data['error'] == 'exist'){
        form.email.style.border = '2px solid var(--red)'
        form.email.parentNode.querySelector('small').textContent = 'Cet email est déjà utilisé.'
        form.email.parentNode.querySelector('small').style.color = 'var(--red)'
      }
      if(data['error'] == 'dont_exist'){
        form.email.style.border = '2px solid var(--green)'
        form.email.parentNode.querySelector('small').textContent = ''
        form.email.parentNode.querySelector('small').style.color = 'var(--black)'
      }
    })
  } else {
    form.email.style.border = '2px solid var(--red)'
    form.email.parentNode.querySelector('small').innerHTML = 'Vous devez renseigner votre email universitaire de l\'IUT de Tarbes. (prenom.nom@iut-tarbes.fr). Si vous n\'y avez pas accès ou si vous n\'en avez pas, <a href="mailto:mmifolio@axelmarcial.com">contactez un administrateur</a>.'
    form.email.parentNode.querySelector('small').style.color = 'var(--red)'
    form.email.parentNode.querySelector('small a').style.color = 'var(--red)'
    form.email.parentNode.querySelector('small a').style.textDecoration = 'underline'
    email = null
  }
}

form.passwd.oninput = () => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@,?;.:\-_\!+=])[a-zA-Z\d@,?;.:\-_\!+=]{8,30}$/
  if(form.passwd.value.length !== null && form.passwd.value.match(regex)){
    form.passwd.parentNode.style.border = '2px solid var(--green)'
    form.passwd.parentNode.parentNode.querySelector('small').textContent = 'De 8 à 30 caractères. Minimum 1 minuscule, 1 majuscule, 1 chiffre et 1 symbole (@,?;.:-_!+=).'
    form.passwd.parentNode.parentNode.querySelector('small').style.color = 'var(--black)'
    passwd = form.passwd.value
  } else {
    form.passwd.parentNode.style.border = '2px solid var(--red)'
    form.passwd.parentNode.parentNode.querySelector('small').textContent = 'Votre mot de passe doit contenir entre 8 et 30 caractères, avec au minimum 1 lettre minuscule, 1 lettre majuscule, 1 chiffre et 1 des symboles suivant (@,?;.:-_!+=).'
    form.passwd.parentNode.parentNode.querySelector('small').style.color = 'var(--red)'
    passwd = null
  }
}

form.repasswd.oninput = () => {
  if(form.repasswd.value === passwd){
    form.repasswd.parentNode.style.border = '2px solid var(--green)'
    form.repasswd.parentNode.parentNode.querySelector('small').textContent = ''
    repasswd = 'true'
  } else {
    form.repasswd.parentNode.style.border = '2px solid var(--red)'
    form.repasswd.parentNode.parentNode.querySelector('small').textContent = 'Les mots de passe ne correspondent pas.'
    form.repasswd.parentNode.parentNode.querySelector('small').style.color = 'var(--red)'
    repasswd = null
  }
}

btn.onclick = (e) => {
  e.preventDefault()
  if(fullname !== null){
    if(promo !== null){
      if(username !== null){
        if(email !== null){
          if(passwd !== null){
            if(repasswd !== null){
              if(avatar !== null){
                const avatarData = new FormData()
                avatarData.append('name', avatar)
                avatarData.append('file', avatar_file)
                avatarData.append('type', 'avatar')
                window.fetch('/src/php/uploadFile.php', {method: 'post',body: avatarData}).then(response => response.text()).then(data => {console.log(data);})
              }
              
              const formData = new FormData()
              formData.append('fullname', fullname)
              formData.append('promo', promo)
              formData.append('username', username)
              formData.append('email', email)
              formData.append('passwd', passwd)
              formData.append('avatar', avatar)
              window.fetch('/src/php/signupForm.php', {method: 'post', body: formData}).then(response => response.text()).then(data => {
                if(data !== 'user not insert' || data !== 'code not insert' || data !== 'links not insert'){
                  sessionStorage.setItem('token', data.split(' ')[2])
                  location = '/'
                }
              })


            } else {
              form.repasswd.parentNode.style.border = '2px solid var(--red)'
              form.repasswd.parentNode.parentNode.querySelector('small').textContent = 'Vous devez confirmer votre mot de passe.'
              form.repasswd.parentNode.parentNode.querySelector('small').style.color = 'var(--red)'
            }
          } else {
            form.passwd.parentNode.style.border = '2px solid var(--red)'
            form.passwd.parentNode.parentNode.querySelector('small').textContent = 'Vous devez renseigner un mot de passe.'
            form.passwd.parentNode.parentNode.querySelector('small').style.color = 'var(--red)'
          }
        } else {
          form.email.style.border = '2px solid var(--red)'
          form.email.parentNode.querySelector('small').innerHTML = 'Vous devez renseigner votre email universitaire de l\'IUT de Tarbes. (prenom.nom@iut-tarbes.fr). Si vous n\'y avez pas accès ou si vous n\'en avez pas, <a href="mailto:mmifolio@axelmarcial.com">contactez un administrateur</a>.'
          form.email.parentNode.querySelector('small').style.color = 'var(--red)'
          form.email.parentNode.querySelector('small a').style.color = 'var(--red)'
          form.email.parentNode.querySelector('small a').style.textDecoration = 'underline'
        }
      } else {
        form.username.parentNode.style.border = '2px solid var(--red)'
        form.username.parentNode.parentNode.querySelector('small').textContent = 'Vous devez indiquer un nom d\'utilisateur.'
        form.username.parentNode.parentNode.querySelector('small').style.color = 'var(--red)'
      }
    } else {
      form.promo.style.border = '2px solid var(--red)'
      form.promo.parentNode.querySelector('small').textContent = 'Vous devez sélectionner une promo.'
      form.promo.parentNode.querySelector('small').style.color = 'var(--red)'
    }
  } else {
    form.fullname.style.border = '2px solid var(--red)'
    form.fullname.parentNode.querySelector('small').textContent = "Vous devez indiquer vos nom et prénom."
    form.fullname.parentNode.querySelector('small').style.color = 'var(--red)'
  }
}
