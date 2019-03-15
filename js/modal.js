// Get the modal
let modal = document.querySelector('#myModal-img');

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.querySelectorAll('.AboutMe__img');
let modalImg = document.querySelector("#modal-img");
let captionText = document.querySelector("#model-img-caption");

for (let i = 0; i < img.length; i++) {
    img[i].onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}