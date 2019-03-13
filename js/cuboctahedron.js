let cuboctahedron = document.querySelector('#cuboctahedron');
let scene = document.querySelector('#scene');
let XValue = window.getComputedStyle(document.documentElement).getPropertyValue('--translateX');
let YValue = window.getComputedStyle(document.documentElement).getPropertyValue('--translateY');
let ZValue = window.getComputedStyle(document.documentElement).getPropertyValue('--translateZ');
let ZValueTriangle = window.getComputedStyle(document.documentElement).getPropertyValue('--translateZ-triangle');
let YValueTransition = window.getComputedStyle(document.documentElement).getPropertyValue('--transitioningY');
let ZValueTransition = window.getComputedStyle(document.documentElement).getPropertyValue('--transitioningZ');
let ZValueTransitionTriangle = window.getComputedStyle(document.documentElement).getPropertyValue('--transitioningZ-triangle');
const buttonFront = document.getElementsByClassName('front-button');
const buttonRight = document.getElementsByClassName('right-button');
const buttonLeft = document.getElementsByClassName('left-button');
const buttonTop = document.getElementsByClassName('top-button');
const buttonBottom = document.getElementsByClassName('bottom-button');
const buttonBack = document.getElementsByClassName('back-button');
const buttonTFL = document.getElementsByClassName('tfl-button');
const buttonTBL = document.getElementsByClassName('tbl-button');
const buttonTBR = document.getElementsByClassName('tbr-button');
const buttonTFR = document.getElementsByClassName('tfr-button');
const buttonDFL = document.getElementsByClassName('dfl-button');
const buttonDBL = document.getElementsByClassName('dbl-button');
const buttonDBR = document.getElementsByClassName('dbr-button');
const buttonDFR = document.getElementsByClassName('dfr-button');

let newTrans = "translateZ(-1131.3708499px) rotateY( 0deg) rotateZ(45deg)";
let newTransTrans = "translateZ(-1870.21327273px) translateY(-381.9660113px) rotateY( 0deg) rotateZ(45deg)";
let currentClass = '.show-front-pageload';

for (let i = 0; i < buttonFront.length; i++) {
    buttonFront.item(i).addEventListener('click', changeToFrontSide);
}

for (let i = 0; i < buttonRight.length; i++) {
    buttonRight.item(i).addEventListener('click', changeToRightSide);
}

for (let i = 0; i < buttonLeft.length; i++) {
    buttonLeft.item(i).addEventListener('click', changeToLeftSide);
}

for (let i = 0; i < buttonTop.length; i++) {
    buttonTop.item(i).addEventListener('click', changeToTopSide);
}

for (let i = 0; i < buttonBottom.length; i++) {
    buttonBottom.item(i).addEventListener('click', changeToBottomSide);
}

for (let i = 0; i < buttonBack.length; i++) {
    buttonBack.item(i).addEventListener('click', changeToBackSide);
}

for (let i = 0; i < buttonTFL.length; i++) {
    buttonTFL.item(i).addEventListener('click', changeToTFLSide);
}

for (let i = 0; i < buttonTBL.length; i++) {
    buttonTBL.item(i).addEventListener('click', changeToTBLSide);
}

for (let i = 0; i < buttonTBR.length; i++) {
    buttonTBR.item(i).addEventListener('click', changeToTBRSide);
}

for (let i = 0; i < buttonTFR.length; i++) {
    buttonTFR.item(i).addEventListener('click', changeToTFRSide);
}

for (let i = 0; i < buttonDFL.length; i++) {
    buttonDFL.item(i).addEventListener('click', changeToDFLSide);
}

for (let i = 0; i < buttonDBL.length; i++) {
    buttonDBL.item(i).addEventListener('click', changeToDBLSide);
}

for (let i = 0; i < buttonDBR.length; i++) {
    buttonDBR.item(i).addEventListener('click', changeToDBRSide);
}

