const today = new Date();
const currentYear = today.getFullYear();
let tokenUser = null
window.onload = () => {
  if(sessionStorage.getItem('token') == null){
    location = '/login/'
  } else {
    tokenUser = sessionStorage.getItem('token')
  }
  const yearInput = document.querySelector('#year')
  yearInput.setAttribute('max', currentYear)

  window.fetch('/src/php/checkCategories.php').then(response => response.json()).then(data => {
    const catSelect = document.querySelector('#category')
    for(const line of data){
      const option = document.createElement('option')
      option.value = line.name
      option.textContent = line.name
      catSelect.appendChild(option)
    }
  })
}

const form = document.forms.addForm
const btn = document.querySelector('.cta-account')

let title=null, category=null, description=null, link=null, year=null, miniature=null, mainImg=null, img1=null, img2=null, img3=null, img4=null, img5=null
let galery = []
let galery_file = []
let miniature_file,mainImg_file

form.title.oninput = () => {
  if(form.title.value !== null && form.title.value.length >= 3 && form.title.value.length <= 100){
    form.title.style.border = '2px solid var(--green)'
    form.title.parentNode.querySelector('small').textContent = ""
    title = form.title.value
  } else {
    form.title.style.border = '2px solid var(--red)'
    form.title.parentNode.querySelector('small').textContent = "Le titre doit contenir au minimum 3 caractères."
    form.title.parentNode.querySelector('small').style.color = 'var(--red)'
    title = null
  }
}

form.category.oninput = () => {
  if(form.category.value !== 'null'){
    form.category.style.border = '2px solid var(--green)'
    form.category.parentNode.querySelector('small').textContent = ''
    category = form.category.value
  } else {
    form.category.style.border = '2px solid var(--red)'
    form.category.parentNode.querySelector('small').textContent = 'Vous devez sélectionner une catégorie.'
    form.category.parentNode.querySelector('small').style.color = 'var(--red)'
    category = null
  }
}

form.description.oninput = () => {
  if(form.description.value !== null && form.description.value.length >= 3 && form.description.value.length <= 1000){
    form.description.style.border = '2px solid var(--green)'
    form.description.parentNode.querySelector('small').textContent = ""
    description = form.description.value
  } else {
    form.description.style.border = '2px solid var(--red)'
    form.description.parentNode.querySelector('small').textContent = "La description doit contenir au minimum 3 caractères."
    form.description.parentNode.querySelector('small').style.color = 'var(--red)'
    description = null
  }
}

form.link.oninput = () => {
  if(form.link.value !== null){
    link = form.link.value
  } else {
    link = null
  }
}

form.year.oninput = () => {
  if(form.year.value !== null && form.year.value.length == 4){
    form.year.style.border = '2px solid var(--green)'
    form.year.parentNode.querySelector('small').textContent = ""
    year = form.year.value
  } else {
    form.year.style.border = '2px solid var(--red)'
    form.year.parentNode.querySelector('small').textContent = "L'année doit contenir 4 chiffres."
    form.year.parentNode.querySelector('small').style.color = 'var(--red)'
    year = null
  }
}

form.miniature.oninput = () => {
  if(form.miniature.files.length == 1){
    const previewDiv = document.querySelector('.miniature-preview')
    while(previewDiv.firstChild){
      previewDiv.removeChild(previewDiv.firstChild)
    }
    for(const file of form.miniature.files){
      if(file.size <= 5242880){
        const fileLabel = document.querySelector('.miniature-label')
        fileLabel.textContent = file.name
        if(file.type == 'image/png' || file.type == 'image/jpeg' || file.type == 'image/webp'){
          const img = document.createElement('img')
          img.src = URL.createObjectURL(file)
          img.alt = file.name
          previewDiv.appendChild(img)
        }
        if(file.type == 'video/mp4' || file.type == 'video/avi' || file.type == 'video/mov' || file.type == 'video/webm'){
          const video = document.createElement('video')
          video.src = URL.createObjectURL(file)
          video.autoplay = true;
          video.loop = true;
          video.muted = true;
          video.playsInline = true;
          video.title = file.name;
          previewDiv.appendChild(video)
        }
        form.miniature.parentNode.parentNode.querySelector('small').textContent = 'Tu peux choisir une image ou une vidéo. Affiché en 1/1. Max: 5Mo.'
        form.miniature.parentNode.parentNode.querySelector('small').style.color = 'var(--black)'
        form.miniature.parentNode.style.border = '2px solid var(--green)'
        miniature = `${tokenUser}-${new Date().getTime()}-${file.name.split(' ').join('-').toLowerCase()}`
        miniature_file = file
      } else {
        form.miniature.parentNode.parentNode.querySelector('small').textContent = 'La taille maximale de fichier est de 5Mo.'
        form.miniature.parentNode.parentNode.querySelector('small').style.color = 'var(--red)'
        form.miniature.parentNode.style.border = '2px solid var(--red)'
        miniature = null
      }
    }
  } else {
    form.miniature.parentNode.parentNode.querySelector('small').textContent = 'Tu dois séléctionner une image ou une vidéo.'
    form.miniature.parentNode.parentNode.querySelector('small').style.color = 'var(--red)'
    form.miniature.parentNode.style.border = '2px solid var(--red)'
    miniature = null
  }
}

