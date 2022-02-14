document.querySelector('.icon-menu').addEventListener('click', () => {
  document.querySelector('.menu__body').classList.toggle('active')
  document.querySelector('.icon-menu').classList.toggle('active')
  document.body.classList.toggle('fixed-position')
})
const textFade = (entries, observer) => {
  entries.forEach((el) => {
    if (el.isIntersecting) {
      el.target.style.opacity = 1
    } else {
      el.target.style.opacity = 0
    }
  })
}
const options = {
  threshold: 0.8
}
const observer = new IntersectionObserver(textFade, options)
const blockTxt = document.querySelectorAll('.block-txt')
blockTxt.forEach((el) => {
  observer.observe(el)
})
const cardAnimation = (entries, observer) => {
  entries.forEach((el) => {
    if (el.isIntersecting) {
      el.target.classList.add('drop')
    }
  })
}
const cards = document.querySelectorAll('.cards-healthcare__cards')
const cardObserver = new IntersectionObserver(cardAnimation, options)
