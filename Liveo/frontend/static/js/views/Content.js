import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Content");
    }

    async getHtml() {
        return `
           <div class="content">
    <section class="hero view container-small">
        <h1 class="hero-title">Manger un <red>steak</red></h1>
        <div class="hero-wrapperParagraph container">
            <p class="hero-text">La plupart des <b>Français</b> sont des <b>gros consommateurs de viande</b> (peut-être en fais tu partis, peut-être pas), néanmoins, très peu d’entre nous ont <b>connaissance de son impact</b>.</p>
            <p class="hero-text"><b>Ensemble</b> nous allons retracer <b>le chemin que fait un steak</b> avant d’arriver dans <b>nos assiettes</b> ; tu pourrais être surpris par <b>ses répercussions sur notre planète</b>.</p>
        </div>
        
    </section>
    <section class="scale-1 view">
        <!--                <h2 class="scale&#45;&#45;title">Steak haché de boeuf cuit</h2>-->
        <img class="scale-1--set" src="/static/image/set.svg">
        <img class="scale-1--steak" src="/static/image/scale1-steak.svg">
        <div class="scale-1--data">
            <p class="scale-1--dataNumber">13.63</p>
            <p class="scale-1--dataText">kg CO2</p>
        </div>
    </section>
    <section class="scale-2 view">
        <lottie-player class="scale-2--lottie" src="/static/lottie/comparatif_dataviz.json" background="transparent"
                       speed="1" loop></lottie-player>
        <div class="scale-2--data---left">
            <p class="scale-2--dataNumber">1</p>
            <p class="scale-2--dataText">steak</p>
        </div> 
        <div class="scale-2--data---right">
            <p class="scale-2--dataNumber">16</p>
            <p class="scale-2--dataText">paquets de pâtes</p>
        </div>
    </section>
    <section class="scale-2--bis view">
        <div class="scale-2--bis---data---left">
            <p class="scale-2--bis---dataNumber">1</p>
            <p class="scale-2--bis---dataText">steak</p>
        </div>
        <div class="scale-2--bis---data---right">
            <p class="scale-2--bis---dataNumber">2</p>
            <p class="scale-2--bis---dataText">pavé de cabillaud</p>
        </div>
    </section>
    <section class="scale-2--ter view">
        <div class="scale-2--ter---data---left">
            <p class="scale-2--ter---dataNumber">1</p>
            <p class="scale-2--ter---dataText">steak</p>
        </div>
        <div class="scale-2--ter---data---right">
            <p class="scale-2--ter---dataNumber">105</p>
            <p class="scale-2--ter---dataText">carottes</p>
        </div>
    </section>
    <section class="scale-3 view">
        <div class="scale-3--images hidden">
            <div class="scale-3--agriculture">
                <svg class="scale-3--agricultureImage" viewBox="0 0 201 258" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path class="scale-3--agricultureImage---path"
                          d="M200.114 157.846L192.053 195.125L183.429 205.389L181.392 205.567L177.941 205.859L170.791 206.485L170.302 207.076L170.286 207.079L168.561 209.145L164.999 213.38L169.873 212.951L177.633 212.284L158.469 235.09L158.275 235.172L137.243 239.325L137.214 239.344L96.4521 248.121L128.781 247.787L105.07 257.93L83.2365 256.249L38.9062 238.451L5.44318 197.162L1.81439 165.86L0 109.607L3.62879 62.8842L42.2649 17.4608L79.2074 1.67776L115.143 0L147.049 8.05833L148.609 9.29758L142.641 9.98076L140.249 10.2604L139.677 10.3239L146.883 16.0563L149.648 18.2456L153.839 17.7626L158.577 17.2224L168.882 25.4111L167.836 26.8505L163.877 32.335L158.323 39.9961L168.202 38.4169L170.884 37.9911L182.145 35.9542L186.342 39.2907L196.085 78.2478L196.136 79.2741L196.133 79.2868L188.332 135.933V135.949L186.241 151.141L185.79 154.386L185.405 157.245L199.459 157.875L200.111 157.846H200.114Z"
                          fill="#C52D48" fill-opacity="0.4"/>
                    <defs>
                        <clipPath id="clip0_388_1374">
                            <rect width="200.114" height="257.93" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                <!--                <img class="scale-3&#45;&#45;agricultureImage" src="/static/image/cut_steak_agriculture.svg">-->

                <div class="scale-3--agricultureText">
                    <h3 class="scale-3--agricultureTitle">97%</h3>
                    <p class="scale-3--agricultureParagraph">agriculture</p>
                </div>
            </div>
            <div class="scale-3--consommation">
                <img class="scale-3--consommationImage" src="/static/image/cut_steak_consommation.svg">

                <div class="scale-3--consommationText">
                    <h3 class="scale-3--consommationTitle">0.2%</h3>
                    <p class="scale-3--consommationParagraph">consommation</p>
                </div>
            </div>
            <div class="scale-3--embalage">
                <img class="scale-3--embalageImage" src="/static/image/cut_steak_embalage.svg">

                <div class="scale-3--embalageText">
                    <h3 class="scale-3--embalageTitle">0.5%</h3>
                    <p class="scale-3--embalageParagraph">emballage</p>
                </div>
            </div>
            <div class="scale-3--supermarche">
                <img class="scale-3--supermarcheImage" src="/static/image/cut_steak_supermarche.svg">

                <div class="scale-3--supermarcheText">
                    <h3 class="scale-3--supermarcheTitle">0.2%</h3>
                    <p class="scale-3--supermarcheParagraph">supermarché</p>
                </div>
            </div>
            <div class="scale-3--transformation">
                <img class="scale-3--transformationImage" src="/static/image/cut_steak_transformation.svg">

                <div class="scale-3--transformationText">
                    <h3 class="scale-3--transformationTitle">1.4%</h3>
                    <p class="scale-3--transformationParagraph">transformation</p>
                </div>
            </div>
            <div class="scale-3--transport">
                <img class="scale-3--transportImage" src="/static/image/cut_steak_transport.svg">

                <div class="scale-3--transportText">
                    <h3 class="scale-3--transportTitle">0.4%</h3>
                    <p class="scale-3--transportParagraphImage">transport</p>
                </div>
            </div>
            <div class="scale-3--outline">
                <img class="scale-3--outlineImage" src="/static/image/steak_outline.svg">
            </div>
        </div>
        <!--        <h2 class="scale&#45;&#45;title">les causes de la déforestation</h2>-->
    </section>
    <section class="scale-4 view">
        <svg class="scale-4--illustration---svg">
            <path class="scale-4--illustration---path"
                  d="M638.447 72.8255L629.2 69.82L585.229 76.1135L543.351 76.1135L502.043 72.8111L428.411 72.8111L357.138 75.6663L253.826 73.6795L163.198 71.656L71.9101 73.6795L40.6548 76.1284L0.40332 73.4449L0.403317 12.4374L22.156 7.68602L77.3284 7.68602L127.489 12.0221L180.193 7.68601L232.358 7.68601L293.792 11.2788L354.454 9.02772L436.908 9.02771L520.012 12.022L556.159 9.92219L594.014 12.7156L612.438 13.4092L606.658 4.85508L606.658 1.96519L610.935 4.96067e-05L619.605 3.00554L626.772 13.4092L635.767 12.7156L650.701 3.66084L653.244 5.89544L653.244 23.3393L662.26 37.651L663.3 40.4586L662.26 43.4651L653.244 60.9074L653.244 80.2237L650.701 81.4952L638.447 72.8255Z"
                  fill="#C52D48" fill-opacity=""/>
        </svg>
        <img class="scale-4--illustration---inline" src="/static/image/all_tree.svg">

      
        <div class="scale-4--container">
            <div class="scale-4--category---miniere">
                <h3 class="scale-4--Number">7%</h3>
                <p class="scale-4--description">exploitation minière</p>
                <div class="scale-4--illustration">
                    <img class="scale-4--illustration---second" src="/static/image/inline_tree_minière.svg">
                </div>
                
            </div>
            
            <div class="scale-4--category---urbaine">
                <h3 class="scale-4--Number">10%</h3>
                <p class="scale-4--description">expansion urbaine</p>
                <div class="scale-4--illustration">
                    <img class="scale-4--illustration---second" src="/static/image/inline_tree_urbaine.svg">
                </div>

                
            </div>
            <div class="scale-4--category---infrastructure">
                <h3 class="scale-4--Number">10%</h3>
                <p class="scale-4--description">infrastructure</p>
                <div class="scale-4--illustration">
                    <img class="scale-4--illustration---second" src="/static/image/inline_tree_expension.svg">
                </div>
                
            </div>
            <div class="scale-4--category---agriculture">
                <h3 class="scale-4--Number">73%</h3>
                <p class="scale-4--description">agriculture</p>
                <div class="scale-4--illustration">
                    <img class="scale-4--illustration---second" src="/static/image/inline_tree_agriculture.svg">
                </div>
               
            </div>
        </div>
        <!--        <h2 class="scale&#45;&#45;title">Lorem ipsum</h2>-->
    </section>
    <section class="scale-4--bis view">

        <img class="scale-4--bis---left" src="/static/image/forest_left.svg">
        <div class="scale-4--bis---cloud hidden">
            <img class="scale-4--bis---cloudImg" src="/static/image/cloud.svg">
            <div class="scale-4--bis---cloudTextContainer">
                <h3 class="scale-4--bis---cloudNumber">18%</h3>
                <p class="scale-4--bis---cloudDesc">émissions totale de CO2</p>
            </div>
        </div>
        <img class="scale-4--bis---right" src="/static/image/forest_right.svg">

    </section>
    <section class="scale-4--ter view">
        <div class="scale-4--ter---MapContainer hide">
            <div id="map"></div>
            <div class="scale-4--ter---legend">
                <div class="scale-4--ter---legendCategory">
                    <p class="scale-4--ter---legendCategory----item-----First button-primary active cursor_hover">EMISSION DE CO2 (Mg)</p>
                    <p class="scale-4--ter---legendCategory----item-----Second button-primary cursor_hover">PERTE D’ARBRES (ha)</p>
                </div>
                <div class="scale-4--ter---legendScale">
                    <div class="scale-4--ter---legendScale----gradiant">
                        <div class="scale-4--ter---legendScale----gradiantData">
                            <div class="scale-4--ter---legendScale----gradiantData-----gradiantIllustration-First"></div>
                            <p class="scale-4--ter---legendScale----gradiantData-----item-First">1820000000</p>
                        </div>
                        <div class="scale-4--ter---legendScale----gradiantData">
                            <div class="scale-4--ter---legendScale----gradiantData-----gradiantIllustration-Second"></div>
                            <p class="scale-4--ter---legendScale----gradiantData-----item-Second">7630000</p>
                        </div>
                        <div class="scale-4--ter---legendScale----gradiantData">
                            <div class="scale-4--ter---legendScale----gradiantData-----gradiantIllustration-Third"></div>
                            <p class="scale-4--ter---legendScale----gradiantData-----item-Third">630000</p>
                        </div>
                        <div class="scale-4--ter---legendScale----gradiantData">
                            <div class="scale-4--ter---legendScale----gradiantData-----gradiantIllustration-Four"></div>
                            <p class="scale-4--ter---legendScale----gradiantData-----item-Four">13100</p>
                        </div>
                        <div class="scale-4--ter---legendScale----gradiantData">
                            <div class="scale-4--ter---legendScale----gradiantData-----gradiantIllustration-Five"></div>
                            <p class="scale-4--ter---legendScale----gradiantData-----item-Five">0</p>
                        </div>
                        <div class="scale-4--ter---legendScale----gradiantData">
                            <div class="scale-4--ter---legendScale----gradiantData-----gradiantIllustration-Six"></div>
                            <p class="scale-4--ter---legendScale----gradiantData-----item-Six">Absence de données</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="scale-4--ter---years">
                            <span class="multi-range">
                                <label id="min">2001</label>
                                <div class="toggle">
                                    <input id="slider"  class="toggle_item cursor_hover" type="range" min="2001" max="2015" step="1" value="2001">
                                </div>
                                <label id="max">2015</label>
                        </span>
            </div>
        </div>

        <div class="scale-4--ter---images">
            <img class="scale-4--ter---left" src="/static/image/forest_left.svg">
            <img class="scale-4--ter---right" src="/static/image/forest_right.svg">
        </div>
    </section>
    <section class="dezoom view">
    <lottie-player class="dezoom-lottie" src="/static/lottie/transition_carte_cerveau.json" background="transparent"
                       speed="1" ></lottie-player>
    </section>
    <section class="dezoom-bis view">
    <div class="dezoom-bis--container">  
                <p class="dezoom-bis--text">Ton esprit se posait des questions...</p>
          
        </div>
    </section>
    <section class="dezoom-ter view">
    <div class="dezoom-ter--container">  
                    <p class="dezoom-ter--text">Nous espérons avoir pu lui apporter des réponses.</p>
          
        </div>
    </section>
    <section class="dezoom-quater view">
    <div class="dezoom-quater--container">            
                <p class="dezoom-quater--text">Saches que tu peux jouer un rôle, même à ton échelle !</p>

        </div>
    </section>
    <section class="dezoom-quinquies view container">
    <div class="dezoom-quinquies--container container"> 
        <div class="dezoom-quinquies--illustration">
                <img class="dezoom-quinquies--illustration---brain" src="/static/image/red_brain.svg">
                <img class="dezoom-quinquies--illustration---body" src="/static/image/body_sitting.svg">
        </div>
        <div class="dezoom-quinquies--text">
        <p>Pour te le prouver,</p>
        <p>laisses nous te montrer</p> 
        <p>quelques solutions efficaces.</p>
        </div>
    </div>
    </section>
    <section class="solutionFirst container-small view">
    <svg style="display: none" width="97" height="282" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" class="solutionFirst--illustration---bottle" clip-rule="evenodd" d="M31.4338 0.722656L26.6108 5.54567V26.5118H30.5183V34.4608L13.5975 51.3816L0.0403144 79.2935V141.561L8.61898 180.555L0 263.61L9.25392 281.277H82.0337L97 263.816L89.1444 180.547L96.9446 141.545V79.3127L84.1748 51.3786L66.4666 34.4403V26.5118H71.1556V5.46102L65.4695 0.722656H31.4338ZM36.6323 26.5118L48.6168 32.965L60.4169 26.5118H36.6323ZM63.3407 26.6943L50.2582 33.8488L75.5812 47.4844L63.3407 35.776V26.6943ZM79.8274 51.5459L48.6226 34.7433L17.8009 51.5989L16.1796 53.2202L4.10003 78.09H92.9486L81.581 53.2233L79.8274 51.5459ZM33.6442 26.678V35.7556L21.7323 47.6675L46.9812 33.8595L33.6442 26.678ZM50.6609 81.216H93.8187V138.041L50.6609 81.216ZM3.77168 81.216H48.6982L93.2132 139.828H48.2867L3.77168 81.216ZM46.3241 139.828H3.16626V83.003L46.3241 139.828ZM73.4039 142.954H93.4751L86.7847 176.406L73.4039 142.954ZM25.29 142.954H71.7206L86.2236 179.211L85.9892 180.383L86.4687 185.466L81.3223 267.166L48.3657 278.151H44.1662L10.9811 265.925V188.077L11.7803 180.376L11.5197 179.191L25.29 142.954ZM10.9067 176.404L3.54749 142.954H23.6179L10.9067 176.404ZM3.24906 263.076L3.20657 262.995L9.41815 203.138V265.349L3.24906 263.076ZM9.41815 274.854L4.3302 265.14L9.41815 267.015V274.854ZM39.6451 278.151H11.1453L10.9811 277.838V267.591L39.6451 278.151ZM80.633 278.108L80.596 278.151H53.3082L81.2163 268.848L80.633 278.108ZM91.5112 265.417L82.3233 276.136L82.816 268.315L91.5112 265.417ZM87.4077 195.42L93.7633 262.789L93.4881 263.11L82.922 266.632L87.4077 195.42ZM29.7368 6.84048L32.7287 3.84861H33.157L47.1656 12.3122L29.7368 23.0661V6.84048ZM65.4944 23.3858H32.1952L48.6695 13.2208L65.4944 23.3858ZM63.8588 3.84861H64.3378L68.0296 6.92513V23.0915L50.1648 12.2981L63.8588 3.84861ZM36.1795 3.84861H60.8823L48.6609 11.3895L36.1795 3.84861Z" fill="#C52D48"/>
    </svg>
    <svg style="display: none" width="355" height="200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" class="solutionFirst--illustration---carbon" clip-rule="evenodd" d="M118.516 0L79.8709 4.05079L53.1169 25.925L46.1378 43.4897L16.008 53.9623L0.450195 82.3285L4.80333 116.314L26.5452 136.45L38.9698 166.301L64.6989 182.439L106.587 174.067L123.575 190.015L151.93 200L185.611 194.076L201.433 182.6L226.217 194.21L262.435 190.158L289.445 166.836H323.146L349.021 142.612L354.457 109.745L341.106 81.4276L311.934 66.7208L300.197 40.1343L278.044 20.1565L242.041 12.1018L217.565 16.7853L194.047 3.98996H169.256L146.829 16.6127L118.516 0ZM55.887 27.9524L81.2052 7.25203L115.855 3.61995L89.1873 43.1665L66.7385 53.1187L55.8673 28.0019L55.887 27.9524ZM48.1449 46.31L48.6646 46.1293L55.0008 30.1826L65.2195 53.792L47.2331 61.7659L48.1449 46.31ZM18.5353 56.6017L46.4457 46.9006L45.524 62.5235L24.376 71.899L18.5353 56.6017ZM5.32906 80.343L17.4108 58.3146L22.8551 72.5733L5.32906 80.343ZM9.99025 116.588L7.94608 114.695L3.88352 82.9786L4.01206 82.7442L23.4485 74.1276L39.6663 116.603L31.5009 128.711L9.99025 116.588ZM28.2632 133.512L15.2498 121.46L30.569 130.093L28.2632 133.512ZM39.795 159.637L29.4351 134.746L32.021 130.911L41.1849 136.076L39.795 159.637ZM62.8677 177.368L41.6312 164.048L41.2528 163.139L42.7957 136.984L48.7239 140.325L62.8677 177.368ZM103.632 171.269L65.3443 178.921L65.2062 178.835L50.9899 141.602L103.632 171.269ZM121.271 183.295L107.613 170.474L106.13 170.77L50.0621 139.172L43.6564 122.395L44.2213 112.819L72.5715 70.7781L121.271 183.295ZM289.479 163.513H288.208L261.042 186.97L226.778 190.803L201.068 178.76L184.28 190.937L152.213 196.576L125.339 187.114L124.321 186.157L73.6742 69.143L90.2976 44.4917L145.824 19.8756L146.794 20.4451L170.127 7.31286H193.201L217.021 20.2725L218.088 20.0683L291.502 69.6415L314.329 142.053L289.479 163.513ZM321.095 163.513H292.021L314.873 143.778L321.095 163.513ZM345.978 140.647L345.926 140.957L324.142 161.351L330.717 130.096L337.708 124.059L345.978 140.647ZM350.557 112.963L346.44 137.851L339.005 122.938L350.557 112.963ZM350.732 109.636L351.01 110.225L350.98 110.402L338.24 121.404L334.235 113.37L336.974 100.346L350.732 109.636ZM339.867 86.5927L349.345 106.695L337.343 98.5909L339.867 86.5927ZM313.134 71.0469L338.588 83.8796L338.693 84.1026L335.857 97.5871L321.549 87.9258L313.134 71.0469ZM279.457 25.906L297.444 42.1262L309.375 69.152L310.654 69.7967L318.75 86.036L292.913 68.589L279.457 25.906ZM220.402 19.6256L241.988 15.495L276.466 23.2087L277.023 23.711L290.7 67.0945L220.402 19.6256ZM117.933 3.51077L144.059 18.8404L92.0458 41.8993L117.933 3.51077ZM24.9695 73.4533L45.414 64.3898L42.5895 112.268L40.8018 114.919L24.9695 73.4533ZM47.123 63.6321L44.4134 109.563L71.7881 68.9682L65.8795 55.3169L47.123 63.6321ZM41.5262 116.816L42.3974 115.524L42.2148 118.619L41.5262 116.816ZM40.3907 118.5L41.9768 122.654L41.2938 134.23L32.9529 129.53L40.3907 118.5ZM43.4184 126.429L42.9046 135.138L47.796 137.895L43.4184 126.429ZM87.4392 45.7589L72.8908 67.333L67.3985 54.6435L87.4392 45.7589ZM315.699 140.87L293.716 71.1359L320.257 89.0582L332.49 113.594L329.206 129.206L315.699 140.87ZM333.041 110.975L323.056 90.9481L335.487 99.3425L333.041 110.975ZM328.642 131.888L322.329 161.902L316.243 142.596L328.642 131.888ZM336.943 122.525L331.281 127.414L333.684 115.989L336.943 122.525Z" fill="#C52D48"/>
    </svg>
    <svg style="display: none" width="181" height="200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" class="solutionFirst--illustration---apple" clip-rule="evenodd" d="M117.024 0L102.735 9.52593L91.5197 25.0545L78.5916 48.3249V67.3406H73.0202L46.842 56.3626H25.6634L10.4091 68.0277L0 104.459L10.2926 147.345L24.8973 173.118L45.652 192.143L72.7151 200L73.1641 199.85L73.5422 199.96L88.258 195.055L103.884 199.989L104.414 199.849L104.749 199.955L133.899 192.239L154.402 173.444L170.582 147.897L180.8 105.322L180.703 104.983L180.828 104.459L170.405 67.9797L153.427 56.3626H132.325L103.614 67.3406H97.683L98.0068 58.2727L107.996 39.1268L128.662 17.5999L128.457 17.309L128.909 16.8376L117.024 0ZM81.9695 67.3406V49.8258L92.4537 30.9544L88.1729 67.3406H81.9695ZM96.8362 52.5766L94.6511 56.7648L94.2734 67.3406H89.8735L94.6049 27.1232L103.316 15.0617L96.8362 52.5766ZM107.746 34.0048L105.073 36.7892L99.3984 47.6658L105.54 12.1078L115.994 5.13888L107.746 34.0048ZM117.395 6.38288L124.542 16.5088L110.247 31.3998L117.395 6.38288ZM27.9241 59.7405V120.176L35.7944 147.818L53.8913 171.732L86.6958 191.779L87.8666 191.389L103.967 196.473L131.803 189.105L151.597 170.96L153.717 167.613L162.434 111.639L157.442 84.0509L133.272 59.8803L104.926 70.7184H72.3406L46.1624 59.7405H27.9241ZM135.52 59.7405L156.914 81.1347L153.137 60.2571L152.382 59.7405H135.52ZM155.095 61.5974L159.01 83.2302L165.801 90.0211L168.408 73.2832L167.492 70.0793L155.095 61.5974ZM169.514 77.1552L167.28 91.5L176.145 100.366L169.514 77.1552ZM177.101 103.71L166.958 93.5667L164.147 111.618L169.086 138.912L177.336 104.534L177.101 103.71ZM168.107 142.989L163.353 116.715L155.983 164.034L167.372 146.053L168.107 142.989ZM84.6001 192.478L56.6778 175.414L72.5952 196.448L72.6458 196.463L84.6001 192.478ZM69.8809 195.66L52.7376 173.006L40.9077 165.777L47.5719 189.183L69.8809 195.66ZM45.2487 187.191L38.7817 164.478L27.9241 157.843V171.31L45.2487 187.191ZM26.2352 168.627V156.81L15.9915 150.55L26.2352 168.627ZM14.2757 147.523L26.2352 154.831V137.985L4.68582 109.51L13.4661 146.094L14.2757 147.523ZM3.70214 105.411L26.2352 135.187V120.412L12.7224 72.9528L3.58639 104.929L3.70214 105.411ZM37.072 152.305L49.9511 169.324L40.2254 163.381L37.072 152.305ZM34.2567 148.585L38.0994 162.082L27.9241 155.863V140.217L34.2567 148.585ZM26.2352 114.244L13.6934 70.1956L26.2352 60.6048V114.244ZM27.9241 137.418V126.344L32.9792 144.098L27.9241 137.418ZM163.228 106.541L159.538 86.1464L165.479 92.0877L163.228 106.541Z" fill="#C52D48"/>
    </svg>
    <svg style="display: none" width="286" height="152" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" class="solutionFirst--illustration---transport" d="M76.4826 0.367188L67.4848 4.86605L26.406 64.8412H15.1121L0 77.2864V112.681L11.7525 123.529H29.4445L35.789 140.183L48.1196 151.633H64.2343L78.2317 140.26L85.4022 123.529H212.781L216.741 140.163L230.858 151.633H246.911L260.936 140.237L267.301 123.529H277.874L286 109.083V72.755L260.622 64.0039L239.263 64.8254L224.142 56.8673L167.81 4.67683L153.157 0.367188H76.4826ZM32.7346 61.4525L72.7268 32.0242L68.3877 9.39889L32.7346 61.4525ZM69.7028 7.47887L74.202 30.9387L111.255 3.67355H77.2631L69.729 7.44058L69.7028 7.47887ZM114.044 3.67355L74.5469 32.7374L80.7038 64.8412H189.612L220.48 57.9815L166.132 7.6298L152.681 3.67355H114.044ZM221.954 59.3474L197.232 64.8412H232.194L222.216 59.5896L221.954 59.3474ZM79.0205 64.8412L73.0718 33.8229L30.9187 64.8412H79.0205ZM261.907 67.9445L269.498 93.7543L282.694 105.99V75.1123L261.907 67.9445ZM282.684 108.235L270.41 96.8543L276.822 118.656L282.684 108.235ZM275.56 120.223L268.04 94.6572L239.43 68.1278L238.916 68.1475H27.2945L8.326 101.801L12.7857 119.983L13.0452 120.223H31.7231L32.2554 121.62L57.2128 130.979L82.6246 121.617L83.222 120.223H215.392L215.724 121.616L239.441 130.672L264.498 121.599L265.023 120.223H275.56ZM263.721 123.639L241.804 131.574L258.299 137.872L263.721 123.639ZM257.025 139.155L239.425 132.435L230.969 135.497L245.685 148.327H245.737L257.025 139.155ZM243.17 148.327L229.192 136.141L220.782 139.186L232.032 148.327H243.17ZM219.591 137.858L227.767 134.898L216.561 125.129L219.591 137.858ZM81.728 123.709L59.5826 131.868L75.6492 137.893L81.728 123.709ZM74.3357 139.166L57.2077 132.743L48.4433 135.972L62.9788 148.327H63.0605L74.3357 139.166ZM60.4262 148.327L46.6626 136.628L39.6151 139.224L49.418 148.327H60.4262ZM38.4536 137.89L45.2166 135.399L33.8112 125.704L38.4536 137.89ZM10.5853 117.952L7.13996 103.906L3.30636 110.707V111.233L10.5853 117.952ZM3.30636 107.34L6.56453 101.56L3.30636 88.2763V107.34ZM3.30636 81.3367L7.75057 99.4554L25.3968 68.1475H16.2983L3.30636 78.8468V81.3367ZM241.765 68.038L267.129 91.5573L260.005 67.3364L241.765 68.038ZM34.7262 124.312L54.8378 131.854L46.9973 134.742L34.7262 124.312ZM218.131 124.305L237.062 131.533L229.544 134.255L218.131 124.305Z" fill="#C52D48"/>
</svg>
    <svg width="222" height="265" viewBox="0 0 222 265" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" class="solutionFirst--illustration---impact" clip-rule="evenodd" d="M49.3089 0.993164L33.7465 18.3864V46.4875L13.4356 60.0281L0.180664 93.6072L6.31684 139.19L30.0255 170.802L63.8299 188.549V264.008H184.163V184.931H195.1L216.712 166.921L222 130.787L216.825 93.7025V28.978L192.045 20.7179L176.429 23.1837L165.352 5.29079H138.895L129.411 12.404L119.63 0.993164H93.0286L84.96 12.2893L70.4364 0.993164H49.3089ZM35.8088 49.2447L35.9861 49.1265H103.448L114.542 61.8058V81.2466L103.333 97.2599H53.5156V100.698H104.11L128.347 104.041L144.806 120.5L152.874 150.083L156.191 149.178L147.883 118.715L130.873 101.705V97.492L138.846 104.136H161.424L175.397 95.9169L185.26 104.136H207.223L213.23 98.129L194.025 181.352L193.855 181.493H180.725V183.337L67.268 260.088V186.471L65.1151 185.341L16.3899 113.57L35.8088 49.2447ZM3.85072 95.0999L3.70754 94.0363L16.2384 62.2917L33.5607 50.7435L15.1469 111.739L3.85072 95.0999ZM8.88352 132.486L4.3646 98.9174L14.5074 113.857L8.88352 132.486ZM61.8866 183.646L32.3105 168.118L9.60472 137.844L9.4373 136.6L15.7503 115.688L61.8866 183.646ZM124.198 260.57H69.6242L178.773 186.734L124.198 260.57ZM180.725 186.984V260.57H126.336L180.725 186.984ZM214.357 100.891L218.527 130.776L213.501 165.122L196.209 179.532L214.357 100.891ZM126.858 100.365L107.249 97.6604L116.715 84.1371L126.858 100.365ZM119.547 6.17899L127.435 15.3815V98.0448L117.786 82.6071L117.98 82.3303V60.514L117.19 59.6107L119.547 6.17899ZM95.1921 4.43126H117.903L115.552 57.7386L105.008 45.6884H104.713L95.1921 4.43126ZM102.949 45.6884H87.0371V15.2964L93.7624 5.88098L102.949 45.6884ZM83.599 19.7424V45.6884H69.6018L83.599 19.7424ZM83.599 16.1218L67.8192 45.372L51.6791 4.43126H69.2568L83.599 15.5863V16.1218ZM50.1417 5.21856L66.0962 45.6884H50.1588L37.1846 20.5033V19.7L50.1417 5.21856ZM48.2251 45.6884H37.1846V24.257L48.2251 45.6884ZM130.873 16.964V15.6051L139.44 9.17997L153.872 43.8856L148.331 65.0924L130.873 16.964ZM139.219 99.9715L130.873 93.0166V22.0051L147.566 68.0229L139.219 99.9715ZM159.418 100.698H140.806L148.598 70.8702L159.418 100.698ZM173.849 91.9264V92.8386L161.114 100.33L149.364 67.9397L154.963 46.5097L173.849 91.9264ZM164.419 10.3157L173.849 25.5489V87.4494L155.681 43.7601L164.419 10.3157ZM141.114 8.72888H163.057L154.59 41.136L141.114 8.72888ZM177.395 26.5118L189.19 47.0253L190.894 24.3803L177.395 26.5118ZM192.607 24.5292L190.714 49.6763L208.286 80.2362L213.387 37.3861V31.456L192.607 24.5292ZM213.387 51.9279L209.72 82.7305L213.387 89.1078V51.9279ZM213.387 92.5565L209.38 85.5876L207.822 98.6748L213.387 93.1097V92.5565ZM205.857 100.64L207.946 83.0933L190.485 52.7258L186.874 100.698H205.799L205.857 100.64ZM185.23 99.6355L188.96 50.0747L177.287 29.7738V93.0166L185.23 99.6355Z" fill="#C52D48"/>
        </svg>
        <div class="solutionFirst--containerText">
            <h2 class="solutionFirst--title underline">Datagir</h2>
            <p class="solutionFirst--text">Ce <b>trousseau d’outils gouvernemental</b> te permettra de <b>réduire ton empreinte carbone</b> en ciblant <b>chacun des aspects de ton quotidien</b> : </p>
            <ul class="solutionFirst--list">
                <li class="solutionFirst--list---item"> <a target="_blank" href="https://datagir.ademe.fr/apps/nos-gestes-climat/">Nos Gestes Climats</a></li>
                <li class="solutionFirst--list---item"> <a target="_blank" href="https://datagir.ademe.fr/apps/mon-impact-transport/">Mon Impact Transport</a></li>
                <li class="solutionFirst--list---item"> <a target="_blank" href="https://datagir.ademe.fr/apps/mes-fruits-et-l%C3%A9gumes-de-saison/">Mon Fruits et Légumes de Saison</a></li>
                <li class="solutionFirst--list---item"> <a target="_blank" href="https://datagir.ademe.fr/apps/impact-co2/">Impact CO2</a></li>
                <li class="solutionFirst--list---item"> <a target="_blank" href="https://datagir.ademe.fr/apps/que-faire-de-mes-dechets/">Que Faire de mes Déchets</a></li>
            </ul>
        </div>
        <div class="solutionFirst--illustration" id="solutionFirst--illustration">
        <svg width="222" height="265" viewBox="0 0 222 265" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" class="solutionFirst--illustration---container" clip-rule="evenodd" d="M49.3089 0.993164L33.7465 18.3864V46.4875L13.4356 60.0281L0.180664 93.6072L6.31684 139.19L30.0255 170.802L63.8299 188.549V264.008H184.163V184.931H195.1L216.712 166.921L222 130.787L216.825 93.7025V28.978L192.045 20.7179L176.429 23.1837L165.352 5.29079H138.895L129.411 12.404L119.63 0.993164H93.0286L84.96 12.2893L70.4364 0.993164H49.3089ZM35.8088 49.2447L35.9861 49.1265H103.448L114.542 61.8058V81.2466L103.333 97.2599H53.5156V100.698H104.11L128.347 104.041L144.806 120.5L152.874 150.083L156.191 149.178L147.883 118.715L130.873 101.705V97.492L138.846 104.136H161.424L175.397 95.9169L185.26 104.136H207.223L213.23 98.129L194.025 181.352L193.855 181.493H180.725V183.337L67.268 260.088V186.471L65.1151 185.341L16.3899 113.57L35.8088 49.2447ZM3.85072 95.0999L3.70754 94.0363L16.2384 62.2917L33.5607 50.7435L15.1469 111.739L3.85072 95.0999ZM8.88352 132.486L4.3646 98.9174L14.5074 113.857L8.88352 132.486ZM61.8866 183.646L32.3105 168.118L9.60472 137.844L9.4373 136.6L15.7503 115.688L61.8866 183.646ZM124.198 260.57H69.6242L178.773 186.734L124.198 260.57ZM180.725 186.984V260.57H126.336L180.725 186.984ZM214.357 100.891L218.527 130.776L213.501 165.122L196.209 179.532L214.357 100.891ZM126.858 100.365L107.249 97.6604L116.715 84.1371L126.858 100.365ZM119.547 6.17899L127.435 15.3815V98.0448L117.786 82.6071L117.98 82.3303V60.514L117.19 59.6107L119.547 6.17899ZM95.1921 4.43126H117.903L115.552 57.7386L105.008 45.6884H104.713L95.1921 4.43126ZM102.949 45.6884H87.0371V15.2964L93.7624 5.88098L102.949 45.6884ZM83.599 19.7424V45.6884H69.6018L83.599 19.7424ZM83.599 16.1218L67.8192 45.372L51.6791 4.43126H69.2568L83.599 15.5863V16.1218ZM50.1417 5.21856L66.0962 45.6884H50.1588L37.1846 20.5033V19.7L50.1417 5.21856ZM48.2251 45.6884H37.1846V24.257L48.2251 45.6884ZM130.873 16.964V15.6051L139.44 9.17997L153.872 43.8856L148.331 65.0924L130.873 16.964ZM139.219 99.9715L130.873 93.0166V22.0051L147.566 68.0229L139.219 99.9715ZM159.418 100.698H140.806L148.598 70.8702L159.418 100.698ZM173.849 91.9264V92.8386L161.114 100.33L149.364 67.9397L154.963 46.5097L173.849 91.9264ZM164.419 10.3157L173.849 25.5489V87.4494L155.681 43.7601L164.419 10.3157ZM141.114 8.72888H163.057L154.59 41.136L141.114 8.72888ZM177.395 26.5118L189.19 47.0253L190.894 24.3803L177.395 26.5118ZM192.607 24.5292L190.714 49.6763L208.286 80.2362L213.387 37.3861V31.456L192.607 24.5292ZM213.387 51.9279L209.72 82.7305L213.387 89.1078V51.9279ZM213.387 92.5565L209.38 85.5876L207.822 98.6748L213.387 93.1097V92.5565ZM205.857 100.64L207.946 83.0933L190.485 52.7258L186.874 100.698H205.799L205.857 100.64ZM185.23 99.6355L188.96 50.0747L177.287 29.7738V93.0166L185.23 99.6355Z" fill="#C52D48"/>
        </svg>
</div>
    </section>
    <section class="solutionSecond container-small view" id="solutionSecond">
        <div class="solutionSecond--containerText">
            <h2 class="solutionSecond--title underline">Ecosia</h2>
            <p class="solutionSecond--text">Ce moteur de recherche <b>plante des arbres</b> à chaque <b>recherche</b> que tu fais dessus.</p>
            <p class="solutionSecond--text">Utiliser Ecosia ne te demande <b>aucun investissement</b>, et te permet de <b>lutter</b> à moindre coût contre la <b>déforestation.</b></p>
        </div>
        <div class="solutionSecond--illustration">
            <div class="solutionSecond--illustration--img" id="solutionSecond--illustration--img"></div>
            <div class="solutionSecond--illustration--data">160000000</div>
            <div class="solutionSecond--illustration--desc">arbres plantés par Ecosia</div>
        </div>
    </section>
    <section class="end container-small view">
        <div class="end-containerText">
            <p class="end--title">Dis moi, Valentin</p>
            <p class="end--text">maintenant que tu en sais un peu plus sur le sujet,</p>
            <p class="end--text">que souhaites-tu faires ?</p>
        </div>
        <div class="end-buttonContainer">
        <a href="/home" class="end-btn--gallery button-primary">VOIR LA GALLERIE</a>
        <a href="/end" class="end-btn--end button-primary">VOIR LA CONCLUSION</a>
        </div>
            <a class="end--illustration" href="/ilovedata"><img src="/static/image/whole_iel.svg"/></a>

    </section>

</div>
          `;
    }
}