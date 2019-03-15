let navButton = document.querySelectorAll('.burger');

for (let i = 0; i < navButton.length; i++) {
    navButton.item(i).addEventListener('click', () => {
       burgerAnimation()
    })
}

function burgerAnimation() {
    toggleFlexVisibilityMulti(document.querySelectorAll('.nav'))
    toggleBurgerAnimationFront()
}

function toggleFlexVisibilityMulti(elements) {
    for (let i = 0; i < elements.length; i++) {
        elements.item(i).classList.toggle('open-flex');
    }
}

function toggleFlexVisibilitySingle(element) {
    element.classList.toggle('open-flex');
}

function toggleBurgerAnimationFront() {
    var barTops = document.querySelectorAll('.bar-top')
    var barMids = document.querySelectorAll('.bar-mid')
    var barMidHidden = document.querySelectorAll('.bar-mid-hidden')
    var barBots = document.querySelectorAll('.bar-bot')

    for (let i = 0; i < barTops.length; i++) {
        barTops.item(i).classList.toggle('bar-top-transform')
        barMids.item(i).classList.toggle('bar-mid-transform')
        barMidHidden.item(i).classList.toggle('bar-mid-hidden-transform')
        barBots.item(i).classList.toggle('bar-bot-transform')

    }

}

function burgerOff() {
    offFlexVisibilityMulti(document.querySelectorAll('.nav'))
    offBurgernAnimationFront()
}
function offFlexVisibilityMulti(elements) {
    for (let i = 0; i < elements.length; i++) {
        elements.item(i).classList.remove('open-flex');
    }
}

function offBurgernAnimationFront() {
    var barTops = document.querySelectorAll('.bar-top')
    var barMids = document.querySelectorAll('.bar-mid')
    var barMidHidden = document.querySelectorAll('.bar-mid-hidden')
    var barBots = document.querySelectorAll('.bar-bot')

    for (let i = 0; i < barTops.length; i++) {
        barTops.item(i).classList.remove('bar-top-transform')
        barMids.item(i).classList.remove('bar-mid-transform')
        barMidHidden.item(i).classList.remove('bar-mid-hidden-transform')
        barBots.item(i).classList.remove('bar-bot-transform')
    }

}









    module.exports = {
        toggleFlexVisibilityMulti: toggleFlexVisibilityMulti,
        toggleFlexVisibilitySingle: toggleFlexVisibilitySingle
    }