for (let i = 0; i < buttonDFR.length; i++) {
    buttonDFR.item(i).addEventListener('click', changeToDFRSide);
}


/* pulled from internet to prefix for all browser types */
let pfx = ["webkit", "moz", "MS", "o", ""];
function PrefixedEvent(element, type, callback) {
    for (let p = 0; p < pfx.length; p++) {
        if (!pfx[p]) type = type.toLowerCase();
        element.addEventListener(pfx[p] + type, callback, false);
    }
}

/* I bet this adjustment works */
function RemovePrefixedEvent(element, type, callback) {
    for (let p = 0; p < pfx.length; p++) {
        if (!pfx[p]) type = type.toLowerCase();
        element.removeEventListener(pfx[p] + type, callback, false);
    }
}

/* change perspective on different faces so overflow does not glitch out */
PrefixedEvent(scene, "AnimationStart", AnimationStartPerspective);

function AnimationStartPerspective() {
    scene.style = "perspective: 700px;";
    /*remove so other animations do not affect perspective */
    RemovePrefixedEvent(scene, "AnimationStart", AnimationStartPerspective);
}

function AnimationEndLR() {
    scene.style = "perspective: 200px;";
    RemovePrefixedEvent(scene, "AnimationEnd", AnimationEndLR);
}

function AnimationEndBot() {
    scene.style = "perspective: 3.14159265358979323846264338px;";
    RemovePrefixedEvent(scene, "AnimationEnd", AnimationEndBot);
}

function changeToFrontSide() {
    PrefixedEvent(scene, "AnimationStart", AnimationStartPerspective);
    if (newTrans) {
        //track current position in order to make smooth animation
        document.documentElement.style.setProperty('--current-trans', newTrans);
    }
    if (newTransTrans) {
        document.documentElement.style.setProperty('--current-trans-moving', newTransTrans);
    }
    if (currentClass) {
        cuboctahedron.classList.remove(currentClass);
    }
    newTrans = "translateZ(" + ZValue + ") rotateY( 0deg) rotateZ(45deg)";
    newTransTrans = "translateZ(" + ZValueTransition + ") translateY(" + YValueTransition + ") rotateY( 0deg) rotateX(-5.4deg) rotateZ(45deg)  "; /* rotateX to keep obvious face towards user (should be 8.45 = arctan(translateY/(translateX + perspective)), not sure why it was 5.4deg...); still don't understand order of rotates*/
    document.documentElement.style.setProperty('--new-trans', newTrans);
    document.documentElement.style.setProperty('--new-trans-moving', newTransTrans);
    cuboctahedron.classList.add("show-front");
    currentClass = "show-front";
    burgerOff()
}

function changeToRightSide() {
    PrefixedEvent(scene, "AnimationStart", AnimationStartPerspective);
    PrefixedEvent(scene, "AnimationEnd", AnimationEndLR);
    if (newTrans) {
        document.documentElement.style.setProperty('--current-trans', newTrans);
    }
    if (newTransTrans) {
        document.documentElement.style.setProperty('--current-trans-moving', newTransTrans);
    }
    if (currentClass) {
        cuboctahedron.classList.remove(currentClass);
    }
    newTrans = "translateZ(" + ZValue + ") rotateY( -90deg) rotateX(-45deg)";
    newTransTrans = "translateZ(" + ZValueTransition + ") translateY(" + YValueTransition + ") rotateY( -90deg) rotateX(-45deg)";
    document.documentElement.style.setProperty('--new-trans', newTrans);
    document.documentElement.style.setProperty('--new-trans-moving', newTransTrans);
    cuboctahedron.classList.add("show-right");
    currentClass = "show-right";
    burgerOff()
}

