import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  connect() {
      const items = document.querySelectorAll('.img-slider')
      const slideNumber = items.length

      const text = document.querySelectorAll('.cont-text')
      const textNumber = text.length

      const next = document.querySelector('.btn-nav')

      let count = 0

      function nextSlide() {
        items[count].classList.remove('active')
        text[count].classList.remove('active')
        if (count < slideNumber -1) {
          count += 1
        } else {
          count = 0;
        }
        console.log(count)
        items[count].classList.add('active')
        text[count].classList.add('active')
      }

      next.addEventListener('click', nextSlide)

      function keyPress(e) {
        if (e.keyCode === 39) {
          nextSlide()
        }
      }
      document.addEventListener('keydown', keyPress)

  }
}
