window.onload = function () {
    var cuboctahedron = document.querySelector('#cuboctahedron');
    var ZValue = window.getComputedStyle(document.documentElement).getPropertyValue('--translateZ');
    var buttonFront = document.getElementsByClassName('front-button');
    var buttonRight = document.getElementsByClassName('right-button');
    var buttonLeft = document.getElementsByClassName('left-button');
    var buttonTop = document.getElementsByClassName('top-button');
    var buttonBottom = document.getElementsByClassName('bottom-button');
    var buttonBack = document.getElementsByClassName('back-button');

    var buttonTFL = document.getElementsByClassName('tfl-button');
    var buttonTBL = document.getElementsByClassName('tbl-button');
    var buttonTBR = document.getElementsByClassName('tbr-button');
    var buttonTFR = document.getElementsByClassName('tfr-button');
    var buttonDFL = document.getElementsByClassName('dfl-button');
    var buttonDBL = document.getElementsByClassName('dbl-button');
    var buttonDBR = document.getElementsByClassName('dbr-button');
    var buttonDFR = document.getElementsByClassName('dfr-button');

    var newTrans = "translateZ(-1131.3708499px) rotateY( 0deg) rotateZ(45deg)";
    var currentClass = '.show-front-pageload';

    document.documentElement.style.setProperty('--backface-visibility', "hidden"); /* doing this so faces load at startup */

    for (var i = 0; i < buttonFront.length; i++) {
        buttonFront.item(i).onclick = changeToFrontSide;
    }

    for (var i = 0; i < buttonRight.length; i++) {
        buttonRight.item(i).onclick = changeToRightSide;
    }

    for (var i = 0; i < buttonLeft.length; i++) {
        buttonLeft.item(i).onclick = changeToLeftSide;
    }

    for (var i = 0; i < buttonFront.length; i++) {
        buttonTop.item(i).onclick = changeToTopSide;
    }

    for (var i = 0; i < buttonRight.length; i++) {
        buttonBottom.item(i).onclick = changeToBottomSide;
    }

    for (var i = 0; i < buttonLeft.length; i++) {
        buttonBack.item(i).onclick = changeToBackSide;
    }

    for (var i = 0; i < buttonTFL.length; i++) {
        buttonTFL.item(i).onclick = changeToTFLSide;
    }

    for (var i = 0; i < buttonTBL.length; i++) {
        buttonTBL.item(i).onclick = changeToTBLSide;
    }

    for (var i = 0; i < buttonTBR.length; i++) {
        buttonTBR.item(i).onclick = changeToTBRSide;
    }

    for (var i = 0; i < buttonTFR.length; i++) {
        buttonTFR.item(i).onclick = changeToTFRSide;
    }

    for (var i = 0; i < buttonDFL.length; i++) {
        buttonDFL.item(i).onclick = changeToDFLSide;
    }

    for (var i = 0; i < buttonDBL.length; i++) {
        buttonDBL.item(i).onclick = changeToDBLSide;
    }

    for (var i = 0; i < buttonDBR.length; i++) {
        buttonDBR.item(i).onclick = changeToDBRSide;
    }

    for (var i = 0; i < buttonDFR.length; i++) {
        buttonDFR.item(i).onclick = changeToDFRSide;
    }

    function changeToFrontSide() {
        if (newTrans) {
            document.documentElement.style.setProperty('--current-trans', newTrans);
        }
        if (currentClass) {
            cuboctahedron.classList.remove(currentClass);
        }
        newTrans = "translateZ(" + ZValue + ") rotateY( 0deg) rotateZ(45deg)";
        document.documentElement.style.setProperty('--new-trans', newTrans);
        cuboctahedron.classList.add("show-front");
        currentClass = "show-front";
    }

    function changeToRightSide() {
        if (newTrans) {
            document.documentElement.style.setProperty('--current-trans', newTrans);
        }
        if (currentClass) {
            cuboctahedron.classList.remove(currentClass);
        }
        newTrans = "translateZ(" + ZValue + ") rotateY( -90deg) rotateX(-45deg)";
        document.documentElement.style.setProperty('--new-trans', newTrans);
        console.log(cuboctahedron.className);
        cuboctahedron.classList.add("show-right");
        currentClass = "show-right";
    }

    function changeToLeftSide() {
        if (newTrans) {
            document.documentElement.style.setProperty('--current-trans', newTrans);
        }
        if (currentClass) {
            cuboctahedron.classList.remove(currentClass);
        }
        newTrans = "translateZ(" + ZValue + ") rotateY( 90deg) rotateX(-135deg)";
        document.documentElement.style.setProperty('--new-trans', newTrans);
        console.log(cuboctahedron.className);
        cuboctahedron.classList.add("show-left");
        currentClass = "show-left";
    }

    function changeToTopSide() {
        if (newTrans) {
            document.documentElement.style.setProperty('--current-trans', newTrans);
        }
        if (currentClass) {
            cuboctahedron.classList.remove(currentClass);
        }
        newTrans = "translateZ(" + ZValue + ") rotateX(-90deg) rotateY(135deg)";
        document.documentElement.style.setProperty('--new-trans', newTrans);
        console.log(cuboctahedron.className);
        cuboctahedron.classList.add("show-top");
        currentClass = "show-top";
    }

    function changeToBottomSide() {
        if (newTrans) {
            document.documentElement.style.setProperty('--current-trans', newTrans);
        }
        if (currentClass) {
            cuboctahedron.classList.remove(currentClass);
        }
        newTrans = "translateZ(" + ZValue + ") rotateX( 90deg) rotateY(135deg)";
        document.documentElement.style.setProperty('--new-trans', newTrans);
        console.log(cuboctahedron.className);
        cuboctahedron.classList.add("show-bottom");
        currentClass = "show-bottom";
    }

    function changeToBackSide() {
        if (newTrans) {
            document.documentElement.style.setProperty('--current-trans', newTrans);
        }
        if (currentClass) {
            cuboctahedron.classList.remove(currentClass);
        }
        newTrans = "translateZ(" + ZValue + ") rotateY( 180deg) rotateZ(135deg)";
        document.documentElement.style.setProperty('--new-trans', newTrans);
        console.log(cuboctahedron.className);
        cuboctahedron.classList.add("show-back");
        currentClass = "show-back";
    }

    function changeToTFLSide() {
        if (newTrans) {
            document.documentElement.style.setProperty('--current-trans', newTrans);
        }
        if (currentClass) {
            cuboctahedron.classList.remove(currentClass);
        }
        newTrans = "translateZ(" + ZValue + ") rotateX(-35.2643897deg) rotateY(45deg)";
        document.documentElement.style.setProperty('--new-trans', newTrans);
        console.log(cuboctahedron.className);
        cuboctahedron.classList.add("show-tfl");
        currentClass = "show-tfl";
    }

    function changeToTBLSide() {
        if (newTrans) {
            document.documentElement.style.setProperty('--current-trans', newTrans);
        }
        if (currentClass) {
            cuboctahedron.classList.remove(currentClass);
        }
        newTrans = "translateZ(" + ZValue + ") rotateX(-35.2643897deg) rotateY(135deg)";
        document.documentElement.style.setProperty('--new-trans', newTrans);
        console.log(cuboctahedron.className);
        cuboctahedron.classList.add("show-tbl");
        currentClass = "show-tbl";
    }

    function changeToTBRSide() {
        if (newTrans) {
            document.documentElement.style.setProperty('--current-trans', newTrans);
        }
        if (currentClass) {
            cuboctahedron.classList.remove(currentClass);
        }
        newTrans = "translateZ(" + ZValue + ") rotateX(-35.2643897deg) rotateY(-135deg)";
        document.documentElement.style.setProperty('--new-trans', newTrans);
        console.log(cuboctahedron.className);
        cuboctahedron.classList.add("show-tbr");
        currentClass = "show-tbr";
    }

    function changeToTFRSide() {
        if (newTrans) {
            document.documentElement.style.setProperty('--current-trans', newTrans);
        }
        if (currentClass) {
            cuboctahedron.classList.remove(currentClass);
        }
        newTrans = "translateZ(" + ZValue + ") rotateX(-35.2643897deg) rotateY(-45deg)";
        document.documentElement.style.setProperty('--new-trans', newTrans);
        console.log(cuboctahedron.className);
        cuboctahedron.classList.add("show-tfr");
        currentClass = "show-tfr";
    }

    function changeToDFLSide() {
        if (newTrans) {
            document.documentElement.style.setProperty('--current-trans', newTrans);
        }
        if (currentClass) {
            cuboctahedron.classList.remove(currentClass);
        }
        newTrans = "translateZ(" + ZValue + ") rotateX(35.2643897deg) rotateY(45deg)";
        document.documentElement.style.setProperty('--new-trans', newTrans);
        console.log(cuboctahedron.className);
        cuboctahedron.classList.add("show-dfl");
        currentClass = "show-dfl";
    }

    function changeToDBLSide() {
        if (newTrans) {
            document.documentElement.style.setProperty('--current-trans', newTrans);
        }
        if (currentClass) {
            cuboctahedron.classList.remove(currentClass);
        }
        newTrans = "translateZ(" + ZValue + ") rotateX(35.2643897deg) rotateY(135deg)";
        document.documentElement.style.setProperty('--new-trans', newTrans);
        console.log(cuboctahedron.className);
        cuboctahedron.classList.add("show-dbl");
        currentClass = "show-dbl";
    }

    function changeToDBRSide() {
        if (newTrans) {
            document.documentElement.style.setProperty('--current-trans', newTrans);
        }
        if (currentClass) {
            cuboctahedron.classList.remove(currentClass);
        }
        newTrans = "translateZ(" + ZValue + ") rotateX(35.2643897deg) rotateY(-135deg)";
        document.documentElement.style.setProperty('--new-trans', newTrans);
        console.log(cuboctahedron.className);
        cuboctahedron.classList.add("show-dbr");
        currentClass = "show-dbr";
    }

    function changeToDFRSide() {
        if (newTrans) {
            document.documentElement.style.setProperty('--current-trans', newTrans);
        }
        if (currentClass) {
            cuboctahedron.classList.remove(currentClass);
        }
        newTrans = "translateZ(" + ZValue + ") rotateX(35.2643897deg) rotateY(-45deg)";
        document.documentElement.style.setProperty('--new-trans', newTrans);
        console.log(cuboctahedron.className);
        cuboctahedron.classList.add("show-dfr");
        currentClass = "show-dfr";
    }
};