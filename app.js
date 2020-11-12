const youtubeLink = document.querySelector("#youtubeLink");
const qualityCheck = document.querySelectorAll('input[type="radio"]');
const qualityLabel = document.querySelectorAll("label");
const fetchBtn = document.querySelector("#grabber");
const outputBox = document.querySelector(".output");
const canvas = document.querySelector("#result");
const ctx = canvas.getContext("2d");
let finalImg, canvasW, canvasH, linkImg;

const checkQuality = () => {
  qualityCheck.forEach((el) => {
    if (el.checked) {
      finalImg = el.value;
    }
  });
};

const splitLink = ($link) => {
  const url = $link.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  const id = url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
  createThumb(id);
};

const changeCanvas = () => {
  switch (finalImg) {
    case "mqdefault":
      canvasW = 320;
      canvasH = 180;
      break;
    case "hqdefault":
      canvasW = 480;
      canvasH = 360;
      break;
    case "sddefault":
      canvasW = 640;
      canvasH = 480;
      break;
    case "maxresdefault":
      canvasW = 1280;
      canvasH = 720;
      break;
    default:
      canvasW = 120;
      canvasH = 90;
      break;
  }
};

const createThumb = (a) => {
  changeCanvas();
  canvas.width = canvasW;
  canvas.height = canvasH;
  if (!finalImg == "" && !a == "") {
    const fimg = new Image();
    linkImg = `https://img.youtube.com/vi/${a}/${finalImg}.jpg`;
    fimg.src = linkImg;
    fimg.onload = () => {
      ctx.drawImage(fimg, 0, 0, canvasW, canvasH);
    };
  }
};

const labelClassRemove = () => {
  for (i = 0; i < qualityLabel.length; i++) {
    qualityLabel[i].classList.remove("active");
  }
};

const buttonLogic = (stats) => {
  fetchBtn.style.pointerEvents = stats ? "all" : "none";
  stats
    ? fetchBtn.classList.add("active")
    : fetchBtn.classList.remove("active");
};

qualityLabel.forEach((label, index) => {
  label.addEventListener("click", function () {
    if (!youtubeLink.value == "") {
      labelClassRemove();
      label.classList.add("active");
      buttonLogic(true);
      fetchBtn.textContent = "Fetch Thumbnail";
    }
  });
});

fetchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  checkQuality();
  splitLink(youtubeLink.value);
  buttonLogic(false);
  outputBox.style.display = "block";
  this.textContent = "Select Other Size";
  outputBoxAnim();
});
