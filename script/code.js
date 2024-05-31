
let dataEntry = document.querySelector('[data-entry]')


function display(value) {
    dataEntry.value += value
} 

function clearDisplay() {
    dataEntry.value = ""; 
}

let PriceMark = document.getElementById('PriceMark').TEXT_NODE;

let quantity1 = document.querySelector(".quantity") 
let quantity2 = document.querySelector(".quantity1") 
let output = document.querySelector(".output")
let output2 = document.querySelector(".output2")
let grandtotal = document.querySelector(".grandtotal")
let numb1;
let numb2;

quantity1.addEventListener("change",() => {
  // console.log(quantity1.value);
  numb1 = eval(150.95 * quantity1.value).toFixed(2)
  output.innerText = eval(150.95 * quantity1.value).toFixed(2)

})

quantity2.addEventListener("change",() => {
  numb2 = eval(180.95 * quantity2.value).toFixed(2) 
  output2.innerText = eval(180.95 * quantity2.value).toFixed(2) 
})

function calculate() {
  // console.log(typeof numb1);
  // console.log(typeof numb2);
  let answer = (+numb1) + (+numb2)
  grandtotal.innerText = answer.toFixed(2)
}