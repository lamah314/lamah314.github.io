window.onload = function () {
    var cuboctahedron = document.querySelector('#cuboctahedron');
    var buttonFront = document.getElementsByClassName('front-button');
    var buttonRight = document.getElementsByClassName('right-button');
    var buttonLeft = document.getElementsByClassName('left-button');
    var newTrans = '';
    var currentClass = '';

    for (var i = 0; i < buttonFront.length; i++) {
        buttonFront.item(i).onclick = changeToFrontSide;
    }

    for (var i = 0; i < buttonRight.length; i++) {
        buttonRight.item(i).onclick = changeToRightSide;
    }

    for (var i = 0; i < buttonLeft.length; i++) {
        buttonLeft.item(i).onclick = changeToLeftSide;
    }

    function changeToFrontSide() {
        if (newTrans) {
            document.documentElement.style.setProperty('--current-trans', newTrans);
        }
        if (currentClass) {
            cuboctahedron.classList.remove(currentClass);
        }
        newTrans = "translateZ(-353.553390593px) rotateY( 0deg) rotateZ(45deg)";
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
        newTrans = "translateZ(-353.553390593px) rotateY( -90deg)";
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
        newTrans = "translateZ(-353.553390593px) rotateY( 90deg)";
        document.documentElement.style.setProperty('--new-trans', newTrans);
        console.log(cuboctahedron.className);
        cuboctahedron.classList.add("show-left");
        currentClass = "show-left";
    }

    function moveItemBack(x) {
        x.style.transfrom = 'translateZ(-1000px)';
    }

    function moveItemForward(x) {
        x.style.transfrom = 'translateZ(1000px)';
    }

};