function changeToLeftSide() {
    PrefixedEvent(scene, "AnimationStart", AnimationStartPerspective);
    PrefixedEvent(scene, "AnimationEnd", AnimationEndLR);
    if (newTrans) {
        document.documentElement.style.setProperty('--current-trans', newTrans);
    }
    if (newTransTrans) {
        document.documentElement.style.setProperty('--current-trans-moving', newTransTrans);
    }
    if (currentClass) {
        cuboctahedron.classList.remove(currentClass);
    }
    newTrans = "translateZ(" + ZValue + ") rotateY( 90deg) rotateX(-135deg)";
    newTransTrans = "translateZ(" + ZValueTransition + ") translateY(" + YValueTransition + ") rotateY( 90deg) rotateX(-135deg)";
    document.documentElement.style.setProperty('--new-trans', newTrans);
    document.documentElement.style.setProperty('--new-trans-moving', newTransTrans);
    cuboctahedron.classList.add("show-left");
    currentClass = "show-left";
    burgerOff()
}

function changeToTopSide() {
    PrefixedEvent(scene, "AnimationStart", AnimationStartPerspective);
    if (newTrans) {
        document.documentElement.style.setProperty('--current-trans', newTrans);
    }
    if (newTransTrans) {
        document.documentElement.style.setProperty('--current-trans-moving', newTransTrans);
    }
    if (currentClass) {
        cuboctahedron.classList.remove(currentClass);
    }
    newTrans = "translateZ(" + ZValue + ") rotateX(-90deg) rotateY(135deg)";
    newTransTrans = "translateZ(" + ZValueTransition + ") translateY(" + YValueTransition + ") rotateX(-90deg) rotateY(135deg)";
    document.documentElement.style.setProperty('--new-trans', newTrans);
    document.documentElement.style.setProperty('--new-trans-moving', newTransTrans);
    cuboctahedron.classList.add("show-top");
    currentClass = "show-top";
    burgerOff()
}

function changeToBottomSide() {
    PrefixedEvent(scene, "AnimationStart", AnimationStartPerspective);
    PrefixedEvent(scene, "AnimationEnd", AnimationEndBot);
    if (newTrans) {
        document.documentElement.style.setProperty('--current-trans', newTrans);
    }
    if (newTransTrans) {
        document.documentElement.style.setProperty('--current-trans-moving', newTransTrans);
    }
    if (currentClass) {
        cuboctahedron.classList.remove(currentClass);
    }
    newTrans = "translateZ(" + ZValue + ") rotateX( 90deg) rotateY(135deg)";
    newTransTrans = "translateZ(" + ZValueTransition + ") translateY(" + YValueTransition + ") rotateX( 90deg) rotateY(135deg)";
    document.documentElement.style.setProperty('--new-trans', newTrans);
    document.documentElement.style.setProperty('--new-trans-moving', newTransTrans);
    cuboctahedron.classList.add("show-bottom");
    currentClass = "show-bottom";
    burgerOff()
}

function changeToBackSide() {
    PrefixedEvent(scene, "AnimationStart", AnimationStartPerspective);
    if (newTrans) {
        document.documentElement.style.setProperty('--current-trans', newTrans);
    }
    if (newTransTrans) {
        document.documentElement.style.setProperty('--current-trans-moving', newTransTrans);
    }
    if (currentClass) {
        cuboctahedron.classList.remove(currentClass);
    }
    newTrans = "translateZ(" + ZValue + ") rotateY( 180deg) rotateZ(135deg)";
    newTransTrans = "translateZ(" + ZValueTransition + ") translateY(" + YValueTransition + ") rotateY( 180deg) rotateZ(135deg)";
    document.documentElement.style.setProperty('--new-trans', newTrans);
    document.documentElement.style.setProperty('--new-trans-moving', newTransTrans);
    cuboctahedron.classList.add("show-back");
    currentClass = "show-back";
    burgerOff()
}

