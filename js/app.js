// mouse enter body

var body     = document.querySelector("#body");
var puntero  = document.querySelector(".puntero");

body.addEventListener("mousemove", (e) => {
    puntero.style.top = (e.pageY - 65) + "px";
    puntero.style.left = (e.pageX - 65) + "px";
})

body.addEventListener("mouseenter", () => {
    puntero.style.transform = "scale(1)";
})

body.addEventListener("mouseleave", () => {
    puntero.style.transform = "scale(0)";
})

// sec menu

var iconMn      = document.querySelector(".iconMn");
var iconX       = document.querySelector("#iconX");
var secMn       = document.querySelector(".sec__mn");
var secMnBgAnm  = document.querySelector(".sec__mn__bg__anm");

iconMn.addEventListener("click", () => {
    secMn.style.right = "0%";
    secMnBgAnm.style.left = "-100%";
})

iconX.addEventListener("click", () => {
    secMn.style.right = "-40%";
    secMnBgAnm.style.left = "-0%";
})


// mouse enter btn

var btnEnter1 = document.querySelector("#btnEnter-1");
var btnEnter2 = document.querySelector("#btnEnter-2");
var btnEnter3 = document.querySelector("#btnEnter-3");
var btnEnter4 = document.querySelector("#btnEnter-4");

// sec 2 header
var btnEnter5 = document.querySelector("#btnEnter-5");
var btnEnter6 = document.querySelector("#btnEnter-6");
var btnEnter7 = document.querySelector("#btnEnter-7");
var btnEnter8 = document.querySelector("#btnEnter-8");
var btnEnter9 = document.querySelector("#btnEnter-9");
var btnEnter10 = document.querySelector("#btnEnter-10");
var btnEnter11 = document.querySelector("#btnEnter-11");
var btnEnter12 = document.querySelector("#btnEnter-12");
var btnEnter13 = document.querySelector("#btnEnter-13");
var btnEnter14 = document.querySelector("#btnEnter-14");
var btnEnter15 = document.querySelector("#btnEnter-15");
var btnEnter16 = document.querySelector("#btnEnter-16");

// sec 2 slider rigth
var btnEnter17 = document.querySelector("#btnEnter-17");
var btnEnter18 = document.querySelector("#btnEnter-18");
var btnEnter19 = document.querySelector("#btnEnter-19");
var btnEnter20 = document.querySelector("#btnEnter-20");
var btnEnter21 = document.querySelector("#btnEnter-21");
var btnEnter22 = document.querySelector("#btnEnter-22");
var btnEnter23 = document.querySelector("#btnEnter-23");
var btnEnter24 = document.querySelector("#btnEnter-24");
var btnEnter25 = document.querySelector("#btnEnter-25");
var btnEnter26 = document.querySelector("#btnEnter-26");
var btnEnter27 = document.querySelector("#btnEnter-27");
var btnEnter28 = document.querySelector("#btnEnter-28");

// sec 3slider manual
var btnEnter29 = document.querySelector(".btnEnter-29");
var btnEnter30 = document.querySelector(".btnEnter-30");

// sec formulario
var btnEnter31 = document.querySelector("#btnEnter-31");
var btnEnter32 = document.querySelector("#btnEnter-32");
var btnEnter33 = document.querySelector("#btnEnter-33");
var btnEnter34 = document.querySelector("#btnEnter-34");

// footer
var btnEnter35 = document.querySelector("#btnEnter-35");
var btnEnter36 = document.querySelector("#btnEnter-36");
var btnEnter37 = document.querySelector("#btnEnter-37");
var btnEnter38 = document.querySelector("#btnEnter-38");
var btnEnter39 = document.querySelector("#btnEnter-3");
var btnEnter40 = document.querySelector("#btnEnter-40");
var btnEnter41 = document.querySelector("#btnEnter-41");
var btnEnter42 = document.querySelector("#btnEnter-42");
var btnEnter43 = document.querySelector("#btnEnter-43");
var btnEnter44 = document.querySelector("#btnEnter-44");
var btnEnter45 = document.querySelector("#btnEnter-45");

function punteroEnter () {
    puntero.style.transform = "scale(1.4)";
    puntero.style.backgroundSize = "0%";
}

function punteroLeave () {
    puntero.style.transform = "scale(1)";
    puntero.style.backgroundSize = "40%";
}

