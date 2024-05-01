import Content from "./views/Content.js";
import Intro from "./views/Intro.js";
import End from "./views/End.js";
import Gallery from "./views/Gallery.js";
import Legal from "./views/Legal.js";
import Sources from "./views/Sources.js";
import Affiche from "./views/Affiche.js";
import {
    gsap, ScrollTrigger, ScrollToPlugin, MorphSVGPlugin, Power1, TextPlugin
} from "./libs/gsap-public/esm/all.js";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MorphSVGPlugin, Power1, TextPlugin);
// import {ScrollTrigger} from "./libs/gsap-public/minified/ScrollTrigger.min.js";


// gsap.registerPlugin(ScrollTrigger);

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [{path: "/intro", view: Intro}, {path: "/legal", view: Legal}, {
        path: "/sources", view: Sources
    }, {path: "/end", view: End}, {path: "/home", view: Gallery}, {
        path: "/ilovedata", view: Affiche
    }, {path: "/content", view: Content}];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route, result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0], result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();
};


window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);


        }
    });

    router();
});


document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.name-input--valid')) {
        document.querySelector('.name-input--valid').addEventListener('click', () => {
            // Selecting the input element and get its value
            let name = document.querySelector(".name-input").value;
            // Displaying the value
            return name;
        })
    }


    let views = gsap.utils.toArray(".view"), scrollTween;

    //SCROLL scale

    const tl = gsap.timeline();

    let animation_duration = "linear";
    let time_duration = 1;

    const items = document.querySelectorAll(".scale-1--dataNumber");

    /////////////////////////////////////////////////////////////////////////

    var cursor = document.querySelector('.cursor');
    var a = document.querySelectorAll('a');
    var input = document.querySelectorAll('input');

    document.addEventListener('mousemove', function (e) {
        var x = e.clientX;
        var y = e.clientY;
        cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
    });

    // document.addEventListener('mousemove', function(e){
    //     var x = e.clientX;
    //     var y = e.clientY;
    //     cursorinner.style.left = x + 'px';
    //     cursorinner.style.top = y + 'px';
    // });
    if (document.getElementById('map')) {
        document.getElementById('map').addEventListener('mouseover', () => {
            cursor.classList.add('zoom');
        });
        document.getElementById('map').addEventListener('mouseleave', () => {
            cursor.classList.remove('zoom');
        });
    }
    if (document.querySelector('.end--illustration')) {
        document.querySelector('.end--illustration').addEventListener('mouseover', () => {
            cursor.classList.add('interogation');
        });
        document.querySelector('.end--illustration').addEventListener('mouseleave', () => {
            cursor.classList.remove('interogation');
        });
    }
    if (document.getElementsByClassName('cursor_hover')[1]) {
        document.getElementsByClassName('cursor_hover')[0].addEventListener('mouseover', () => {
            cursor.classList.add('hover');
        });
        document.getElementsByClassName('cursor_hover')[0].addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    }
    if (document.getElementsByClassName('cursor_hover')[1]) {
        document.getElementsByClassName('cursor_hover')[1].addEventListener('mouseover', () => {
            cursor.classList.add('hover');
        });
        document.getElementsByClassName('cursor_hover')[1].addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    }
    if (document.getElementsByClassName('cursor_hover')[2]) {
        document.getElementsByClassName('cursor_hover')[2].addEventListener('mouseover', () => {
            cursor.classList.add('hover');
        });
        document.getElementsByClassName('cursor_hover')[2].addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    }
    a.forEach(item => {
        item.addEventListener('mouseover', () => {
            cursor.classList.add('hover');
        });
        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    })
    input.forEach(item => {
        item.addEventListener('mouseover', () => {
            cursor.classList.add('hover');
        });
        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    })

    ////////////////////////////////////////////////////////////////


    gsap.from(items, {
        textContent: 0.00, duration: 4, ease: Power1.easeOut, snap: {textContent: 0.01}, stagger: 1, scrollTrigger: {
            // immediateRender: true,
            start: "top bottom", end: "center center", trigger: ".scale-1", // pin: true,
            // duration: time_duration,
            // scrub: true,
            overwrite: true, // id: `scale-${i}`
            delay: 0, // lazy: false,

        }
    });
    if (document.querySelector('.intro')) {
        tl.from('.hero-svg--path', {
            morphSVG: '.before-svg--path', strokeWidth: "1.7", delay: 2, duration: 1, onStart: () => {
                document.querySelector('.hero-subtitle').classList.remove('hide');
                document.querySelector('.hero-scroll').classList.remove('hide');
                document.querySelector('.hero-illustration').classList.remove('hide');
                document.querySelector('.hero-svg--path').classList.toggle('before_syndesi');
                document.querySelector('.hero-svg--path').classList.toggle('after_syndesi');
            }, onEnd: () => {
                document.querySelector('.hero-svg--path').classList.toggle('before_syndesi');
                document.querySelector('.hero-svg--path').classList.toggle('after_syndesi');

            }, // scrollTrigger: {
            //     start: "center center",
            //     end: "bottom top",
            //     trigger: ".before",
            //     scrub: true,
            //     overwrite: true,
            //     delay: 0,
            // }
        });
    }
    tl.to(".scale-1--steak", {
        y: "+=100vh", x: "-20.7vw", scale: 1.1, // scrub: true,
        // overwrite: true,

        // immediateRender: true,
        ease: animation_duration,

        // transformOrigin: "50% 50%",
        scrollTrigger: {
            // immediateRender: true,
            start: "center center", end: "bottom top", trigger: ".scale-1", // pin: true,
            // duration: time_duration,
            scrub: true, overwrite: true, // id: `scale-${i}`
            delay: 0, // lazy: false,

        }
    });
    if (document.querySelector('.name-input--valid')) {
        document.querySelector('.name-input--valid').addEventListener('click', function () {
            document.querySelector('.name-input--valid').classList.add('validated');
            document.querySelector('.name-input').classList.add('validated');
        })
    }
    tl.to(".scale-2--lottie", {
        opacity: 1, inertia: false, overwrite: true, immediateRender: true, ease: animation_duration, // delay:0.5,
        duration: time_duration,

        scrollTrigger: {
            // immediateRender: true,

            start: "top 1", end: "center top", trigger: ".scale-2", // pin: true,
            // duration: time_duration,
            // scrub: true,
            overwrite: true, // id: `scale-${i}`
            // delay: 5,
            onEnter: () => scale1_fadeout(tl, animation_duration, time_duration), // lazy: false,
            // onLeave: () => scale1_fadeout(tl, animation_duration, time_duration),
        }
    });
    tl.to(".dezoom-lottie", {
        opacity: 1, inertia: false, overwrite: true, immediateRender: true, ease: animation_duration, // delay:0.5,
        duration: time_duration, onComplete: () => LottieBrain(), onStart: () => {
            if (document.querySelector(".scale-4--ter---MapContainer")) {
                document.querySelector('.scale-4--ter---MapContainer').style.scale = 0;
                document.querySelector('.scale-4--ter---MapContainer').style.transform = "translate(-50%,-50vh)";
            }
        },


        scrollTrigger: {
            // immediateRender: true,

            start: "top bottom", end: "center center", trigger: ".dezoom", // pin: true,
            // duration: time_duration,
            // scrub: true,
            overwrite: true,// id: `scale-${i}`
            // delay: 5,
            // lazy: false,
            // onLeave: () => scale1_fadeout(tl, animation_duration, time_duration),
        }
    });

    function scale1_fadeout(tl, animation_duration, time_duration) {
        tl.to(".scale-1--steak", {
            // onStart: () => scale2_fadein(tl, animation_duration, time_duration),
            opacity: 0,
            inertia: false,
            overwrite: true,
            immediateRender: true,
            delay: time_duration,
            ease: animation_duration,
            onComplete: () => LottiePlay_phase1(),
        })
    };

    function LottiePlay_phase1() {
        if (document.querySelector(".scale-2--lottie")) {
            let lottie = document.querySelector(".scale-2--lottie");
            lottie.play();
            lottie.addEventListener("frame", (evt) => {

                if (evt.detail.frame > 190) {
                    if (evt.detail.frame < 195) {
                        lottie.pause();
                    }
                }

            });
        }
    }

    function LottieBrain() {
        if (document.querySelector(".dezoom-lottie")) {
            let LottieBrain = document.querySelector(".dezoom-lottie");
            LottieBrain.play();
            console.log("played");
            LottieBrain.addEventListener("frame", (evt) => {
                console.log(evt);
                if (evt.detail.frame >= 100) {
                    console.log("paused");
                    document.querySelector('.dezoom-quinquies--illustration---brain').style.opacity = 1;
                    document.querySelector('.dezoom-lottie').style.opacity = 0;


                }

            });
            console.log(LottieBrain);
        }
    }

    tl.to(".scale-2--lottie", {
        y: "+=100vh", scrub: true, // overwrite: true,

        // immediateRender: true,
        ease: animation_duration, onUpdate: () => LottiePlay_phase2(), onComplete: () => LottieGsap_phase3(), // transformOrigin: "50% 50%",
        scrollTrigger: {
            // immediateRender: true,
            start: "center center", end: "bottom top", trigger: ".scale-2", // pin: true,
            // duration: time_duration,
            scrub: true, overwrite: true, // id: `scale-${i}`
            delay: 0, // lazy: false,

        }
    });
    gsap.to(".scale-2--data---left", {
        opacity: 1, duration: 2, delay: 1, ease: Power1.linear, stagger: 1, scrollTrigger: {
            // immediateRender: true,
            start: "top bottom", end: "center center", trigger: ".scale-2", // pin: true,
            // duration: time_duration,
            // scrub: true,
            overwrite: true, // id: `scale-${i}`
            delay: 0, // lazy: false,

        }
    });

    gsap.to(".scale-2--data---left", {
        opacity: 0, duration: 2, delay: 0,

        ease: Power1.linear,

        stagger: 1, scrollTrigger: {
            // immediateRender: true,
            start: "top bottom", end: "center center", trigger: ".scale-2--bis", // pin: true,
            // duration: time_duration,
            // scrub: true,
            overwrite: true, // id: `scale-${i}`
            delay: 0, // lazy: false,

        }
    });
    gsap.to(".scale-2--data---right", {
        opacity: 1, delay: 1, duration: 2, ease: Power1.linear, stagger: 1, scrollTrigger: {
            // immediateRender: true,
            start: "top bottom", end: "center center", trigger: ".scale-2", // pin: true,
            // duration: time_duration,
            // scrub: true,
            overwrite: true, // id: `scale-${i}`
            delay: 0, // lazy: false,

        }
    });
    gsap.to(".scale-2--data---right", {
        opacity: 0, duration: 2, delay: 0,

        ease: Power1.linear,

        stagger: 1, scrollTrigger: {
            // immediateRender: true,
            start: "top bottom", end: "center center", trigger: ".scale-2--bis", // pin: true,
            // duration: time_duration,
            // scrub: true,
            overwrite: true, // id: `scale-${i}`
            delay: 0, // lazy: false,

        }
    });
    gsap.to(".scale-2--bis---data---left", {
        opacity: 1, duration: 2, delay: 1, ease: Power1.linear, stagger: 1, scrollTrigger: {
            // immediateRender: true,
            start: "top bottom", end: "center center", trigger: ".scale-2--bis", // pin: true,
            // duration: time_duration,
            // scrub: true,
            overwrite: true, // id: `scale-${i}`
            delay: 0, // lazy: false,

        }
    });
    gsap.to(".scale-2--bis---data---left", {
        opacity: 0, duration: 2, delay: 0,

        ease: Power1.linear,

        stagger: 1, scrollTrigger: {
            // immediateRender: true,
            start: "top bottom", end: "center center", trigger: ".scale-2--ter", // pin: true,
            // duration: time_duration,
            // scrub: true,
            overwrite: true, // id: `scale-${i}`
            delay: 0, // lazy: false,

        }
    });
    gsap.to(".scale-2--bis---data---right", {
        opacity: 1, delay: 1, duration: 2, ease: Power1.linear, stagger: 1, scrollTrigger: {
            // immediateRender: true,
            start: "top bottom", end: "center center", trigger: ".scale-2--bis", // pin: true,
            // duration: time_duration,
            // scrub: true,
            overwrite: true, // id: `scale-${i}`
            delay: 0, // lazy: false,

        }
    });
    gsap.to(".scale-2--bis---data---right", {
        opacity: 0, duration: 2, delay: 0,

        ease: Power1.linear,

        stagger: 1, scrollTrigger: {
            // immediateRender: true,
            start: "top bottom", end: "center center", trigger: ".scale-2--ter", // pin: true,
            // duration: time_duration,
            // scrub: true,
            overwrite: true, // id: `scale-${i}`
            delay: 0, // lazy: false,

        }
    });

    gsap.to(".scale-2--ter---data---left", {
        opacity: 1, duration: 2, delay: 1, ease: Power1.linear, stagger: 1, scrollTrigger: {
            // immediateRender: true,
            start: "top bottom", end: "center center", trigger: ".scale-2--ter", // pin: true,
            // duration: time_duration,
            // scrub: true,
            overwrite: true, // id: `scale-${i}`
            delay: 0, // lazy: false,

        }
    });
    gsap.to(".scale-2--ter---data---right", {
        opacity: 1, delay: 1, duration: 2, ease: Power1.linear, stagger: 1, scrollTrigger: {
            // immediateRender: true,
            start: "top bottom", end: "center center", trigger: ".scale-2--ter", // pin: true,
            // duration: time_duration,
            // scrub: true,
            overwrite: true, // id: `scale-${i}`
            delay: 0, // lazy: false,

        }
    });
    // tl.to(".scale-2--data---left", {
    //     opacity: "1",
    //     scrub: true,
    //     // overwrite: true,
    //
    //     // immediateRender: true,
    //     ease: animation_duration,
    //
    //     // transformOrigin: "50% 50%",
    //     scrollTrigger: {
    //         // immediateRender: true,
    //         start: "center center",
    //         end: "bottom top",
    //         trigger: ".scale-2",
    //         // pin: true,
    //         // duration: time_duration,
    //         scrub: true,
    //         overwrite: true,
    //         // id: `scale-${i}`
    //         delay: 0,
    //         // lazy: false,
    //
    //     }
    // });


    function LottiePlay_phase2() {
        if (document.querySelector(".scale-2--lottie")) {

            let lottie = document.querySelector(".scale-2--lottie");
            lottie.play();
            lottie.addEventListener("frame", (evt) => {

                if (evt.detail.frame > 340) {
                    if (evt.detail.frame < 345) {
                        lottie.pause();
                    }
                }

            });
        }
    }

    function LottieGsap_phase3() {
        tl.fromTo(".scale-2--lottie", {
            y: "100vh", scrub: true, ease: animation_duration,
        }, {
            y: "+=100vh", scrub: true, ease: animation_duration, onUpdate: () => LottiePlay_phase3(), scrollTrigger: {
                start: "center center",
                end: "bottom top",
                trigger: ".scale-2--bis",
                scrub: true,
                overwrite: true,
                delay: 0,
            }
        });
    }

    function LottiePlay_phase3() {
        if (document.querySelector(".scale-2--lottie")) {

            let lottie = document.querySelector(".scale-2--lottie");
            lottie.play();
            lottie.addEventListener("frame", (evt) => {
                if (evt.detail.frame > 598) {
                    lottie.pause();
                    if (lottie.getLottie().isPaused == true) {
                        scale3_fadeIn();
                    }
                }
            });
        }
    }

    tl.to(".scale-2--lottie", {
        opacity: 0, inertia: false, duration: time_duration, ease: animation_duration, scrollTrigger: {
            start: "top bottom", end: "center center", trigger: ".dezoom", scrub: true, overwrite: true, delay: 0,
        },
    });

    function scale3_fadeIn() {
        tl.to(".scale-3--images", {
            opacity: 1,
            overwrite: true,
            duration: time_duration,
            ease: animation_duration,
            onComplete: () => Scale3_rmvClass(),

        })
    };

    function Scale3_rmvClass() {
        if (document.querySelector(".scale-3--images")) {

            document.querySelector(".scale-3--images").classList.remove('hidden');
            Scale3_Transition();
        }
    }

    function Scale3_Transition() {
        tl.from(".scale-3--images", {
            y: "-100vh",
            x: "-20.7vw",
            scale: 1.1,
            scrub: true,
            ease: animation_duration,
            onComplete: () => steak_explosion(),

            scrollTrigger: {
                start: "top bottom", end: "center center", trigger: ".scale-3", scrub: true, overwrite: true, delay: 0,
            }
        });
    }

    function steak_explosion() {
        if (document.querySelector(".scale-3")) {
            document.querySelector(".scale-3--agriculture").classList.add('active');
            document.querySelector(".scale-3--consommation").classList.add('active');
            document.querySelector(".scale-3--embalage").classList.add('active');
            document.querySelector(".scale-3--supermarche").classList.add('active');
            document.querySelector(".scale-3--transformation").classList.add('active');
            document.querySelector(".scale-3--transport").classList.add('active');
            document.querySelector(".scale-3--outline").classList.add('active');
        }
    }

    tl.to('.scale-3--agricultureImage---path', {
        morphSVG: '.scale-4--illustration---path', // y: '-=100vh',
        onStart: () => scrolldown_scale4(), onComplete: () => scale3_fadeOut(), scrollTrigger: {
            start: "center center",
            end: "bottom top",
            trigger: ".scale-3",
            pin: ".scale-3--agricultureImage---svg",
            scrub: true,
            overwrite: true,
            delay: 0,
        }
    });

    function scrolldown_scale4() {
        if (document.querySelector('.scale-3--agricultureImage')) {
            document.querySelector('.scale-3--agricultureImage').classList.add('active');
        }
    };


    function scale4_fadeIn() {
        tl.to('.scale-4--category---agriculture', {
            opacity: 1, delay: 0, duration: 1, onStart: () => scale4_fadeinIllustration(),

        });

    }

    function scale3_fadeOut() {
        if (document.querySelector('.scale-3--agricultureImage---path')) {

            document.querySelector('.scale-3--agricultureImage---path').classList.add('hide');
            scale4_fadeIn();
        }

    }

    function scale4_fadeinIllustration() {
        tl.to('.scale-4--illustration', {
            opacity: 1, delay: 0,

            duration: 0.5, onStart: () => scale4_fadeinText(),
        });
    }

    function scale4_fadeinText() {
        if (document.querySelector('.scale-4--container')) {

            document.querySelector(".scale-4--category---urbaine").classList.add('active');
            document.querySelector(".scale-4--category---miniere").classList.add('active');
            document.querySelector(".scale-4--category---infrastructure").classList.add('active');
            document.querySelector(".scale-4--category---agriculture").classList.add('active');
        }
        tl.to('.scale-4--description', {
            onStart: () => scale4_fadeinNumber(), opacity: 1, delay: 1.5, duration: 0.5,
        });
    }

    function scale4_fadeinNumber() {
        tl.to('.scale-4--Number', {
            opacity: 1, // delay:1.5,
            duration: 0.5,
        });
    }

    function scale4_fadeoutNumber() {
        tl.to('.scale-4--Number', {
            opacity: 0, // delay:1.5,
            duration: 0.5,
        });
    }

    tl.to('.scale-4--container', {

        y: '+=200vh', scale: 0.5,

        ease: animation_duration, onStart: () => scale4_fadeout(),

        scrollTrigger: {
            start: "center center",

            trigger: ".scale-4", endTrigger: ".scale-4--bis", end: "bottom top", scrub: true, overwrite: true, delay: 0,
        }
    });
    tl.fromTo('.scale-4--bis---left', {

        x: '-=10vw', ease: animation_duration,

        scrollTrigger: {
            start: "center center", end: "bottom top", trigger: ".scale-4", scrub: true, overwrite: true, delay: 0,
        }
    }, {

        x: '+=15vw', scale: 1.5, ease: animation_duration,

        scrollTrigger: {
            start: "center center", end: "bottom top", trigger: ".scale-4", scrub: true, overwrite: true, delay: 0,
        }
    });
    tl.fromTo('.scale-4--bis---right', {

        x: '+=100vw', ease: animation_duration,

        scrollTrigger: {
            start: "center center", end: "bottom top", trigger: ".scale-4", scrub: true, overwrite: true, delay: 0,
        }
    }, {

        x: '-=60vw', scale: 1.5, ease: animation_duration, onComplete: () => smokeAppear(), scrollTrigger: {
            start: "center center", end: "bottom top", trigger: ".scale-4", scrub: true, overwrite: true, delay: 0,
        }
    });
    tl.to('.scale-4--bis', {

        y: '+=100vh', scale: 0.75, ease: animation_duration, scrollTrigger: {
            start: "center center", trigger: ".scale-4--bis", end: "bottom top", scrub: true, overwrite: true, delay: 0,
        }
    });


    tl.fromTo('.scale-4--ter---left', {

        x: '-=100vw', ease: animation_duration,

        scrollTrigger: {
            start: "center center", end: "bottom top", trigger: ".scale-4--bis", scrub: true, overwrite: true, delay: 0,
        }
    }, {

        x: '+=100vw', ease: animation_duration,

        scrollTrigger: {
            start: "center center", end: "bottom top", trigger: ".scale-4--bis", scrub: true, overwrite: true, delay: 0,
        }
    });
    tl.fromTo('.scale-4--ter---right', {

        x: '+=100vw', ease: animation_duration,

        scrollTrigger: {
            start: "center center", end: "bottom top", trigger: ".scale-4--bis", scrub: true, overwrite: true, delay: 0,
        }
    }, {

        x: '-=150vw', ease: animation_duration, onComplete: () => treeBackward(), scrollTrigger: {
            start: "center center", end: "bottom top", trigger: ".scale-4--bis", scrub: true, overwrite: true, delay: 0,
        }
    });

    function scale4_fadeout() {
        if (document.querySelector(".scale-4")) {
            document.querySelector(".scale-4--category---urbaine").classList.remove('active');
            document.querySelector(".scale-4--category---miniere").classList.remove('active');
            document.querySelector(".scale-4--category---infrastructure").classList.remove('active');
            document.querySelector(".scale-4--category---agriculture").classList.remove('active');
            tl.to('.scale-4--description', {
                onStart: () => scale4_fadeoutNumber(), opacity: 0, // delay:1.5,

                duration: 0.5,
            });
            document.querySelector(".scale-4--container").classList.add('active');
        }
        // document.querySelector('.scale-4--illustration---first').classList.add('removeBg');
        // document.querySelector('.scale-4--illustration---first').classList.add('removeBg');
        // document.querySelector('.scale-4--illustration---first').classList.add('removeBg');

    };

    function smokeAppear() {
        if (document.querySelector(".scale-4--bis---cloud")) {
            document.querySelector(".scale-4--bis---cloud").classList.remove('hidden');
        }
    }

    function treeBackward() {
        if (document.querySelector(".scale-4--ter")) {
            document.querySelector(".scale-4--ter---left").classList.add('backward');
            document.querySelector(".scale-4--ter---right").classList.add('backward');
            document.querySelector(".scale-4--bis").classList.add('hide');
            document.querySelector(".scale-4").classList.add('hide');
            document.querySelector(".scale-4--ter---MapContainer").classList.remove('hide');
            setTimeout(() => {
                document.querySelector(".scale-4--ter---left").classList.add('remove');
                document.querySelector(".scale-4--ter---right").classList.add('remove');
            }, 5000);
        }

    }

    addEventListener("click", (e) => {
        if (jQuery(e.target).hasClass("scale-4--ter---legendCategory----item-----First")) {
            // document.getElementsByClassName("scale-4--ter---legendCategory----item-----First")[0].classList.remove('active');
            document.getElementsByClassName("scale-4--ter---legendCategory----item-----Second")[0].classList.remove('active');
            if (!jQuery('.scale-4--ter---legendCategory----item-----First').hasClass("active")) {
                (e.target).classList.toggle('active');
            }
        }
        if (jQuery(e.target).hasClass("scale-4--ter---legendCategory----item-----Second")) {
            document.getElementsByClassName("scale-4--ter---legendCategory----item-----First")[0].classList.remove('active');
            if (!jQuery('.scale-4--ter---legendCategory----item-----Second').hasClass("active")) {
                (e.target).classList.toggle('active');
            }
        }
    })


    tl.to(".scale-4--ter---MapContainer", {
        // y: "+=90vh",
        // x: "-=10vw",
        // scale: 0.5,
        // opacity: 0,
        onStart: () => mapfadeout(), scrub: true, inertia: false, ease: animation_duration, scrollTrigger: {
            inertia: false,
            start: "center center",
            end: "bottom top",
            trigger: ".scale-4--ter",
            scrub: true,
            overwrite: true,
            delay: 0,
        }
    });

    function mapfadeout() {
        if (document.querySelector(".scale-4--ter---MapContainer")) {
            document.querySelector(".scale-4--ter---MapContainer").classList.add('hide');
        }
    }

    tl.from(".dezoom-quinquies--illustration---brain", {
        y: "-=380vh", scale: 7, delay: 0.1, scrub: true, inertia: false, ease: animation_duration, scrollTrigger: {
            inertia: false,
            start: "center center",
            end: "center center",
            trigger: ".dezoom",
            endTrigger: '.dezoom-quinquies',
            scrub: true,
            overwrite: true,
            delay: 0,
        }
    });


    tl.to('.solutionFirst--illustration---container', {
        morphSVG: '.solutionFirst--illustration---bottle', onComplete: () => carbon(), duration: 1, scrollTrigger: {
            // inertia: false,
            start: "top center", end: "center center", trigger: ".solutionFirst", scrub: true, // overwrite: true,
            delay: 0,
        }
    });

    function carbon() {
        tl.to('.solutionFirst--illustration---container', {
            morphSVG: '.solutionFirst--illustration---carbon', onComplete: () => apple(), delay: 1, duration: 1
        });
    }

    function apple() {
        tl.to('.solutionFirst--illustration---container', {
            morphSVG: '.solutionFirst--illustration---apple', onComplete: () => impact(), delay: 1, duration: 1
        });
    }

    function impact() {
        tl.to('.solutionFirst--illustration---container', {
            morphSVG: '.solutionFirst--illustration---impact', onComplete: () => bottle(), delay: 1, duration: 1
        });
    }

    function bottle() {
        tl.to('.solutionFirst--illustration---container', {
            morphSVG: '.solutionFirst--illustration---bottle', onComplete: () => transport(), delay: 1, duration: 1
        });
    }

    function transport() {
        tl.to('.solutionFirst--illustration---container', {
            morphSVG: '.solutionFirst--illustration---transport', onComplete: () => carbon(), delay: 1, duration: 1
        });
    }

    gsap.from('.solutionSecond--illustration--data', {
        textContent: 0, duration: 4, ease: Power1.easeIn, snap: {textContent: 1}, stagger: 1, delay: 1, scrollTrigger: {
            start: "top bottom", end: "center center", trigger: ".solutionSecond", overwrite: true,

        }
    });