function changeToTFLSide() {
    PrefixedEvent(scene, "AnimationStart", AnimationStartPerspective);
    if (newTrans) {
        document.documentElement.style.setProperty('--current-trans', newTrans);
    }
    if (newTransTrans) {
        document.documentElement.style.setProperty('--current-trans-moving', newTransTrans);
    }
    if (currentClass) {
        cuboctahedron.classList.remove(currentClass);
    }
    newTrans = "translateZ(" + ZValueTriangle + ") rotateX(-35.2643897deg) rotateY(45deg)";
    newTransTrans = "translateZ(" + ZValueTransitionTriangle + ") translateY(" + YValueTransition + ") rotateX(-35.2643897deg) rotateY(45deg)";
    document.documentElement.style.setProperty('--new-trans', newTrans);
    document.documentElement.style.setProperty('--new-trans-moving', newTransTrans);
    cuboctahedron.classList.add("show-tfl");
    currentClass = "show-tfl";
    burgerOff()
}

function changeToTBLSide() {
    PrefixedEvent(scene, "AnimationStart", AnimationStartPerspective);
    if (newTrans) {
        document.documentElement.style.setProperty('--current-trans', newTrans);
    }
    if (newTransTrans) {
        document.documentElement.style.setProperty('--current-trans-moving', newTransTrans);
    }
    if (currentClass) {
        cuboctahedron.classList.remove(currentClass);
    }
    newTrans = "translateZ(" + ZValueTriangle + ") rotateX(-35.2643897deg) rotateY(135deg)";
    newTransTrans = "translateZ(" + ZValueTransitionTriangle + ") translateY(" + YValueTransition + ") rotateX(-35.2643897deg) rotateY(135deg)";
    document.documentElement.style.setProperty('--new-trans', newTrans);
    document.documentElement.style.setProperty('--new-trans-moving', newTransTrans);
    cuboctahedron.classList.add("show-tbl");
    currentClass = "show-tbl";
    burgerOff()
}

function changeToTBRSide() {
    PrefixedEvent(scene, "AnimationStart", AnimationStartPerspective);
    if (newTrans) {
        document.documentElement.style.setProperty('--current-trans', newTrans);
    }
    if (newTransTrans) {
        document.documentElement.style.setProperty('--current-trans-moving', newTransTrans);
    }
    if (currentClass) {
        cuboctahedron.classList.remove(currentClass);
    }
    newTrans = "translateZ(" + ZValueTriangle + ") rotateX(-35.2643897deg) rotateY(-135deg)";
    newTransTrans = "translateZ(" + ZValueTransitionTriangle + ") translateY(" + YValueTransition + ") rotateX(-35.2643897deg) rotateY(-135deg)";
    document.documentElement.style.setProperty('--new-trans', newTrans);
    document.documentElement.style.setProperty('--new-trans-moving', newTransTrans);
    cuboctahedron.classList.add("show-tbr");
    currentClass = "show-tbr";
    burgerOff()
}

function changeToTFRSide() {
    PrefixedEvent(scene, "AnimationStart", AnimationStartPerspective);
    if (newTrans) {
        document.documentElement.style.setProperty('--current-trans', newTrans);
    }
    if (newTransTrans) {
        document.documentElement.style.setProperty('--current-trans-moving', newTransTrans);
    }
    if (currentClass) {
        cuboctahedron.classList.remove(currentClass);
    }
    newTrans = "translateZ(" + ZValueTriangle + ") rotateX(-35.2643897deg) rotateY(-45deg)";
    newTransTrans = "translateZ(" + ZValueTransitionTriangle + ") translateY(" + YValueTransition + ") rotateX(-35.2643897deg) rotateY(-45deg)";
    document.documentElement.style.setProperty('--new-trans', newTrans);
    document.documentElement.style.setProperty('--new-trans-moving', newTransTrans);
    cuboctahedron.classList.add("show-tfr");
    currentClass = "show-tfr";
    burgerOff()
}