btnEnter1.addEventListener("mouseenter", punteroEnter);
btnEnter1.addEventListener("mouseleave", punteroLeave);
btnEnter2.addEventListener("mouseenter", punteroEnter);
btnEnter2.addEventListener("mouseleave", punteroLeave);
btnEnter3.addEventListener("mouseenter", punteroEnter);
btnEnter3.addEventListener("mouseleave", punteroLeave);
btnEnter4.addEventListener("mouseenter", punteroEnter);
btnEnter4.addEventListener("mouseleave", punteroLeave);

// btn sec 2 header
btnEnter5.addEventListener("mouseenter", punteroEnter);
btnEnter5.addEventListener("mouseleave", punteroLeave);
btnEnter6.addEventListener("mouseenter", punteroEnter);
btnEnter6.addEventListener("mouseleave", punteroLeave);
btnEnter7.addEventListener("mouseenter", punteroEnter);
btnEnter7.addEventListener("mouseleave", punteroLeave);
btnEnter8.addEventListener("mouseenter", punteroEnter);
btnEnter8.addEventListener("mouseleave", punteroLeave);
btnEnter9.addEventListener("mouseenter", punteroEnter);
btnEnter9.addEventListener("mouseleave", punteroLeave);
btnEnter10.addEventListener("mouseenter", punteroEnter);
btnEnter10.addEventListener("mouseleave", punteroLeave);
btnEnter11.addEventListener("mouseenter", punteroEnter);
btnEnter11.addEventListener("mouseleave", punteroLeave);
btnEnter12.addEventListener("mouseenter", punteroEnter);
btnEnter12.addEventListener("mouseleave", punteroLeave);
btnEnter13.addEventListener("mouseenter", punteroEnter);
btnEnter13.addEventListener("mouseleave", punteroLeave);
btnEnter14.addEventListener("mouseenter", punteroEnter);
btnEnter14.addEventListener("mouseleave", punteroLeave);
btnEnter15.addEventListener("mouseenter", punteroEnter);
btnEnter15.addEventListener("mouseleave", punteroLeave);
btnEnter16.addEventListener("mouseenter", punteroEnter);
btnEnter16.addEventListener("mouseleave", punteroLeave);

// sec 2 slider rigth
btnEnter17.addEventListener("mouseenter", punteroEnter);
btnEnter17.addEventListener("mouseleave", punteroLeave);
btnEnter18.addEventListener("mouseenter", punteroEnter);
btnEnter18.addEventListener("mouseleave", punteroLeave);
btnEnter19.addEventListener("mouseenter", punteroEnter);
btnEnter19.addEventListener("mouseleave", punteroLeave);
btnEnter20.addEventListener("mouseenter", punteroEnter);
btnEnter20.addEventListener("mouseleave", punteroLeave);
btnEnter21.addEventListener("mouseenter", punteroEnter);
btnEnter21.addEventListener("mouseleave", punteroLeave);
btnEnter22.addEventListener("mouseenter", punteroEnter);
btnEnter22.addEventListener("mouseleave", punteroLeave);
btnEnter23.addEventListener("mouseenter", punteroEnter);
btnEnter23.addEventListener("mouseleave", punteroLeave);
btnEnter24.addEventListener("mouseenter", punteroEnter);
btnEnter24.addEventListener("mouseleave", punteroLeave);
btnEnter25.addEventListener("mouseenter", punteroEnter);
btnEnter25.addEventListener("mouseleave", punteroLeave);
btnEnter26.addEventListener("mouseenter", punteroEnter);
btnEnter26.addEventListener("mouseleave", punteroLeave);
btnEnter27.addEventListener("mouseenter", punteroEnter);
btnEnter27.addEventListener("mouseleave", punteroLeave);
btnEnter28.addEventListener("mouseenter", punteroEnter);
btnEnter28.addEventListener("mouseleave", punteroLeave);

// sec 3 slider manual
btnEnter29.addEventListener("mouseenter", punteroEnter);
btnEnter29.addEventListener("mouseleave", punteroLeave);
btnEnter30.addEventListener("mouseenter", punteroEnter);
btnEnter30.addEventListener("mouseleave", punteroLeave);

