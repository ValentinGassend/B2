import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("End");
    }

    async getHtml() {
        return `
                <div class="endFrame">
                <img class="endFrame-illustration" src="./static/image/whole_brained.svg" alt="" srcset="">
                    <section class="congrate container view">
                        <h1 class="congrate-title underline">Félicitation Valentin</h1>
                        <p class="congrate-paragraph">Tu fais désormais partie des <b>nouveaux esprits de l’écologie</b>, ceux qui pensent que nous pouvons avoir un <b>impact individuel</b>. Nous espérons avoir pu apporter des <b>réponses</b> à tes questions ainsi qu’un <b>nouveau point de vue</b> sur la manière dont tu peux agir à <b>ton échelle</b>. </p>
                        <p class="congrate-paragraph">Ne fais pas partie des personnes qui pensent que les petites actions quotidiennes n’auront jamais aucun impact. <b>À grande échelle</b>, elles peuvent être <b>très efficaces</b> ; il suffit que <b>chacun d’entre nous</b> y mette <b>du sien</b>.</p>
                    </section>
                    <section class="thanks container view">
                        <h1 class="thanks-title underline">MERCI À TOI, VALENTIN</h1>
                        <div class="thanks-wrapperParagraph">
                            <p class="thanks-paragraph"><b>À toi</b> qui as répondu au questionnaire, <b>à toi</b> qui a suivi l’évolution du projet et/ou <b>à toi</b> qui est venu nous remercier d’écouter <b>l’avis des jeunes générations sur l’urgence écologique</b>. <br/>
                            Grâce à <b>ton témoignage</b> et à <b>tes idées</b>, nous avons pu concevoir<b> Syndesi</b>, une expérience qui se veut être <b>le reflet</b> de <b>tes attentes</b> et de <b>tes besoins</b> en matière d’écologie.
                            </p>
                            <p class="thanks-paragraph">Comme tu le sais, nous avons mis en place <b>un easter egg</b> qui te permet (si tu le trouves :) de gagner <b>deux affiches format A4 ainsi que des stickers</b> sur le thème de l’expérience que tu as finis, le tout designé par <b>nous même</b>.</p>
                            <p class="thanks-paragraph">Si tu n’as pas trouvé <b>l’easter egg</b> caché dans la <b>page expérience</b>, tu peux toujours <b>télécharger le PDF des affiches</b>, ci-dessous. </p>
                            <a class="thanks-link" href="../static/image/affiche.pdf" download>
                                syndesi.pdf
                            </a>
                        </div>
                    </section>
                    <section class="ending container view">
                        <div class="ending-wrapperText">
                            <h1 class="ending-title underline">L’ÉQUIPE SYNDESI</h1>
                            <div class="ending-column-illustration">
                                <div class="ending-column-illustration-individual"> 
                                    <img src="/static/image/Valentin_body.svg"/> 
                                    <p><span class="name">Valentin gassend</span><br/>
                                        (et son café)<br/>
                                        developpeur
                                    </p> 
                                </div>
                                <div class="ending-column-illustration-individual"> 
                                    <img src="/static/image/Baptiste_body.svg"/>
                                    <p><span class="name">Baptiste sinhsatanak</span><br/>
                                    (et son soda)<br/>
                                    designer
                                    </p>
                                </div>
                                <div class="ending-column-illustration-individual"> 
                                   <img src="/static/image/Mel_body.svg"/>
                                    <p><span class="name">Melisse clivaz</span><br/>
                                    (et Rio)<br/>
                                    designer
                                    </p>
                                </div>
                            </div>
                        <div class="ending-footer">
                            <a href="/legal" class="ending-footer--text">Mentions légales</a>
                            <a href="/sources" class="ending-footer--text">Sources & outils</a>
                            <img src="/static/image/cci.png"/>
                            <img src="/static/image/gobelin.png"/>

                        </div>
                    </section>
                </div>
        `;
    }
}