function changeToDFLSide() {
    PrefixedEvent(scene, "AnimationStart", AnimationStartPerspective);
    if (newTrans) {
        document.documentElement.style.setProperty('--current-trans', newTrans);
    }
    if (newTransTrans) {
        document.documentElement.style.setProperty('--current-trans-moving', newTransTrans);
    }
    if (currentClass) {
        cuboctahedron.classList.remove(currentClass);
    }
    newTrans = "translateZ(" + ZValueTriangle + ") rotateX(35.2643897deg) rotateY(45deg)";
    newTransTrans = "translateZ(" + ZValueTransitionTriangle + ") translateY(" + YValueTransition + ") rotateX(35.2643897deg) rotateY(45deg)";
    document.documentElement.style.setProperty('--new-trans', newTrans);
    document.documentElement.style.setProperty('--new-trans-moving', newTransTrans);
    cuboctahedron.classList.add("show-dfl");
    currentClass = "show-dfl";
    burgerOff()
}

function changeToDBLSide() {
    PrefixedEvent(scene, "AnimationStart", AnimationStartPerspective);
    if (newTrans) {
        document.documentElement.style.setProperty('--current-trans', newTrans);
    }
    if (newTransTrans) {
        document.documentElement.style.setProperty('--current-trans-moving', newTransTrans);
    }
    if (currentClass) {
        cuboctahedron.classList.remove(currentClass);
    }
    newTrans = "translateZ(" + ZValueTriangle + ") rotateX(35.2643897deg) rotateY(135deg)";
    newTransTrans = "translateZ(" + ZValueTransitionTriangle + ") translateY(" + YValueTransition + ") rotateX(35.2643897deg) rotateY(135deg)";
    document.documentElement.style.setProperty('--new-trans', newTrans);
    document.documentElement.style.setProperty('--new-trans-moving', newTransTrans);
    cuboctahedron.classList.add("show-dbl");
    currentClass = "show-dbl";
    burgerOff()
}

function changeToDBRSide() {
    PrefixedEvent(scene, "AnimationStart", AnimationStartPerspective);
    if (newTrans) {
        document.documentElement.style.setProperty('--current-trans', newTrans);
    }
    if (newTransTrans) {
        document.documentElement.style.setProperty('--current-trans-moving', newTransTrans);
    }
    if (currentClass) {
        cuboctahedron.classList.remove(currentClass);
    }
    newTrans = "translateZ(" + ZValueTriangle + ") rotateX(35.2643897deg) rotateY(-135deg)";
    newTransTrans = "translateZ(" + ZValueTransitionTriangle + ") translateY(" + YValueTransition + ") rotateX(35.2643897deg) rotateY(-135deg)";
    document.documentElement.style.setProperty('--new-trans', newTrans);
    document.documentElement.style.setProperty('--new-trans-moving', newTransTrans);
    cuboctahedron.classList.add("show-dbr");
    currentClass = "show-dbr";
    burgerOff()
}

function changeToDFRSide() {
    PrefixedEvent(scene, "AnimationStart", AnimationStartPerspective);
    if (newTrans) {
        document.documentElement.style.setProperty('--current-trans', newTrans);
    }
    if (newTransTrans) {
        document.documentElement.style.setProperty('--current-trans-moving', newTransTrans);
    }
    if (currentClass) {
        cuboctahedron.classList.remove(currentClass);
    }
    newTrans = "translateZ(" + ZValueTriangle + ") rotateX(35.2643897deg) rotateY(-45deg)";
    newTransTrans = "translateZ(" + ZValueTransitionTriangle + ") translateY(" + YValueTransition + ") rotateX(35.2643897deg) rotateY(-45deg)";
    document.documentElement.style.setProperty('--new-trans', newTrans);
    document.documentElement.style.setProperty('--new-trans-moving', newTransTrans);
    cuboctahedron.classList.add("show-dfr");
    currentClass = "show-dfr";
    burgerOff()
}

window.onload = function () {
    document.documentElement.style.setProperty('--backface-visibility', "hidden"); /* doing this so faces load at startup and then go hidden afterwards*/
}