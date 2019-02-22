window.onload = function() {
    var cuboctahedron = document.querySelector('#cuboctahedron');
// var navList = document.querySelector('.nav-list');
var button = document.getElementById('right-button');
// var currentClass = '';


button.onclick= changeSide;

// button.onclick = changeSide();
// document.getElementById('right-button').onclick = document.getElementById('cuboctahedron').style.transform = 'translateZ(-353.553390593px) rotateY( -90deg)';



};

function changeSide() {
    // document.getElementById("cuboctahedron").style.transform = "rotateY( -90deg)";
    // cuboctahedron.classList.add("cuboctahedron.show-right");
    // document.getElementById("cuboctahedron").classList.add("cuboctahedron.show-right");
    cuboctahedron.style.transform = 'translateZ(-353.553390593px) rotateY( -90deg)';
    //   var showClass = 'show-' + button.value;
    //   if ( currentClass ) {
    //     cuboctahedron.classList.remove( currentClass );
    //   }
    //   cuboctahedron.classList.add( showClass );
    //   currentClass = showClass;
}