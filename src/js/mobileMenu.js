const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')

burger.onclick = () => {
  if(burger.classList.contains('active')){
    burger.classList.remove('active')
    menu.classList.remove('active')
  } else {
    burger.classList.add('active')
    menu.classList.add('active')
  }
}