function like(el, token){
  const likeData = new FormData()
  likeData.append('token_user', sessionStorage.getItem('token'))
  likeData.append('token_creation', token)
  window.fetch('/src/php/like.php', {method: 'post', body: likeData}).then(response => response.json()).then(data => {
    if(data['state'] == 'liked' || data['state'] == 'unliked'){
      el.children[0].textContent = data['nb']
      el.children[1].classList.toggle('liked')
    }
  })
}