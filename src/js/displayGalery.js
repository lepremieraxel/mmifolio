function displayGalery(nb, cat, year, type){
  // selectionne le container a galery
  const galeryContainer = document.querySelector('.galery-container')
  let file
  let page
  // si argument type n'est pas false, switch pour selectionner le bon fichier
  if(type !== 'simple'){
    switch(type){
      case 'category':
        file = '/src/php/checkCategories.php'
        page = 'category'
        break
      case 'archives':
        file = '/src/php/checkYear.php'
        page = 'year'
        break
      default:
        break
    }
    // recupere toutes les categories ou toutes les années
    window.fetch(file).then(response => response.json()).then(data => {
      for(const line of data){
        const typeData = new FormData()
        typeData.append('nb', nb)
        switch(type){
          case 'category':
            typeData.append('category', line.name)
            typeData.append('year', year)
            break
          case 'archives':
            typeData.append('category', cat)
            typeData.append('year', line.name)
            break
        }
        typeData.append('type', type)
        window.fetch('/src/php/displayGalery.php', {method: 'post', body: typeData}).then(response => response.json()).then(data1 => {
          if(data1.length > 0){
            const galery = document.createElement('section')
            galery.classList.add('galery')
            const galeryTitle = document.createElement('div')
            const h2 = document.createElement('h2')
            const btn = document.createElement('a')
            galeryTitle.classList.add('galery-title')
            h2.textContent = line.name
            btn.classList.add('cta', 'cta-small')
            btn.innerHTML = 'En voir plus&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'
            btn.href = `/${page}/${line.name.split(' ').join('-').split('/').join('-').toLowerCase()}`
            galeryTitle.appendChild(h2)
            galeryTitle.appendChild(btn)
            galeryContainer.appendChild(galeryTitle)
            for(const line1 of data1){
              createGaleryItem(line1, galery)
            }
            galeryContainer.appendChild(galery)
          }
        })
      }
    })
  } else {
    const typeData = new FormData()
    typeData.append('nb', nb)
    typeData.append('category', cat)
    typeData.append('year', year)
    typeData.append('type', type)
    window.fetch('/src/php/displayGalery.php', {method: 'post', body: typeData}).then(response => response.json()).then(data => {
      if(data.length > 0){
        const galery = document.createElement('section')
        galery.classList.add('galery')
        for(const line of data){
          createGaleryItem(line, galery)
        }
        galeryContainer.appendChild(galery)
      }
    })
  }
}
function createGaleryItem(data, galery){
  const galeryItem = document.createElement('article')
  galeryItem.classList.add('galery-item')

  const overlayUser = document.createElement('a')
  overlayUser.classList.add('overlay', 'overlay-user')
  overlayUser.href = `/profil/${data.username}`
  overlayUser.title = `${data.fullname} • ${data.promo}`

  const overlayUserAvatar = document.createElement('img')
  overlayUserAvatar.classList.add('overlay-user-avatar')
  overlayUserAvatar.src = `/assets/avatar/${data.avatar}`
  overlayUserAvatar.alt = data.username
  overlayUser.appendChild(overlayUserAvatar)

  const overlayUserPara = document.createElement('p')
  overlayUserPara.textContent = ` • ${data.fullname}`
  overlayUser.appendChild(overlayUserPara)

  galeryItem.appendChild(overlayUser)

  const creationLink = document.createElement('a')
  creationLink.href = `/creation/${data.token}`
  creationLink.title = `${data.title} • ${data.category} • ${data.fullname}`

  let itemImg
  if(data.miniature.split('.')[1] == 'jfif' || data.miniature.split('.')[1] == 'jpg' || data.miniature.split('.')[1] == 'jpeg' || data.miniature.split('.')[1] == 'pjpeg' || data.miniature.split('.')[1] == 'pjp' || data.miniature.split('.')[1] == 'png' || data.miniature.split('.')[1] == 'webp'){
    itemImg = document.createElement('img')
    itemImg.alt = `${data.title}`
  } else if(data.miniature.split('.')[1] == 'mp4' || data.miniature.split('.')[1] == 'mov' || data.miniature.split('.')[1] == 'avi' || data.miniature.split('.')[1] == 'webm'){
    itemImg = document.createElement('video')
    itemImg.autoplay = true;
    itemImg.loop = true;
    itemImg.muted = true;
    itemImg.playsIndata = true;
  }
  itemImg.classList.add('item-img')
  itemImg.src = `/assets/miniature/${data.miniature}`

  creationLink.appendChild(itemImg)
  galeryItem.appendChild(creationLink)

  const overlayLine = document.createElement('div')
  overlayLine.classList.add('overlay', 'overlay-line')

  const overlayInfos = document.createElement('a')
  overlayInfos.classList.add('overlay-infos')
  overlayInfos.href = `/creation/${data.token}`
  overlayInfos.title = `${data.title} • ${data.category}`
  overlayInfos.textContent = `${data.title} • ${data.category}`
  overlayLine.appendChild(overlayInfos)

  const likeContainer = document.createElement('div')
  likeContainer.classList.add('like-container')

  const likeCount = document.createElement('p')
  likeCount.classList.add('like-count')
  likeCount.textContent = data.likes
  likeContainer.appendChild(likeCount)

  const likeBtn = document.createElement('a')
  likeBtn.classList.add('like')
  likeBtn.addEventListener('click', () => { like(likeContainer, data.token) })
  likeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z"></path></svg>'
  if(data.user_likes.length > 0){
    data.user_likes.forEach(user => {
      if(user.token_user.includes(sessionStorage.getItem('token'))){
        likeBtn.classList.add('liked')
      }
    })
  }
  likeContainer.appendChild(likeBtn)

  overlayLine.appendChild(likeContainer)

  galeryItem.appendChild(overlayLine)

  galery.appendChild(galeryItem)
}