const unlogBtn = document.querySelector('.unlog-btn')
unlogBtn.onclick = () => {
  sessionStorage.removeItem('token')
}