// sec formulario
btnEnter31.addEventListener("mouseenter", punteroEnter);
btnEnter31.addEventListener("mouseleave", punteroLeave);
btnEnter32.addEventListener("mouseenter", punteroEnter);
btnEnter32.addEventListener("mouseleave", punteroLeave);
btnEnter33.addEventListener("mouseenter", punteroEnter);
btnEnter33.addEventListener("mouseleave", punteroLeave);
btnEnter34.addEventListener("mouseenter", punteroEnter);
btnEnter34.addEventListener("mouseleave", punteroLeave);

// footer
btnEnter35.addEventListener("mouseenter", punteroEnter);
btnEnter35.addEventListener("mouseleave", punteroLeave);
btnEnter36.addEventListener("mouseenter", punteroEnter);
btnEnter36.addEventListener("mouseleave", punteroLeave);
btnEnter37.addEventListener("mouseenter", punteroEnter);
btnEnter37.addEventListener("mouseleave", punteroLeave);
btnEnter38.addEventListener("mouseenter", punteroEnter);
btnEnter38.addEventListener("mouseleave", punteroLeave);
btnEnter39.addEventListener("mouseenter", punteroEnter);
btnEnter39.addEventListener("mouseleave", punteroLeave);
btnEnter40.addEventListener("mouseenter", punteroEnter);
btnEnter40.addEventListener("mouseleave", punteroLeave);
btnEnter41.addEventListener("mouseenter", punteroEnter);
btnEnter41.addEventListener("mouseleave", punteroLeave);
btnEnter42.addEventListener("mouseenter", punteroEnter);
btnEnter42.addEventListener("mouseleave", punteroLeave);
btnEnter43.addEventListener("mouseenter", punteroEnter);
btnEnter43.addEventListener("mouseleave", punteroLeave);
btnEnter44.addEventListener("mouseenter", punteroEnter);
btnEnter44.addEventListener("mouseleave", punteroLeave);
btnEnter45.addEventListener("mouseenter", punteroEnter);
btnEnter45.addEventListener("mouseleave", punteroLeave);



// slider sec 2 texto y img

var sec2SliderTt = document.querySelector("#sec__2__slider__tt");
var sec2SliderImg1 = document.querySelector("#sec__2__slider__img__1");
var sec2SliderImg2 = document.querySelector("#sec__2__slider__img__2");
var sec2SliderImg3 = document.querySelector("#sec__2__slider__img__3");
var sec2SliderImg4 = document.querySelector("#sec__2__slider__img__4");
var sec2SliderImg5 = document.querySelector("#sec__2__slider__img__5");
var sec2SliderImg6 = document.querySelector("#sec__2__slider__img__6");
var sec2SliderImg7 = document.querySelector("#sec__2__slider__img__7");
var sec2SliderImg8 = document.querySelector("#sec__2__slider__img__8");
var sec2SliderImg9 = document.querySelector("#sec__2__slider__img__9");
var sec2SliderImg10 = document.querySelector("#sec__2__slider__img__10");
var sec2SliderImg11 = document.querySelector("#sec__2__slider__img__11");
var sec2SliderImg12 = document.querySelector("#sec__2__slider__img__12");

window.btnEnter5.classList.add("circleActive");
window.btnEnter17.classList.add("pActive");
window.sec2SliderImg1.style.transform = "scale(1)";


function circle1 () {
   btnEnter5.classList.add("circleActive")
   btnEnter6.classList.remove("circleActive") || btnEnter7.classList.remove("circleActive") || btnEnter8.classList.remove("circleActive") || btnEnter9.classList.remove("circleActive") || btnEnter10.classList.remove("circleActive") || btnEnter11.classList.remove("circleActive") || btnEnter12.classList.remove("circleActive") || btnEnter13.classList.remove("circleActive") || btnEnter14.classList.remove("circleActive") || btnEnter15.classList.remove("circleActive") || btnEnter16.classList.remove("circleActive");

    sec2SliderTt.style.transform = "translate(0%)";
    sec2SliderImg1.style.transform = "scale(1)";
    sec2SliderImg2.style.transform = "scale(0)";
    sec2SliderImg3.style.transform = "scale(0)";
    sec2SliderImg4.style.transform = "scale(0)";
    sec2SliderImg5.style.transform = "scale(0)";
    sec2SliderImg6.style.transform = "scale(0)";
    sec2SliderImg7.style.transform = "scale(0)";
    sec2SliderImg8.style.transform = "scale(0)";
    sec2SliderImg9.style.transform = "scale(0)";
    sec2SliderImg10.style.transform = "scale(0)";
    sec2SliderImg11.style.transform = "scale(0)";
    sec2SliderImg12.style.transform = "scale(0)";
}

