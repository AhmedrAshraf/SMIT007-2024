var iphoneImage = document.getElementById("frame");
// <img src="./iphone.png" alt="homeView" id="iphone" />

setInterval(() => {
  if (iphoneImage.src.includes("/iphone.png")) {
    iphoneImage.src = "./iphone2.png";
  } else if (iphoneImage.src.includes("/iphone2.png")) {
    iphoneImage.src = "./iphone3.png";
  } else if (iphoneImage.src.includes("/iphone3.png")) {
    iphoneImage.src = "./iphone4.png";
  } else {
    iphoneImage.src = "./iphone.png";
  }
}, 2000);
