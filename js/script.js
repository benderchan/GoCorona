document.querySelector('.icon-menu').addEventListener('click', () => {
  document.querySelector('.menu__body').classList.toggle('active')
  document.querySelector('.icon-menu').classList.toggle('active')
  document.body.classList.toggle('fixed-position')
})
