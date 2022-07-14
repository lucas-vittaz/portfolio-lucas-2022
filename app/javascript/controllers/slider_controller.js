import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    const items = document.querySelectorAll('.img-slider');
    const slideNumber = items.length;
    const text = document.querySelectorAll('.cont-text');
    const controls = document.querySelectorAll('.carousel-control');
    const number = document.querySelectorAll('.work-nb');
    const next = document.querySelector('.btn-nav');
    let count = 0;

    function nextSlide(){
      items[count].classList.remove('active');
      text[count].classList.remove('active');
      controls[count].classList.remove('active');
      number[count].classList.remove('active');
      if (count < slideNumber -1) {
        count += 1;
      } else {
        count = 0;
      }
      items[count].classList.add('active');
      text[count].classList.add('active');
      controls[count].classList.add('active');
      number[count].classList.add('active');
    }
    next.addEventListener('click', nextSlide);

    for (let i = 0; i < controls.length; i++){
      controls[i].addEventListener('click', function(e) {

      count = i;
      for (let i = 0; i < controls.length; i++){
        items[i].classList.remove('active');
        text[i].classList.remove('active');
        controls[i].classList.remove('active');
        number[i].classList.remove('active');
      }

      items[i].classList.add('active');
      text[i].classList.add('active');
      controls[i].classList.add('active');
      number[i].classList.add('active');
      });
    }

    function keyPress(e) {
      if (e.keyCode === 39) {
        nextSlide();
      }
    }
    document.addEventListener('keydown', keyPress);
  }
}
