import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Sources");
    }

    async getHtml() {
        return `
            <div class="sources view container">
                <div class="sources-links">
                    <h2 class="sources-links--title">SOURCES</h2>
                    <h3 class="sources-links--sub">données écrites</h3>
                    <div class="sources-links--content">
                        <li><a class="sources-links--item" href="agribalyse.ademe.fr">agribalyse.ademe.fr</a></li>
                        <li><a class="sources-links--item" href="greenpeace.fr">greenpeace.fr</a></li>
                        <li><a class="sources-links--item" href="liberation.fr">liberation.fr</a></li>
                        <li><a class="sources-links--item" href="impactco2.fr">impactco2.fr</a></li>
                    </div>
                    <h3 class="sources-links--sub">données cartes</h3>
                    <div class="sources-links--content">
                        <li><a class="sources-links--item" href="kaggle.com">kaggle.com</a></li>
                        <li><a class="sources-links--item" href="arcgis.com">arcgis.com</a></li>
                    </div>
                </div>
                <div class="sources-tools">
                    <h2 class="sources-tools--title">OUTILS</h2>
                    <div class="sources-tools--content">
                        <li><a class="sources-tools--item" href="ecosia.org">ecosia.org</a></li>
                        <li><a class="sources-tools--item" href="datagir.ademe.fr">datagir.ademe.fr</a></li>
                    </div>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <img class="sources-illustration" src="/static/image/red_boy.svg" alt="">
            </div>
        `;
    }
}