const menu = document.querySelector('.burguer-btn')
const mobile = document.querySelector('.mobile')
const navMobile = document.querySelector('.navMobile')
let show = false

menu.addEventListener('click', () => {
  if (show == false) {
    mobile.style.display = 'flex'
    navMobile.classList.add('slide-in-top')
    show = true
  } else {
    mobile.style.display = 'none'
    show = false
  }
})