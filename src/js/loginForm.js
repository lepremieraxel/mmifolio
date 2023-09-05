const form = document.forms.loginForm
const btn = document.querySelector('.cta-account')

let login=null,passwd=null

form.login.oninput = () => {
  login = form.login.value
}
form.passwd.oninput = () => {
  passwd = form.passwd.value
}

btn.onclick = (e) => {
  e.preventDefault()
  const formData = new FormData()
  formData.append('login', login)
  formData.append('passwd', passwd)
  window.fetch('/src/php/loginForm.php', {method: 'post', body: formData}).then(response => response.text()).then(data => {
    if(data !== 'password-incorrect' || data !== 'login-incorrect'){
      sessionStorage.setItem('token', data)
      location = '/'
    }
    if(data == 'login incorrect'){
      form.login.parentNode.style.border = '2px solid var(--red)'
      form.login.parentNode.parentNode.querySelector('small').textContent = 'Ce nom d\'utilisateur ou cet email est incorrect.'
      form.login.parentNode.parentNode.querySelector('small').style.color = 'var(--red)'
    }
    if(data == 'password incorrect'){
      form.passwd.parentNode.style.border = '2px solid var(--red)'
      form.passwd.parentNode.parentNode.querySelector('small').textContent = 'Le mot de passe est incorrect.'
      form.passwd.parentNode.parentNode.querySelector('small').style.color = 'var(--red)'
    }
  })
}