// attribuer aux different elements des ids
// recuperer ces elements en js
let btnPlus = document.querySelector("#btnPlus")
let btnMoin = document.querySelector("#btnMoin")
let labelNbr = document.querySelector("#label")
let input = document.querySelector("#input")
let x = 0
// configurer les events
btnPlus.addEventListener("click",()=>{
    x = x + Number(input.value)
    labelNbr.innerText = x
})
btnMoin.addEventListener("click",()=>{
    x = x - Number(input.value)
    labelNbr.innerText = x
})