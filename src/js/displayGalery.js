// refaire les deux fonctions, createGalery doit seulement creer les galeryItem grace au data en argument

function displayGalery(nb, cat, year, more){
  const galeryContainer = document.querySelector('.galery-container')
  let file
  if(more !== false){
    switch(more){
      case 'cat':
        file = '/src/php/checkCategories.php'
        break
      case 'year':
        file = '/src/php/checkYear.php'
        break
      default:
        break
    }
    window.fetch(file).then(response => response.json()).then(data => {
      for(const line of data){
        const galery = document.createElement('section')
        galery.classList.add('galery')

        if(more == 'cat'){
          if(createGalery(nb, line.name, year, galery) > 0){
            const galeryTitle = document.createElement('div')
            galeryTitle.classList.add('galery-title')
    
            const h2 = document.createElement('h2')
            h2.textContent = line.name
            galeryTitle.appendChild(h2)
    
            const btn = document.createElement('a')
            btn.classList.add('cta', 'cta-small')
            btn.innerHTML = 'En voir plus&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'
            galeryTitle.appendChild(btn)
    
            galeryContainer.appendChild(galeryTitle)
            galeryContainer.appendChild(galery)
          }
        }
        if(more == 'year'){
          if(createGalery(nb, cat, line.year, galery) > 0){
            const galeryTitle = document.createElement('div')
            galeryTitle.classList.add('galery-title')
    
            const h2 = document.createElement('h2')
            h2.textContent = line.name
            galeryTitle.appendChild(h2)
    
            const btn = document.createElement('a')
            btn.classList.add('cta', 'cta-small')
            btn.innerHTML = 'En voir plus&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'
            galeryTitle.appendChild(btn)
    
            galeryContainer.appendChild(galeryTitle)
            galeryContainer.appendChild(galery)
          }
        }
      }
    })
  } else {
    const galery = document.createElement('section')
    galery.classList.add('galery')
    createGalery(nb, cat, year, galery)
    galeryContainer.appendChild(galery)
  }
}

function createGalery(nb, cat, year, galery){
  let nbEl = 0
  const formData = new FormData()
  formData.append('nb', nb)
  formData.append('category', cat)
  formData.append('year', year)
  window.fetch('/src/php/displayGalery.php', {method: 'post', body: formData}).then(response => response.json()).then(data => {
    if(data['data'] !== 'error'){
      for(const line of data){
        console.log(line);
        const galeryItem = document.createElement('article')
        galeryItem.classList.add('galery-item')
  
        const overlayUser = document.createElement('a')
        overlayUser.classList.add('overlay', 'overlay-user')
        overlayUser.href = `/profil/${line.username}`
        overlayUser.title = `${line.fullname} • ${line.promo}`
  
        const overlayUserAvatar = document.createElement('img')
        overlayUserAvatar.classList.add('overlay-user-avatar')
        overlayUserAvatar.src = `/assets/avatar/${line.avatar}`
        overlayUserAvatar.alt = line.username
        overlayUser.appendChild(overlayUserAvatar)
  
        const overlayUserPara = document.createElement('p')
        overlayUserPara.textContent = ` • ${line.fullname}`
        overlayUser.appendChild(overlayUserPara)
  
        galeryItem.appendChild(overlayUser)
  
        const creationLink = document.createElement('a')
        creationLink.href = `/creation/${line.token}`
        creationLink.title = `${line.title} • ${line.category} • ${line.fullname}`
  
        let itemImg
        if(line.miniature.split('.')[1] == 'jfif' || line.miniature.split('.')[1] == 'jpg' || line.miniature.split('.')[1] == 'jpeg' || line.miniature.split('.')[1] == 'pjpeg' || line.miniature.split('.')[1] == 'pjp' || line.miniature.split('.')[1] == 'png' || line.miniature.split('.')[1] == 'webp'){
          itemImg = document.createElement('img')
          itemImg.alt = `${line.title}`
        } else if(line.miniature.split('.')[1] == 'mp4' || line.miniature.split('.')[1] == 'mov' || line.miniature.split('.')[1] == 'avi' || line.miniature.split('.')[1] == 'webm'){
          itemImg = document.createElement('video')
          itemImg.autoplay = true;
          itemImg.loop = true;
          itemImg.muted = true;
          itemImg.playsInline = true;
        }
        itemImg.classList.add('item-img')
        itemImg.src = `/assets/miniature/${line.miniature}`
  
        creationLink.appendChild(itemImg)
        galeryItem.appendChild(creationLink)
  
        const overlayLine = document.createElement('div')
        overlayLine.classList.add('overlay', 'overlay-line')
  
        const overlayInfos = document.createElement('a')
        overlayInfos.classList.add('overlay-infos')
        overlayInfos.href = `/creation/${line.token}`
        overlayInfos.title = `${line.title} • ${line.category}`
        overlayInfos.textContent = `${line.title} • ${line.category}`
        overlayLine.appendChild(overlayInfos)
  
        const likeContainer = document.createElement('div')
        likeContainer.classList.add('like-container')
  
        const likeCount = document.createElement('p')
        likeCount.classList.add('like-count')
        likeCount.textContent = line.likes
        likeContainer.appendChild(likeCount)
  
        const likeBtn = document.createElement('button')
        likeBtn.classList.add('like')
        likeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z"></path></svg>'
        likeContainer.appendChild(likeBtn)
  
        overlayLine.appendChild(likeContainer)
  
        galeryItem.appendChild(overlayLine)
  
        galery.appendChild(galeryItem)

        return nbEl
      }
    }
  })
}