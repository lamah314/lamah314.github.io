window.loadImage("/your-image.jpg", function (img) {
    if (img.type === "error") {
      console.log("couldn't load image:", img);
    } else {
      window.EXIF.getData(img, function () {
          var orientation = EXIF.getTag(this, "Orientation");
          var canvas = window.loadImage.scale(img, {orientation: orientation || 0, canvas: true});
          document.getElementById("container").appendChild(canvas); 
          // or using jquery $("#container").append(canvas);
  
      });
    }
  });