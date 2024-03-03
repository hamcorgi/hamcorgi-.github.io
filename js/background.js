const img = ["img/1.jpg", "img/2.jpg", "img/3.jpg"];

const chooseImg = img[Math.floor(Math.random() * img.length)];

document.body.style.backgroundImage = `url(${chooseImg})`;