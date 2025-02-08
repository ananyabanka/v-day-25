// create variables to store the path to your image files
const img1 = "./lego-1.jpg";


const img2 = "./lego-2.jpg";

const img3 = "./lego-3.jpg";

const img5 = "./lego-5.png";

// define your images here
const images = [ img1,img2, img3, img5];

// // this chooses a random number from all available image indices
// var randomImage = images[Math.floor(Math.random() * images.length)];
// // make the URL into a proper image tag
// var image = "<img src='" + randomImage + "'>";
// // append to the div
// document.getElementById("valentines-container").innerHTML = image;

// const refreshButton = document.getElementById('refreshButton');

// refreshButton.addEventListener('click', function() {
//   location.reload();
// });

// Function to load a random image
function loadRandomImage() {
    var randomImage = images[Math.floor(Math.random() * images.length)];
    var image = `<img src="${randomImage}" alt="Valentine's LEGO">`;
    document.getElementById("valentines-container").innerHTML = image;
}

// Run the function when the page loads
window.onload = loadRandomImage;

// Add event listener to refresh button
document.getElementById("refreshButton").addEventListener("click", loadRandomImage);
