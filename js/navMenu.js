let navButton = document.querySelectorAll('.burger');

for (let i = 0; i < navButton.length; i++) {
    navButton.item(i).addEventListener('click', toggleNav);
}

function toggleNav() {
    let navMenu = document.querySelectorAll('.nav');

    
    for (let i = 0; i < navMenu.length; i++) {
        navMenu.item(i).classList.toggle('open');
    }
}