form.mainImg.oninput = () => {
  if(form.mainImg.files.length == 1){
    const previewDiv = document.querySelector('.main-preview')
    while(previewDiv.firstChild){
      previewDiv.removeChild(previewDiv.firstChild)
    }
    for(const file of form.mainImg.files){
      if(file.size <= 5242880){
        const fileLabel = document.querySelector('.main-label')
        fileLabel.textContent = file.name
        if(file.type == 'image/png' || file.type == 'image/jpeg' || file.type == 'image/webp'){
          const img = document.createElement('img')
          img.src = URL.createObjectURL(file)
          img.alt = file.name
          previewDiv.appendChild(img)
        }
        if(file.type == 'video/mp4' || file.type == 'video/avi' || file.type == 'video/mov' || file.type == 'video/webm'){
          const video = document.createElement('video')
          video.src = URL.createObjectURL(file)
          video.autoplay = true;
          video.loop = true;
          video.muted = true;
          video.playsInline = true;
          video.title = file.name;
          previewDiv.appendChild(video)
        }
        form.mainImg.parentNode.parentNode.querySelector('small').textContent = 'Tu peux choisir une image ou une vidéo. Affiché en 4/3. Max: 5Mo.'
        form.mainImg.parentNode.parentNode.querySelector('small').style.color = 'var(--black)'
        form.mainImg.parentNode.style.border = '2px solid var(--green)'
        mainImg = `${tokenUser}-${new Date().getTime()}-${file.name.split(' ').join('-').toLowerCase()}`
        mainImg_file = file
      } else {
        form.mainImg.parentNode.parentNode.querySelector('small').textContent = 'La taille maximale de fichier est de 5Mo.'
        form.mainImg.parentNode.parentNode.querySelector('small').style.color = 'var(--red)'
        form.mainImg.parentNode.style.border = '2px solid var(--red)'
        mainImg = null
      }
    }
  } else {
    form.mainImg.parentNode.parentNode.querySelector('small').textContent = 'Tu dois séléctionner une image ou une vidéo.'
    form.mainImg.parentNode.parentNode.querySelector('small').style.color = 'var(--red)'
    form.mainImg.parentNode.style.border = '2px solid var(--red)'
    mainImg = null
  }
}

form.galery.oninput = () => {
  if(form.galery.files.length > 0 && form.galery.files.length <= 5){
    const previewDiv = document.querySelector('.img-preview-grid')
    while(previewDiv.firstChild){
      previewDiv.removeChild(previewDiv.firstChild)
    }
    const fileLabel = document.querySelector('.galery-label')
    fileLabel.textContent = ''
    for(const file of form.galery.files){
      if(file.size <= 5242880){
        fileLabel.textContent += `${file.name}, `
        if(file.type == 'image/png' || file.type == 'image/jpeg' || file.type == 'image/webp'){
          const img = document.createElement('img')
          img.src = URL.createObjectURL(file)
          img.alt = file.name
          previewDiv.appendChild(img)
        }
        if(file.type == 'video/mp4' || file.type == 'video/avi' || file.type == 'video/mov' || file.type == 'video/webm'){
          const video = document.createElement('video')
          video.src = URL.createObjectURL(file)
          video.autoplay = true;
          video.loop = true;
          video.muted = true;
          video.playsInline = true;
          video.title = file.name;
          previewDiv.appendChild(video)
        }
        form.galery.parentNode.parentNode.querySelector('small').textContent = 'Tu peux choisir jusqu\'à cinq images et vidéos. Affiché en 4/3. Max: 5Mo par fichier.'
        form.galery.parentNode.parentNode.querySelector('small').style.color = 'var(--black)'
        form.galery.parentNode.style.border = '2px solid var(--green)'
        galery.push(`${tokenUser}-${new Date().getTime()}-${file.name.split(' ').join('-').toLowerCase()}`)
        galery_file.push(file)
      } else {
        form.galery.parentNode.parentNode.querySelector('small').textContent = `La taille de ${file.name} est supérieur à 5Mo.`
        form.galery.parentNode.parentNode.querySelector('small').style.color = 'var(--red)'
        form.galery.parentNode.style.border = '2px solid var(--red)'
        galery = []
      }
    }
    console.log(galery);
  } else {
    form.galery.parentNode.parentNode.querySelector('small').textContent = 'Vous ne pouvez séléctionner que 5 fichiers maximum.'
    form.galery.parentNode.parentNode.querySelector('small').style.color = 'var(--red)'
    form.galery.parentNode.style.border = '2px solid var(--red)'
    galery = null
  }
}

