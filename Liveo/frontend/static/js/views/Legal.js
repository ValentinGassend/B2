import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Legal");
    }

    async getHtml() {
        return `
            <div class="legal">
            <section class="mention view container">
            <h1 class="mention-title">Mentions légales</h1>
            <div class="mentions-blocks">
                <h2 class="mention-sub">
                  Informations légales & législation
                </h2>
                <p class="mention-content">
                  Conformément à la loi n°78-17 du 6 janvier 1978 relative à
                  l’informatique, aux fichiers et aux libertés, vous disposez
                  d’un droit d’accès aux informations vous concernant.
                </p>
                <p class="mention-content">
                  Vous pouvez modifier ou supprimer ces informations en nous
                  contactant : valentin.gassend@gmail.com.
                </p>
              
            </div>
          </section>
          <img class="legal-illustration" src="/static/image/red_boy.svg" alt="">

</div>
        `;
    }
}