function circle2 () {
    btnEnter6.classList.add("circleActive")
    btnEnter5.classList.remove("circleActive") || btnEnter7.classList.remove("circleActive") || btnEnter8.classList.remove("circleActive") || btnEnter9.classList.remove("circleActive") || btnEnter10.classList.remove("circleActive") || btnEnter11.classList.remove("circleActive") || btnEnter12.classList.remove("circleActive") || btnEnter13.classList.remove("circleActive") || btnEnter14.classList.remove("circleActive") || btnEnter15.classList.remove("circleActive") || btnEnter16.classList.remove("circleActive");


    sec2SliderTt.style.transform = "translate(-8.3%)";
    sec2SliderImg2.style.transform = "scale(1)";
    sec2SliderImg1.style.transform = "scale(0)";
    sec2SliderImg3.style.transform = "scale(0)";
    sec2SliderImg4.style.transform = "scale(0)";
    sec2SliderImg5.style.transform = "scale(0)";
    sec2SliderImg6.style.transform = "scale(0)";
    sec2SliderImg7.style.transform = "scale(0)";
    sec2SliderImg8.style.transform = "scale(0)";
    sec2SliderImg9.style.transform = "scale(0)";
    sec2SliderImg10.style.transform = "scale(0)";
    sec2SliderImg11.style.transform = "scale(0)";
    sec2SliderImg12.style.transform = "scale(0)";
}

function circle3() {
    btnEnter7.classList.add("circleActive")
    btnEnter5.classList.remove("circleActive") || btnEnter6.classList.remove("circleActive") || btnEnter8.classList.remove("circleActive") || btnEnter9.classList.remove("circleActive") || btnEnter10.classList.remove("circleActive") || btnEnter11.classList.remove("circleActive") || btnEnter12.classList.remove("circleActive") || btnEnter13.classList.remove("circleActive") || btnEnter14.classList.remove("circleActive") || btnEnter15.classList.remove("circleActive") || btnEnter16.classList.remove("circleActive");
 

    sec2SliderTt.style.transform = "translate(-16.6%)";
    sec2SliderImg3.style.transform = "scale(1)";
    sec2SliderImg1.style.transform = "scale(0)";
    sec2SliderImg2.style.transform = "scale(0)";
    sec2SliderImg4.style.transform = "scale(0)";
    sec2SliderImg5.style.transform = "scale(0)";
    sec2SliderImg6.style.transform = "scale(0)";
    sec2SliderImg7.style.transform = "scale(0)";
    sec2SliderImg8.style.transform = "scale(0)";
    sec2SliderImg9.style.transform = "scale(0)";
    sec2SliderImg10.style.transform = "scale(0)";
    sec2SliderImg11.style.transform = "scale(0)";
    sec2SliderImg12.style.transform = "scale(0)";
}

function circle4 () {
    btnEnter8.classList.add("circleActive")
    btnEnter5.classList.remove("circleActive") || btnEnter6.classList.remove("circleActive") || btnEnter7.classList.remove("circleActive") || btnEnter9.classList.remove("circleActive") || btnEnter10.classList.remove("circleActive") || btnEnter11.classList.remove("circleActive") || btnEnter12.classList.remove("circleActive") || btnEnter13.classList.remove("circleActive") || btnEnter14.classList.remove("circleActive") || btnEnter15.classList.remove("circleActive") || btnEnter16.classList.remove("circleActive");

    sec2SliderTt.style.transform = "translate(-24.9%)";
    sec2SliderImg4.style.transform = "scale(1)";
    sec2SliderImg1.style.transform = "scale(0)";
    sec2SliderImg2.style.transform = "scale(0)";
    sec2SliderImg3.style.transform = "scale(0)";
    sec2SliderImg5.style.transform = "scale(0)";
    sec2SliderImg6.style.transform = "scale(0)";
    sec2SliderImg7.style.transform = "scale(0)";
    sec2SliderImg8.style.transform = "scale(0)";
    sec2SliderImg9.style.transform = "scale(0)";
    sec2SliderImg10.style.transform = "scale(0)";
    sec2SliderImg11.style.transform = "scale(0)";
    sec2SliderImg12.style.transform = "scale(0)";
}

