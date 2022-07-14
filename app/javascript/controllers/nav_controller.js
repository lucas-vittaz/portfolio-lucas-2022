import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  connect() {
      const btns = document.querySelectorAll(".nav-item");

      for (let i = 0; i < btns.length; i++  ){

        btns[i].addEventListener('click', (e) =>{
          for (let i = 0; i < btns.length; i++  ){
          btns[i].classList.remove('active')
          }
          e.target.classList.add('active')
        });

      }

    const h1 = document.querySelector('h1')
    const h2 = document.querySelector('h2')
    function typingEffect(elt, speed) {
      let text = elt.innerHTML
      elt.innerHTML= ""
      let i = 0
      let timer = setInterval(() => {
        if (i < text.length){
          elt.append(text.charAt(i))
          i++
        } else {
          clearInterval(timer)
        }
      }, speed);
    }
    typingEffect(h1, 100)
    typingEffect(h2, 150)
  }
}