btn.onclick = (e) => {
  e.preventDefault()
  if(title !== null){
    if(category !== null){
      if(description !== null){
        if(year !== null){
          if(miniature !== null){
            if(mainImg !== null){
              if(galery.length !== 0){
                let i = 0;
                galery.forEach(el => {
                  const galeryData = new FormData()
                  galeryData.append('name', el)
                  galeryData.append('file', galery_file[i])
                  galeryData.append('type', 'galery')
                  window.fetch('/src/php/uploadFile.php', {method: 'post',body: galeryData}).then(response => response.text())
                  i++
                });
              }
              const miniatureData = new FormData()
              miniatureData.append('name', miniature)
              miniatureData.append('file', miniature_file)
              miniatureData.append('type', 'miniature')
              window.fetch('/src/php/uploadFile.php', {method: 'post',body: miniatureData}).then(response => response.text())

              const mainImgData = new FormData()
              mainImgData.append('name', mainImg)
              mainImgData.append('file', mainImg_file)
              mainImgData.append('type', 'mainImg')
              window.fetch('/src/php/uploadFile.php', {method: 'post',body: mainImgData}).then(response => response.text())

              const yearData = new FormData()
              yearData.append('year', year)
              window.fetch('/src/php/checkYear.php', {method: 'post', body: yearData})

              const formData = new FormData()
              formData.append('tokenUser', tokenUser)
              formData.append('title', title)
              formData.append('category', category)
              formData.append('description', description)
              formData.append('link', link)
              formData.append('year', year)
              formData.append('miniature', miniature)
              formData.append('mainImg', mainImg)
              formData.append('img1', galery[0])
              formData.append('img2', galery[1])
              formData.append('img3', galery[2])
              formData.append('img4', galery[3])
              formData.append('img5', galery[4])
              window.fetch('/src/php/addForm.php', {method: 'post', body: formData}).then(response => response.text()).then(data => {
                if(data !== 'not-insert'){
                  location = `/creation/${data}`
                }
              })

            } else {
              form.mainImg.parentNode.parentNode.querySelector('small').textContent = 'Tu dois séléctionner une image ou une vidéo.'
              form.mainImg.parentNode.parentNode.querySelector('small').style.color = 'var(--red)'
              form.mainImg.parentNode.style.border = '2px solid var(--red)'
            }
          } else {
            form.miniature.parentNode.parentNode.querySelector('small').textContent = 'Tu dois séléctionner une image ou une vidéo.'
            form.miniature.parentNode.parentNode.querySelector('small').style.color = 'var(--red)'
            form.miniature.parentNode.style.border = '2px solid var(--red)'
          }
        } else {
          form.year.style.border = '2px solid var(--red)'
          form.year.parentNode.querySelector('small').textContent = "L'année doit contenir 4 chiffres."
          form.year.parentNode.querySelector('small').style.color = 'var(--red)'
        }
      } else {
        form.description.style.border = '2px solid var(--red)'
        form.description.parentNode.querySelector('small').textContent = "La description doit contenir au minimum 3 caractères."
        form.description.parentNode.querySelector('small').style.color = 'var(--red)'
      }
    } else {
      form.category.style.border = '2px solid var(--red)'
      form.category.parentNode.querySelector('small').textContent = 'Vous devez sélectionner une catégorie.'
      form.category.parentNode.querySelector('small').style.color = 'var(--red)'
    }
  } else {
    form.title.style.border = '2px solid var(--red)'
    form.title.parentNode.querySelector('small').textContent = "Le titre doit contenir au minimum 3 caractères."
    form.title.parentNode.querySelector('small').style.color = 'var(--red)'
  }
}