function circle5 () {
    btnEnter9.classList.add("circleActive")
    btnEnter5.classList.remove("circleActive") || btnEnter6.classList.remove("circleActive") || btnEnter7.classList.remove("circleActive") || btnEnter8.classList.remove("circleActive") || btnEnter10.classList.remove("circleActive") || btnEnter11.classList.remove("circleActive") || btnEnter12.classList.remove("circleActive") || btnEnter13.classList.remove("circleActive") || btnEnter14.classList.remove("circleActive") || btnEnter15.classList.remove("circleActive") || btnEnter16.classList.remove("circleActive");


    sec2SliderTt.style.transform = "translate(-33.2%)";
    sec2SliderImg5.style.transform = "scale(1)";
    sec2SliderImg1.style.transform = "scale(0)";
    sec2SliderImg2.style.transform = "scale(0)";
    sec2SliderImg3.style.transform = "scale(0)";
    sec2SliderImg4.style.transform = "scale(0)";
    sec2SliderImg6.style.transform = "scale(0)";
    sec2SliderImg7.style.transform = "scale(0)";
    sec2SliderImg8.style.transform = "scale(0)";
    sec2SliderImg9.style.transform = "scale(0)";
    sec2SliderImg10.style.transform = "scale(0)";
    sec2SliderImg11.style.transform = "scale(0)";
    sec2SliderImg12.style.transform = "scale(0)";
}

function circle6 () {
    btnEnter10.classList.add("circleActive")
    btnEnter5.classList.remove("circleActive") || btnEnter6.classList.remove("circleActive") || btnEnter7.classList.remove("circleActive") || btnEnter8.classList.remove("circleActive") || btnEnter9.classList.remove("circleActive") || btnEnter11.classList.remove("circleActive") || btnEnter12.classList.remove("circleActive") || btnEnter13.classList.remove("circleActive") || btnEnter14.classList.remove("circleActive") || btnEnter15.classList.remove("circleActive") || btnEnter16.classList.remove("circleActive");

    sec2SliderTt.style.transform = "translate(-41.5%)";
    sec2SliderImg6.style.transform = "scale(1)";
    sec2SliderImg1.style.transform = "scale(0)";
    sec2SliderImg2.style.transform = "scale(0)";
    sec2SliderImg3.style.transform = "scale(0)";
    sec2SliderImg4.style.transform = "scale(0)";
    sec2SliderImg5.style.transform = "scale(0)";
    sec2SliderImg7.style.transform = "scale(0)";
    sec2SliderImg8.style.transform = "scale(0)";
    sec2SliderImg9.style.transform = "scale(0)";
    sec2SliderImg10.style.transform = "scale(0)";
    sec2SliderImg11.style.transform = "scale(0)";
    sec2SliderImg12.style.transform = "scale(0)";
}

function circle7 () {
    btnEnter11.classList.add("circleActive")
    btnEnter5.classList.remove("circleActive") || btnEnter6.classList.remove("circleActive") || btnEnter7.classList.remove("circleActive") || btnEnter8.classList.remove("circleActive") || btnEnter9.classList.remove("circleActive") || btnEnter10.classList.remove("circleActive") || btnEnter12.classList.remove("circleActive") || btnEnter13.classList.remove("circleActive") || btnEnter14.classList.remove("circleActive") || btnEnter15.classList.remove("circleActive") || btnEnter16.classList.remove("circleActive");

    sec2SliderTt.style.transform = "translate(-49.8%)";
    sec2SliderImg7.style.transform = "scale(1)";
    sec2SliderImg1.style.transform = "scale(0)";
    sec2SliderImg2.style.transform = "scale(0)";
    sec2SliderImg3.style.transform = "scale(0)";
    sec2SliderImg4.style.transform = "scale(0)";
    sec2SliderImg5.style.transform = "scale(0)";
    sec2SliderImg6.style.transform = "scale(0)";
    sec2SliderImg8.style.transform = "scale(0)";
    sec2SliderImg9.style.transform = "scale(0)";
    sec2SliderImg10.style.transform = "scale(0)";
    sec2SliderImg11.style.transform = "scale(0)";
    sec2SliderImg12.style.transform = "scale(0)";
}

