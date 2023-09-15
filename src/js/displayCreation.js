const main = document.querySelector('main')

const tokenCreation = location.href.split('/')[4]

const creationData = new FormData()
creationData.append('token', tokenCreation)
window.fetch('/src/php/displayCreation.php', {method: 'post', body: creationData}).then(response => response.json()).then(data => {

  // close btn
  const closeBtn = document.createElement('a')
  closeBtn.addEventListener("click", () => {
    history.back()
  })
  closeBtn.className = 'close-btn link-hover'
  closeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path></svg>&nbsp;Fermer'
  main.appendChild(closeBtn)

  // profil like
  const profilLike = document.createElement('div')
  profilLike.className = 'flex-line profil-like'

  // profil
  const profil = document.createElement('a')
  profil.classList.add('profil')
  profil.href = `/profil/${data.username}`

  // profil img
  const profilImg = document.createElement('img')
  profilImg.src = `/assets/avatar/${data.avatar}`
  profil.appendChild(profilImg)

  // profil span
  const profilSpan = document.createElement('span')
  profilSpan.textContent = `• ${data.fullname} • ${data.username}`
  profil.appendChild(profilSpan)

  profilLike.appendChild(profil)

  // like container
  const likeContainer = document.createElement('div')
  likeContainer.className = 'like-container'

  // like count
  const likeCount = document.createElement('p')
  likeCount.className = 'like-count'
  likeCount.textContent = data.nbLikes
  likeContainer.appendChild(likeCount)

  // like btn
  const likeBtn = document.createElement('a')
  likeBtn.addEventListener('click', () => { like(likeContainer, tokenCreation) })
  if(data.userLikes.length > 0){
    data.userLikes.forEach(user => {
      if(user.token_user.includes(sessionStorage.getItem('token'))){
        likeBtn.className = 'like like-black liked'
      } else {
        likeBtn.className = 'like like-black'
      }
    })
  } else {
    likeBtn.className = 'like like-black'
  }
  likeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z"></path></svg>'
  likeContainer.appendChild(likeBtn)

  profilLike.appendChild(likeContainer)

  main.appendChild(profilLike)

  // main part
  const mainPart = document.createElement('div')
  mainPart.className = 'main-part'

  // title infos
  const titleInfos = document.createElement('div')
  titleInfos.className = 'flex-line title-infos'

  // title
  const title = document.createElement('p')
  title.textContent = data.title
  titleInfos.appendChild(title)

  // category year
  const categoryYear = document.createElement('p')
  categoryYear.textContent = `${data.category} • ${data.year}`
  titleInfos.appendChild(categoryYear)

  mainPart.appendChild(titleInfos)

  // main img
  const mainImg = document.createElement('img')
  mainImg.src = `/assets/mainImg/${data.mainImg}`
  mainImg.alt = data.title
  mainPart.appendChild(mainImg)

  // description
  const description = document.createElement('p')
  description.className = 'description'
  description.textContent = data.description
  mainPart.appendChild(description)

  main.appendChild(mainPart)

  // galery part
  if(data.img1 !== null){
    const galeryPart = document.createElement('div')
    galeryPart.className = 'galery-part'

    // galery preview
    const galeryView = document.createElement('img')
    galeryView.className = 'galery-view'
    galeryView.src = `/assets/galery/${data.img1}`
    galeryView.alt = data.title
    galeryPart.appendChild(galeryView)

    // galery selector
    const galerySelector = document.createElement('div')
    galerySelector.className = 'galery-selector'
    let galeryImg = [data.img1,data.img2,data.img3,data.img4,data.img5]
    galeryImg.forEach(img => {
      if(img !== null){
        const imgEl = document.createElement('img')
        imgEl.src = `/assets/galery/${img}`
        imgEl.alt = data.title
        if(img == data.img1){
          imgEl.classList.add('active')
        }
        imgEl.addEventListener('click', () => {
          document.querySelectorAll('.galery-selector img').forEach(img => {
            img.classList.remove('active')
          })
          galeryView.src = imgEl.src
          imgEl.classList.add('active')
        })
        galerySelector.appendChild(imgEl)
      }
    })
    galeryPart.appendChild(galerySelector)

    main.appendChild(galeryPart)
  }

})