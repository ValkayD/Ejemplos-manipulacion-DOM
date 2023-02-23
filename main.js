const h1 = document.querySelector("h1");
const input = document.querySelector("#iid1");
const input2 = document.querySelector("#iid2");
const btn = document.querySelector("#ctncalcular");
const pR = document.querySelector("#pResult");

btn.addEventListener("click", btnOnClick);

function btnOnClick(){

const sInputs = Number(input.value) + Number(input2.value);
 //   const sinputs= input.value + input2.value;
  pR.innerText = "Resultado: " + sInputs; 
}


