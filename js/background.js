const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const selectedImage = images[Math.floor(Math.random() * images.length)];
const bg = document.createElement("img");

bg.src = `img/${selectedImage}`;
document.body.appendChild(bg);

