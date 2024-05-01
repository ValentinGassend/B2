import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Affiche");
    }

    async getHtml() {
        return `
            <div class="victory">
            <section class="victory view container">
            <h1 class="victory-title">Bravo, tu as trouvé le secret</h1>
            <div class="victory-blocks">
                
                <p class="victory-content">
                  si tu es le premier, tu gagne une affiche, pour le savoir contact nous par mail : valentin.gassend@gmail.com
                </p>
                
              
            </div>
          </section>
          <img class="victory-illustration" src="/static/image/red_boy.svg" alt="">

</div>
        `;
    }
}