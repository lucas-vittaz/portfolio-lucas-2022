import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  connect() {
      const btns = document.querySelectorAll(".nav-item");

      for (let i = 0; i < btns.length; i++  ){

        btns[i].addEventListener('click', (e)=>{
          btns.forEach(btn => {
            console.log(btn)
            btn.classList.remove('active')
          });
          console.log(e.target)
          e.target.classList.add('active')
        });

      }

  }
}