// just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):

//SCROLL scale END


//SCROLL SNAP

    function goToSection(i) {
        scrollTween = gsap.to(window, {
            scrollTo: {y: i * innerHeight, autoKill: false},
            delay: 0,
            duration: time_duration,
            onComplete: () => scrollTween = null,
            ease: animation_duration,
        });
    }


    views.forEach((view, i) => {
        ScrollTrigger.create({
            trigger: view, onEnter: () => goToSection(i)
        });

        ScrollTrigger.create({
            trigger: view, start: "bottom bottom", onEnterBack: () => goToSection(i),

        });
    });

// just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):
    ScrollTrigger.create({
        start: 0,
        end: "max",
        inertia: false,
        ease: animation_duration,
        duration: time_duration,
        onUpdate: (ScrollTrigger) => progressBar(ScrollTrigger.progress, views.length),
        overwrite: true,
        scrub: false,
        snap: 1 / (views.length - 1),
        fastScrollEnd: true,
        lazy: false,
    });
//SCROLL SNAP END
    if (document.querySelector('.content')) {
        document.querySelector('.overlay').style.display = "block";
        gsap.timeline().to(".info-name", {duration: 1.5, text: "comprendre l’impact"});
    }
    if (document.querySelector('.gallery')) {
        document.querySelector('.overlay').style.display = "block";
        gsap.timeline().to(".info-name", {duration: 1.5, text: "Quotidien de Valentin"});
    }
    if (document.querySelector('.intro')) {
        document.querySelector('.overlay').style.display = "none";
    }
    if (document.querySelector('.legal')) {
        document.querySelector('.overlay').style.display = "none";
    }
    if (document.querySelector('.victory')) {
        document.querySelector('.overlay').style.display = "none";
    }
    if (document.querySelector('.sources')) {
        document.querySelector('.overlay').style.display = "none";
    }
    if (document.querySelector('.endFrame')) {
        document.querySelector('.overlay').style.display = "none";
    }

    function progressBar(progress, viewsCount) {
        let views = progress * (viewsCount - 2) + 1;
        let timeL = gsap.timeline();
        document.getElementsByClassName('progressBar-bg')[0].style.height = progress * 100 + '%';
        if (viewsCount == 1) {
            document.getElementsByClassName('progressBar-bg')[0].style.height = 100 + '%';
        }
        if (document.querySelector('.content')) {
            switch (true) {
                case views < 0 :
                    timeL.to(".info-name", {duration: 1, text: "comprendre l’impact"});
                    timeL.to(".info-name--sub", {duration: 1, text: "de la consommation de viande"});
                    // document.getElementsByClassName('info-localisation')[0].innerHTML = 'Quotidien de iel';
                    break
                case views < 1 :
                    timeL.to(".info-name", {duration: 1, text: "comprendre l’impact"});
                    timeL.to(".info-name--sub", {duration: 1, text: "de la consommation de viande"});
                    // document.getElementsByClassName('info-localisation')[0].innerHTML = 'Quotidien de iel';
                    break
                case views < 2 :
                    timeL.to(".info-name", {duration: 1, text: "impact carbone"});
                    timeL.to(".info-name--sub", {duration: 1, text: "d’un steak de 100g"});

                    // document.getElementsByClassName('info-localisation')[0].innerHTML = 'Quotidien de iel';
                    break
                case views < 3 :
                    timeL.to(".info-name", {duration: 1, text: "MISE EN comparaison"});
                    timeL.to(".info-name--sub", {duration: 1, text: "des impacts carbones"});

                    // document.getElementsByClassName('info-localisation')[0].innerHTML = 'Quotidien de iel';
                    break
                case views < 4 :
                    timeL.to(".info-name", {duration: 1, text: "MISE EN comparaison"});
                    timeL.to(".info-name--sub", {duration: 1, text: "des impacts carbones"});

                    // document.getElementsByClassName('info-localisation')[0].innerHTML = 'Quotidien de iel';
                    break
                case views < 5 :
                    timeL.to(".info-name", {duration: 1, text: "MISE EN comparaison"});
                    timeL.to(".info-name--sub", {duration: 1, text: "des impacts carbones"});

                    // document.getElementsByClassName('info-localisation')[0].innerHTML = 'Quotidien de iel';
                    break
                case views < 6 :
                    timeL.to(".info-name", {duration: 1, text: "causes responsables"});
                    timeL.to(".info-name--sub", {duration: 1, text: "de l’impact carbone d’un steak"});

                    // document.getElementsByClassName('info-localisation')[0].innerHTML = 'Quotidien de iel';
                    break
                case views < 7 :
                    timeL.to(".info-name", {duration: 1, text: "causes responsables"});
                    timeL.to(".info-name--sub", {duration: 1, text: "de la déforestation"});

                    // document.getElementsByClassName('info-localisation')[0].innerHTML = 'Quotidien de iel';
                    break
                case views < 8 :
                    timeL.to(".info-name", {duration: 1, text: "impact carbone"});
                    timeL.to(".info-name--sub", {duration: 1, text: "de la déforestation"});

                    // document.getElementsByClassName('info-localisation')[0].innerHTML = 'Quotidien de iel';
                    break
                case views < 9 :
                    timeL.to(".info-name", {duration: 1, text: "carte présentant"});
                    timeL.to(".info-name--sub", {duration: 1, text: "les émissions de CO2"});

                    // document.getElementsByClassName('info-localisation')[0].innerHTML = 'Quotidien de iel';
                    break
                case views < 10 :
                    timeL.to(".info-name", {duration: 1, text: "prendre DE LA hauteur"});
                    timeL.to(".info-name--sub", {duration: 1, text: "sur son engagement"});

                    // document.getElementsByClassName('info-localisation')[0].innerHTML = 'Quotidien de iel';
                    break
                case views < 11 :
                    timeL.to(".info-name", {duration: 1, text: "prendre DE LA hauteur"});
                    timeL.to(".info-name--sub", {duration: 1, text: "sur son engagement"});

                    // document.getElementsByClassName('info-name')[0].innerHTML = 'Quotidien de iel';
                    break
                case views < 12 :
                    timeL.to(".info-name", {duration: 1, text: "prendre DE LA hauteur"});
                    timeL.to(".info-name--sub", {duration: 1, text: "sur son engagement"});

                    // document.getElementsByClassName('info-name')[0].innerHTML = 'Quotidien de iel';
                    break
                case views < 13 :
                    timeL.to(".info-name", {duration: 1, text: "prendre DE LA hauteur"});
                    timeL.to(".info-name--sub", {duration: 1, text: "sur son engagement"});

                    // document.getElementsByClassName('info-name')[0].innerHTML = 'Quotidien de iel';
                    break
                case views < 14 :
                    timeL.to(".info-name", {duration: 1, text: "ADAPTER SON QUOTIDIEN"});
                    timeL.to(".info-name--sub", {duration: 1, text: "grâce à Syndesi"});

                    // document.getElementsByClassName('info-name')[0].innerHTML = 'Quotidien de iel';
                    break
                case views < 15 :
                    timeL.to(".info-name", {duration: 1, text: "DATAGIR, LA SOLUTION"});
                    timeL.to(".info-name--sub", {duration: 1, text: "pour réduire ton impact"});

                    // document.getElementsByClassName('info-name')[0].innerHTML = 'Quotidien de iel';
                    break
                case views < 16 :
                    timeL.to(".info-name", {duration: 1, text: "Ecosia, la solution"});
                    timeL.to(".info-name--sub", {duration: 1, text: "pour contrer la déforestation"});

                    // document.getElementsByClassName('info-name')[0].innerHTML = 'Quotidien de iel';
                    break
                case views < 17 :
                    timeL.to(".info-name", {duration: 1, text: "le mot de la fin"});
                    timeL.to(".info-name--sub", {duration: 1, text: "ou pas..."});

                    // document.getElementsByClassName('info-name')[0].innerHTML = 'Quotidien de iel';
                    break
            }
        } else if (document.getElementsByClassName('gallery') != null) {
            document.getElementsByClassName('info-name')[0].innerHTML = 'gallerie synapse';

        }
    }

// Ecosia picto

    if (document.getElementsByClassName("steak-text")[0]) {
        document.getElementsByClassName("steak-text")[0].addEventListener("mouseover", (e) => {

            if (e.target.classList.contains("__galleryItem")) {
                e.target.parentElement.getElementsByTagName('svg')[0].style.opacity = '1';
            }
        });
        document.getElementsByClassName("steak-text")[0].addEventListener("mouseout", (e) => {

            if (e.target.classList.contains("__galleryItem")) {
                e.target.parentElement.getElementsByTagName('svg')[0].style.opacity = '0.5';
            }
        })
    }
})