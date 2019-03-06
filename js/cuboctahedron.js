window.onload = function () {
    var cuboctahedron = document.querySelector('#cuboctahedron');
    var scene = document.querySelector('#scene');
    var XValue = window.getComputedStyle(document.documentElement).getPropertyValue('--translateX');
    var YValue = window.getComputedStyle(document.documentElement).getPropertyValue('--translateY');
    var ZValue = window.getComputedStyle(document.documentElement).getPropertyValue('--translateZ');
    var ZValueTriangle = window.getComputedStyle(document.documentElement).getPropertyValue('--translateZ-triangle');
    var YValueTransition = window.getComputedStyle(document.documentElement).getPropertyValue('--transitioningY');
    var ZValueTransition = window.getComputedStyle(document.documentElement).getPropertyValue('--transitioningZ');
    var ZValueTransitionTriangle = window.getComputedStyle(document.documentElement).getPropertyValue('--transitioningZ-triangle');
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
    var newTransTrans = "translateZ(-1870.21327273px) translateY(-381.9660113px) rotateY( 0deg) rotateZ(45deg)";
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

    for (var i = 0; i < buttonTop.length; i++) {
        buttonTop.item(i).onclick = changeToTopSide;
    }

    for (var i = 0; i < buttonBottom.length; i++) {
        buttonBottom.item(i).onclick = changeToBottomSide;
    }

    for (var i = 0; i < buttonBack.length; i++) {
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

    
    /* pulled from internet to prefix for all browser types */
    var pfx = ["webkit", "moz", "MS", "o", ""];
    function PrefixedEvent(element, type, callback) {
        for (var p = 0; p < pfx.length; p++) {
            if (!pfx[p]) type = type.toLowerCase();
            element.addEventListener(pfx[p] + type, callback, false);
        }
    }

    /* I bet this adjustment works */
    function RemovePrefixedEvent(element, type, callback) {
        for (var p = 0; p < pfx.length; p++) {
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
    }

    function changeToRightSide() {
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
        newTrans = "translateZ(" + ZValue + ") rotateY( -90deg) rotateX(-45deg)";
        newTransTrans = "translateZ(" + ZValueTransition + ") translateY(" + YValueTransition + ") rotateY( -90deg) rotateX(-45deg)";
        document.documentElement.style.setProperty('--new-trans', newTrans);
        document.documentElement.style.setProperty('--new-trans-moving', newTransTrans);
        PrefixedEvent(scene, "AnimationEnd", AnimationEndLR);
        cuboctahedron.classList.add("show-right");
        currentClass = "show-right";
    }

    function changeToLeftSide() {
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
        newTrans = "translateZ(" + ZValue + ") rotateY( 90deg) rotateX(-135deg)";
        newTransTrans = "translateZ(" + ZValueTransition + ") translateY(" + YValueTransition + ") rotateY( 90deg) rotateX(-135deg)";
        document.documentElement.style.setProperty('--new-trans', newTrans);
        document.documentElement.style.setProperty('--new-trans-moving', newTransTrans);
        PrefixedEvent(scene, "AnimationEnd", AnimationEndLR);
        cuboctahedron.classList.add("show-left");
        currentClass = "show-left";
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
    }

    function changeToBottomSide() {
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
        newTrans = "translateZ(" + ZValue + ") rotateX( 90deg) rotateY(135deg)";
        newTransTrans = "translateZ(" + ZValueTransition + ") translateY(" + YValueTransition + ") rotateX( 90deg) rotateY(135deg)";
        document.documentElement.style.setProperty('--new-trans', newTrans);
        document.documentElement.style.setProperty('--new-trans-moving', newTransTrans);
        PrefixedEvent(scene, "AnimationEnd", AnimationEndBot);
        cuboctahedron.classList.add("show-bottom");
        currentClass = "show-bottom";
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
    }


};