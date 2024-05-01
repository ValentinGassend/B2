import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Gallery");
    }

    async getHtml() {
        return `
    <section class="gallery">
    <div class="illustration">
        <svg class="illustration-links" width="1440" height="800" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_646_2729)">
      <line opacity="0.5" x1="840.04" y1="-59.2915" x2="444.04" y2="181.708" stroke="#C52D48" stroke-width="4"/>
      <line opacity="0.5" x1="1588.43" y1="-70.0467" x2="443.43" y2="181.953" stroke="#C52D48" stroke-width="4"/>
      <line opacity="0.5" x1="1588.81" y1="-70.1733" x2="267.814" y2="518.827" stroke="#C52D48" stroke-width="4"/>
      <line opacity="0.5" x1="1550.1" y1="454.998" x2="267.1" y2="518.997" stroke="#C52D48" stroke-width="4"/>
      <line opacity="0.5" x1="1548.83" y1="454.621" x2="837.828" y2="-59.3792" stroke="#C52D48" stroke-width="4"/>
      <line opacity="0.5" x1="1550.91" y1="454.783" x2="1202.91" y2="631.783" stroke="#C52D48" stroke-width="4"/>
      <line opacity="0.5" x1="1548.88" y1="867.655" x2="1200.88" y2="631.655" stroke="#C52D48" stroke-width="4"/>
      <line opacity="0.5" x1="1200.98" y1="631.72" x2="441.98" y2="181.72" stroke="#C52D48" stroke-width="4"/>
      <line opacity="0.5" x1="1200.25" y1="629.036" x2="1586.25" y2="-72.9637" stroke="#C52D48" stroke-width="4"/>
      <line opacity="0.5" x1="712.14" y1="866.735" x2="441.14" y2="180.735" stroke="#C52D48" stroke-width="4"/>
      <line opacity="0.5" x1="265.227" y1="516.074" x2="441.227" y2="179.074" stroke="#C52D48" stroke-width="4"/>
      <line opacity="0.5" x1="-147.517" y1="864.697" x2="441.483" y2="178.697" stroke="#C52D48" stroke-width="4"/>
      <line opacity="0.5" x1="-141.425" y1="305.046" x2="442.575" y2="178.046" stroke="#C52D48" stroke-width="4"/>
      <line opacity="0.5" x1="-141.703" y1="305.128" x2="838.297" y2="-62.8723" stroke="#C52D48" stroke-width="4"/>
      <line opacity="0.5" x1="57.3394" y1="-170.485" x2="444.339" y2="178.515" stroke="#C52D48" stroke-width="4"/>
      <line opacity="0.5" x1="57.963" y1="-168.617" x2="-144.037" y2="866.383" stroke="#C52D48" stroke-width="4"/>
      <line opacity="0.5" x1="266.106" y1="518.789" x2="-141.894" y2="314.789" stroke="#C52D48" stroke-width="4"/>
      <line opacity="0.5" x1="265.085" y1="517.575" x2="59.0845" y2="-168.425" stroke="#C52D48" stroke-width="4"/>
      <line opacity="0.5" x1="265.578" y1="515.593" x2="837.578" y2="-62.4068" stroke="#C52D48" stroke-width="4"/>
      <line opacity="0.5" x1="267.24" y1="515.014" x2="1202.23" y2="628.134" stroke="#C52D48" stroke-width="4"/>
      <line opacity="0.5" x1="-140.539" y1="310.054" x2="1202.45" y2="628.173" stroke="#C52D48" stroke-width="4"/>
      <line opacity="0.5" x1="267.525" y1="515.07" x2="1550.52" y2="864.07" stroke="#C52D48" stroke-width="4"/>
      <line opacity="0.5" x1="57.144" y1="-170.641" x2="1203.13" y2="628.479" stroke="#C52D48" stroke-width="4"/>
      <line opacity="0.5" x1="268.231" y1="515.424" x2="715.231" y2="864.424" stroke="#C52D48" stroke-width="4"/>
      <line opacity="0.5" x1="268.231" y1="515.424" x2="715.231" y2="864.424" stroke="#C52D48" stroke-width="4"/>
      <line opacity="0.5" x1="57.6878" y1="-170.073" x2="715.688" y2="864.927" stroke="#C52D48" stroke-width="4"/>
      <line opacity="0.5" x1="268.291" y1="518.528" x2="-144.709" y2="867.528" stroke="#C52D48" stroke-width="4"/>
      <line opacity="0.5" x1="713.13" y1="864.199" x2="1201.12" y2="628.319" stroke="#C52D48" stroke-width="4"/>
      <line opacity="0.5" x1="712.537" y1="864.637" x2="1586.54" y2="-73.3634" stroke="#C52D48" stroke-width="4"/>
      <line opacity="0.5" x1="-146.345" y1="864.03" x2="1201.64" y2="628.149" stroke="#C52D48" stroke-width="4"/>
      <line opacity="0.5" x1="-146.952" y1="864.241" x2="1587.05" y2="-73.7591" stroke="#C52D48" stroke-width="4"/>
      <line opacity="0.5" x1="712.018" y1="865.733" x2="837.018" y2="-61.2672" stroke="#C52D48" stroke-width="4"/>
    </g>
    <defs>
      <clipPath id="clip0_646_2729">
        <rect width="1440" height="800" fill="white"/>
      </clipPath>
    </defs>
  </svg>
    </div>
    
    <div class="steak">
      <a class="steak-text __galleryItem" href="/content">manger un steak</a>
      <svg class="steak-links" width="1440" height="800" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="1040.55" y1="319.949" x2="442.55" y2="181.949" stroke="#C52D48" stroke-opacity="0.4" stroke-width="4"/>
        <line x1="1040.11" y1="319.793" x2="55.1136" y2="-167.207" stroke="#C52D48" stroke-opacity="0.4" stroke-width="4"/>
        <line x1="1041.5" y1="319.937" x2="267.498" y2="518.937" stroke="#C52D48" stroke-opacity="0.4" stroke-width="4"/>
        <line x1="1042.72" y1="319.025" x2="715.717" y2="867.025" stroke="#C52D48" stroke-opacity="0.4" stroke-width="4"/>
        <line x1="1041.51" y1="316.067" x2="1550.51" y2="451.067" stroke="#C52D48" stroke-opacity="0.4" stroke-width="4"/>
        <line x1="1039.84" y1="316.372" x2="1586.84" y2="-73.6285" stroke="#C52D48" stroke-opacity="0.4" stroke-width="4"/>
        <line x1="1042.78" y1="317.083" x2="1203.78" y2="629.083" stroke="#C52D48" stroke-opacity="0.4" stroke-width="4"/>
        <line x1="1042.47" y1="316.639" x2="1551.47" y2="864.639" stroke="#C52D48" stroke-opacity="0.4" stroke-width="4"/>
        <line x1="1039.24" y1="318.941" x2="837.235" y2="-60.0593" stroke="#C52D48" stroke-opacity="0.4" stroke-width="4"/>
        <line x1="1040.98" y1="320" x2="-141.019" y2="309" stroke="#C52D48" stroke-opacity="0.4" stroke-width="4"/>
        <line x1="1041.84" y1="318.815" x2="-145.16" y2="867.815" stroke="#C52D48" stroke-opacity="0.4" stroke-width="4"/>
      </svg>
    </div>

    <div class="gum">
          <h2 class="gum-text">Jeter un chewing gum</h2>
    </div>
    <div class="car">
          <h2 class="car-text">utiliser la voiture</h2>
    </div>
    <div class="bath">
          <h2 class="bath-text">prendre un bain</h2>
    </div>
</section>
            

            
        `;
    }
}