function circle8 () {
    btnEnter12.classList.add("circleActive")
    btnEnter5.classList.remove("circleActive") || btnEnter6.classList.remove("circleActive") || btnEnter7.classList.remove("circleActive") || btnEnter8.classList.remove("circleActive") || btnEnter9.classList.remove("circleActive") || btnEnter10.classList.remove("circleActive") || btnEnter11.classList.remove("circleActive") || btnEnter13.classList.remove("circleActive") || btnEnter14.classList.remove("circleActive") || btnEnter15.classList.remove("circleActive") || btnEnter16.classList.remove("circleActive");

    sec2SliderTt.style.transform = "translate(-58.1%)";
    sec2SliderImg8.style.transform = "scale(1)";
    sec2SliderImg1.style.transform = "scale(0)";
    sec2SliderImg2.style.transform = "scale(0)";
    sec2SliderImg3.style.transform = "scale(0)";
    sec2SliderImg4.style.transform = "scale(0)";
    sec2SliderImg5.style.transform = "scale(0)";
    sec2SliderImg6.style.transform = "scale(0)";
    sec2SliderImg7.style.transform = "scale(0)";
    sec2SliderImg9.style.transform = "scale(0)";
    sec2SliderImg10.style.transform = "scale(0)";
    sec2SliderImg11.style.transform = "scale(0)";
    sec2SliderImg12.style.transform = "scale(0)";
}

function circle9 (){
    btnEnter13.classList.add("circleActive")
    btnEnter5.classList.remove("circleActive") || btnEnter6.classList.remove("circleActive") || btnEnter7.classList.remove("circleActive") || btnEnter8.classList.remove("circleActive") || btnEnter9.classList.remove("circleActive") || btnEnter10.classList.remove("circleActive") || btnEnter11.classList.remove("circleActive") || btnEnter12.classList.remove("circleActive") || btnEnter14.classList.remove("circleActive") || btnEnter15.classList.remove("circleActive") || btnEnter16.classList.remove("circleActive");

    sec2SliderTt.style.transform = "translate(-66.4%)";
    sec2SliderImg9.style.transform = "scale(1)";
    sec2SliderImg1.style.transform = "scale(0)";
    sec2SliderImg2.style.transform = "scale(0)";
    sec2SliderImg3.style.transform = "scale(0)";
    sec2SliderImg4.style.transform = "scale(0)";
    sec2SliderImg5.style.transform = "scale(0)";
    sec2SliderImg6.style.transform = "scale(0)";
    sec2SliderImg7.style.transform = "scale(0)";
    sec2SliderImg8.style.transform = "scale(0)";
    sec2SliderImg10.style.transform = "scale(0)";
    sec2SliderImg11.style.transform = "scale(0)";
    sec2SliderImg12.style.transform = "scale(0)";
}

function circle10 () {
    btnEnter14.classList.add("circleActive")
    btnEnter5.classList.remove("circleActive") || btnEnter6.classList.remove("circleActive") || btnEnter7.classList.remove("circleActive") || btnEnter8.classList.remove("circleActive") || btnEnter9.classList.remove("circleActive") || btnEnter10.classList.remove("circleActive") || btnEnter11.classList.remove("circleActive") || btnEnter12.classList.remove("circleActive") || btnEnter13.classList.remove("circleActive") || btnEnter15.classList.remove("circleActive") || btnEnter16.classList.remove("circleActive");
    
    sec2SliderTt.style.transform = "translate(-74.7%)";
    sec2SliderImg10.style.transform = "scale(1)";
    sec2SliderImg1.style.transform = "scale(0)";
    sec2SliderImg2.style.transform = "scale(0)";
    sec2SliderImg3.style.transform = "scale(0)";
    sec2SliderImg4.style.transform = "scale(0)";
    sec2SliderImg5.style.transform = "scale(0)";
    sec2SliderImg6.style.transform = "scale(0)";
    sec2SliderImg7.style.transform = "scale(0)";
    sec2SliderImg8.style.transform = "scale(0)";
    sec2SliderImg9.style.transform = "scale(0)";
    sec2SliderImg11.style.transform = "scale(0)";
    sec2SliderImg12.style.transform = "scale(0)";
}

