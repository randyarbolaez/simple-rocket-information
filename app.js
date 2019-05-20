let title = document.querySelector('title');
let nameOfRocket = document.getElementById('name-of-rocket');
let configurationOfRocket = document.getElementById('configuration-of-rocket');
let imageOfRocket = document.getElementById('image-of-rocket');
///////////////

fetch('https://launchlibrary.net/1.3/rocket')
  .then(res => res.json())
  .then(res => {
    let randomRocket =
      res.rockets[Math.floor(Math.random() * res.rockets.length)];
    ////////////////////////
    title.innerHTML = randomRocket.name;
    nameOfRocket.innerHTML = `<a href="${
      randomRocket.wikiURL
    }" target="_blank">${randomRocket.name}</a>`;
    configurationOfRocket.innerHTML = `Configuration - ${
      randomRocket.configuration
    }`;
    if (randomRocket.imageURL) {
      imageOfRocket.innerHTML = `<img src="${
        randomRocket.imageURL
      }" width="350"  height="350" alt="Rocket Image" />`;
    } else {
      imageOfRocket.innerHTML = `<img src="img/no-image.png" width="350"  height="350" alt="No Image " />`;
    }
  });
