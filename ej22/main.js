let p = document.getElementById("p");
let btn = document.getElementById("btn");
function text() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((res) => (p.innerHTML = res.value));
}
text();