function circle11 () {
    btnEnter15.classList.add("circleActive")
    btnEnter5.classList.remove("circleActive") || btnEnter6.classList.remove("circleActive") || btnEnter7.classList.remove("circleActive") || btnEnter8.classList.remove("circleActive") || btnEnter9.classList.remove("circleActive") || btnEnter10.classList.remove("circleActive") || btnEnter11.classList.remove("circleActive") || btnEnter12.classList.remove("circleActive") || btnEnter13.classList.remove("circleActive") || btnEnter14.classList.remove("circleActive") || btnEnter16.classList.remove("circleActive");

    sec2SliderTt.style.transform = "translate(-83.1%)";
    sec2SliderImg11.style.transform = "scale(1)";
    sec2SliderImg1.style.transform = "scale(0)";
    sec2SliderImg2.style.transform = "scale(0)";
    sec2SliderImg3.style.transform = "scale(0)";
    sec2SliderImg4.style.transform = "scale(0)";
    sec2SliderImg5.style.transform = "scale(0)";
    sec2SliderImg6.style.transform = "scale(0)";
    sec2SliderImg7.style.transform = "scale(0)";
    sec2SliderImg8.style.transform = "scale(0)";
    sec2SliderImg9.style.transform = "scale(0)";
    sec2SliderImg10.style.transform = "scale(0)";
    sec2SliderImg12.style.transform = "scale(0)";
}

function circle12 () {
    btnEnter16.classList.add("circleActive")
    btnEnter5.classList.remove("circleActive") || btnEnter6.classList.remove("circleActive") || btnEnter7.classList.remove("circleActive") || btnEnter8.classList.remove("circleActive") || btnEnter9.classList.remove("circleActive") || btnEnter10.classList.remove("circleActive") || btnEnter11.classList.remove("circleActive") || btnEnter12.classList.remove("circleActive") || btnEnter13.classList.remove("circleActive") || btnEnter14.classList.remove("circleActive") || btnEnter15.classList.remove("circleActive");

    sec2SliderTt.style.transform = "translate(-91.5%)";
    sec2SliderImg12.style.transform = "scale(1)";
    sec2SliderImg1.style.transform = "scale(0)";
    sec2SliderImg2.style.transform = "scale(0)";
    sec2SliderImg3.style.transform = "scale(0)";
    sec2SliderImg4.style.transform = "scale(0)";
    sec2SliderImg5.style.transform = "scale(0)";
    sec2SliderImg6.style.transform = "scale(0)";
    sec2SliderImg7.style.transform = "scale(0)";
    sec2SliderImg8.style.transform = "scale(0)";
    sec2SliderImg9.style.transform = "scale(0)";
    sec2SliderImg10.style.transform = "scale(0)";
    sec2SliderImg11.style.transform = "scale(0)";
}

btnEnter5.addEventListener("click", circle1);
btnEnter6.addEventListener("click", circle2);
btnEnter7.addEventListener("click", circle3);
btnEnter8.addEventListener("click", circle4);
btnEnter9.addEventListener("click", circle5);
btnEnter10.addEventListener("click", circle6);
btnEnter11.addEventListener("click", circle7);
btnEnter12.addEventListener("click", circle8);
btnEnter13.addEventListener("click", circle9);
btnEnter14.addEventListener("click", circle10);
btnEnter15.addEventListener("click", circle11);
btnEnter16.addEventListener("click", circle12);

btnEnter17.addEventListener("click", circle1);
btnEnter18.addEventListener("click", circle2);
btnEnter19.addEventListener("click", circle3);
btnEnter20.addEventListener("click", circle4);
btnEnter21.addEventListener("click", circle5);
btnEnter22.addEventListener("click", circle6);
btnEnter23.addEventListener("click", circle7);
btnEnter24.addEventListener("click", circle8);
btnEnter25.addEventListener("click", circle9);
btnEnter26.addEventListener("click", circle10);
btnEnter27.addEventListener("click", circle11);
btnEnter28.addEventListener("click", circle12);

// slider sec 3

var sec3SliderUl   = document.querySelector("#sec__3__slider__ul");
var sec3BtnLeft    = document.querySelector("#btnLeft");
var sec3BtnRigth   = document.querySelector("#btnRigth");

let sec3Contador = 0;

sec3BtnRigth.addEventListener("click", () => {
    if(sec3Contador >= 75){
        sec3Contador = -25;
    }else{
        sec3Contador += 25;
        sec3SliderUl.style.transform = `translateX(${-sec3Contador}%)`;
    }
})

sec3BtnLeft.addEventListener("click", () => {
    if(sec3Contador <= 0){
        sec3Contador = 100;
    }else{
        sec3Contador -= 25;
        sec3SliderUl.style.transform = `translateX(${-sec3Contador}%)`;
    }
})