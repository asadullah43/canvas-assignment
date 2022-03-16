let imgInput = document.getElementById("imageInput");
var myCanvas = document.getElementById("myCanvas");
var myContext = myCanvas.getContext("2d");

myContext.beginPath();
myContext.fillStyle = "rgb(0, 229, 255)";
myContext.fillRect(0, 0, 400, 15);
myContext.fillRect(0, 135, 400, 15);
myContext.lineWidth = "2";
myContext.strokeStyle = "red";
myContext.stroke();

imgInput.addEventListener("change", function (e) {
  if (e.target.files) {
    let imageFile = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = function (e) {
      var myImage = new Image();
      myImage.src = e.target.result;
      myImage.onload = function (ev) {
        myContext.drawImage(
          myImage,
          0,
          15,
          myCanvas.width,
          myCanvas.height - 30
        );
        let imgData = myCanvas.toDataURL("image/jpeg", 0.75);
      };
    };
  }
});

function addHeader() {
  var header_text = document.getElementById("header-input").value;
  myContext.font = "15px Arial";
  myContext.fillStyle = "black";
  myContext.fillText(header_text, myCanvas.width / 5, 12);
}

function addFooter() {
  var footer_text = document.getElementById("footer-input").value;
  myContext.font = "15px Arial";
  myContext.fillStyle = "black";
  myContext.fillText(footer_text, myCanvas.width / 8, myCanvas.height - 4);
}
document.getElementById("text-btn").onclick = function () {
  var my_text = document.getElementById("canvas-text").value;
  console.log(my_text);
  myContext.font = "30px Arial";
  myContext.fillStyle = "red";
  myContext.fillText(my_text, myCanvas.width / 2, myCanvas.height / 2);
};

function download() {
  var download = document.getElementById("imageCanvas");
  var image = document
    .getElementById("myCanvas")
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
  download.setAttribute("href", image);
}
