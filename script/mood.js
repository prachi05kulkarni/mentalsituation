function detectEmotion() {
  const face = document.querySelector(".face");
  const mouth = document.querySelector(".mouth");
  const eyes = document.querySelectorAll(".eye");

  const randomNum = Math.floor(Math.random() * 3) + 1;

  switch (randomNum) {
    case 1:
      face.style.backgroundColor = "red";
      mouth.style.display = "none";
      eyes.forEach((eye) => (eye.style.backgroundColor = "white"));
      break;
    case 2:
      face.style.backgroundColor = "blue";
      mouth.style.display = "block";
      eyes.forEach((eye) => (eye.style.backgroundColor = "black"));
      break;
    case 3:
      face.style.backgroundColor = "green";
      mouth.style.display = "none";
      eyes.forEach((eye) => (eye.style.backgroundColor = "green"));
      break;
  }
}
