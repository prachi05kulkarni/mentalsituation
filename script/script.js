const { useInteractionManager } = require("@react-native-community/hooks");

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
};

let cartItem = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

login.onclick = () => {
  searchForm.classList.remove("active");
};

//how to send password through email to the user?
window.open("mailto:test@example.com");

window.open("mailto:test@example.com?subject=subject&body=body");

// Load the Azure Face API client library
const faceApi = require("azure-cognitiveservices-face");

// Initialize the client with your API key and endpoint
const client = new faceApi.FaceClient(
  new faceApi.ApiKeyCredentials({
    inHeader: { "Ocp-Apim-Subscription-Key": "YOUR_API_KEY" },
  }),
  "YOUR_ENDPOINT"
);

// Capture an image from the user's camera
const captureImage = () => {
  const video = document.getElementById("video");
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Call the Azure Face API to detect mood
  client.face
    .detectWithStream(canvas.toDataURL(), { returnFaceAttributes: ["emotion"] })
    .then((result) => {
      // Get the mood data from the API response
      const emotion = result[0].faceAttributes.emotion;

      // Update the webpage with the mood data
      const moodElement = document.getElementById("mood");
      moodElement.innerHTML = `Mood: ${getMaxEmotion(emotion)}`;
    })
    .catch((error) => {
      console.error(error);
    });
};

// Helper function to get the max emotion from the emotion data
const getMaxEmotion = (emotion) => {
  const emotions = [
    "anger",
    "contempt",
    "disgust",
    "fear",
    "happiness",
    "neutral",
    "sadness",
    "surprise",
  ];
  const maxEmotion = emotions.reduce((a, b) =>
    emotion[a] > emotion[b] ? a : b
  );
  return maxEmotion.charAt(0).toUpperCase() + maxEmotion.slice(1);
};

// Set up the video stream and call the captureImage function
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    const video = document.getElementById("video");
    video.srcObject = stream;
    video.play();
    setInterval(captureImage, 5000); // Capture an image every 5 seconds
  })
  .catch((error) => {
    console.error(error);
  });
