const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector("#p2");
const input = document.querySelector("input");

console.log(input.value);

console.log({
    h1,
    p,
    p1,
    p2,
    input,
});

h1.innerHTML= "Colossus"; // Inserta codigo HTML y es peligroso porque otros pueden insertar codigo malicioso
h1.innerText = "Champion"; // Solo inserta texto, es mas seguro. 

//console.log (h1.getAttribute("class"));
//h1.setAttribute("class", "vil");

h1.classList.add("rojo");
h1.classList.remove("val");
//h1.classList.toggle("val");
//h1.classList.contains("val");

input.value ="456";
console.log(document.createElement("img"));

const img = document.createElement("img");
img.setAttribute("src", "assets/pr.jpg");
console.log(img);

p2.append(img);