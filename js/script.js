document.querySelector('.icon-menu').addEventListener('click', () => {
  document.querySelector('.menu__body').classList.toggle('active')
  document.querySelector('.icon-menu').classList.toggle('active')
  document.body.classList.toggle('fixed-position')
})
const cb = (entries, observer) => {
  entries.forEach((el) => {
    if (el.isIntersecting) {
      el.target.style.opacity = 1
      // observer.unobserve(el.target)
    } else {
      el.target.style.opacity = 0
    }
  })
}
const options = {
  threshold: 0.8
}
const observer = new IntersectionObserver(cb, options)
const blockTxt = document.querySelectorAll('.block-txt')
blockTxt.forEach((el) => {
  observer.observe(el)
})
