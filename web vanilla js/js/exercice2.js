const nameInput = document.getElementById("nameInput")
const ajouterBtn = document.querySelector("#ajouterBtn")
const listUl = document.querySelector("#listUl")

ajouterBtn.addEventListener("click",()=>{
    let value = nameInput.value
    // verification
    if(!value)
        return alert("name is required ")
    // creer les elements
    const item = document.createElement("li")
    item.innerText=value
    //liaison
    listUl.appendChild(item)
    //vider input
    nameInput.value=""

})