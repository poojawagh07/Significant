const dropdowns = document.querySelectorAll('.custom-dropdown')

dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', function () {
    if (window.innerWidth <= 991) {
      dropdowns.forEach(item => {
        if (item !== dropdown) {
          item.classList.remove('active')
        }
      })

      dropdown.classList.toggle('active')
    }
  })
})

AOS.init({
  duration: 1000,
  once: true
})

document.addEventListener('DOMContentLoaded', function () {
  const scrollTopBtn = document.getElementById('scScrollTop')

  // Show/hide scroll-to-top button
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('show')
    } else {
      scrollTopBtn.classList.remove('show')
    }
  })

  // Smooth scroll to top
  scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
})

// ======================scroller===================
// ====================== SCROLLER =====================

const slider = document.querySelector('.materials-slider')
const track = document.querySelector('.materials-track')

/* DUPLICATE AGAIN */
track.innerHTML += track.innerHTML

/* SPEED */
let speed = 0.03

/* AUTO SCROLL */
function autoSlide () {
  slider.scrollLeft += speed

  /* PERFECT LOOP */
  if (slider.scrollLeft >= track.scrollWidth / 2) {
    slider.scrollLeft = 0
  }
}

/* SLOW SMOOTH */
let play = setInterval(autoSlide, 80)

/* PAUSE ON HOVER */
slider.addEventListener('mouseenter', () => {

  clearInterval(play)
})

/* RESUME */
slider.addEventListener('mouseleave', () => {

  play = setInterval(autoSlide, 80)
})

/* DRAG SUPPORT */

let isDown = false
let startX
let scrollLeft

slider.addEventListener('mousedown', (e) => {

  isDown = true

  startX = e.pageX - slider.offsetLeft

  scrollLeft = slider.scrollLeft
})

slider.addEventListener('mouseleave', () => {

  isDown = false
})

slider.addEventListener('mouseup', () => {

  isDown = false
})

slider.addEventListener('mousemove', (e) => {

  if (!isDown) return

  e.preventDefault()

  const x = e.pageX - slider.offsetLeft

  const walk = (x - startX) * 2

  slider.scrollLeft = scrollLeft - walk
})
