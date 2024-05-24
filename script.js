let btn = document.getElementById("btn");
let div = document.getElementById("result");

btn.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      div.innerHTML = `<img src="${data.message}" alt="Random Dog Image" style="width:400px">`;
    })
    .catch((error) => console.log(error));
});

document.body.appendChild(div);
