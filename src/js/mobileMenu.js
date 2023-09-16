const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')

burger.onclick = () => {
  if(burger.classList.contains('active')){
    burger.classList.remove('active')
    menu.classList.remove('active')
    document.body.style.position = 'static'
  } else {
    burger.classList.add('active')
    menu.classList.add('active')
    document.body.style.position = 'fixed'
  }
}