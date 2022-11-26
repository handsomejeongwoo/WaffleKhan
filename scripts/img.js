const img1 =
  "http://127.0.0.1:5500/imgs/%EB%B0%B1%EA%B7%B8%EB%9D%BC%EC%9A%B4%EB%93%9C1.jpg";
const img2 =
  "http://127.0.0.1:5500/imgs/%EB%B0%B1%EA%B7%B8%EB%9D%BC%EC%9A%B4%EB%93%9C2.jpg";
const img3 =
  "http://127.0.0.1:5500/imgs/%EB%B0%B1%EA%B7%B8%EB%9D%BC%EC%9A%B4%EB%93%9C3.jpg";
const imgArray = [img1, img2, img3];
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
let i = 0;

leftButton.addEventListener("click", () => {
  let boximg = document.getElementById("boximg");
  if (i === 0) {
    i = 2;
    boximg.src = imgArray[i];
  } else {
    i--;
    boximg.src = imgArray[i];
  }
});
rightButton.addEventListener("click", () => {
  let boximg = document.getElementById("boximg");
  console.log(i);
  if (
    imgArray[i] ===
    `http://127.0.0.1:5500/imgs/%EB%B0%B1%EA%B7%B8%EB%9D%BC%EC%9A%B4%EB%93%9C${
      i + 1
    }.jpg`
  ) {
    console.log("sex ");
    i++;
    console.log(i, "i++");
    if (i >= 3) {
      i = 0;
    }
    boximg.src = imgArray[i];
  }
});
