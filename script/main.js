const menu = document.querySelector('.burguer-btn')
const mobile = document.querySelector('.mobile')
let show = false

menu.addEventListener('click', () => {
  if (show == false) {
    mobile.style.display = 'flex'
    show = true
  } else {
    mobile.style.display = 'none'
    show = false
  }
})