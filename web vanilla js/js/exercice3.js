const firstNameInput = document.getElementById("firstNameInput")
const lastNameInput = document.getElementById("lastNameInput")
const validerBtn = document.getElementById("validerBtn")
const tbody = document.getElementById("tbody")

validerBtn.addEventListener("click",()=>{
    let firstName = firstNameInput.value
    let lastName = lastNameInput.value
    if(!firstName || !lastName)
        return alert("first name and last name are required")

    const ligne = document.createElement("tr") // table row
    const td1 = document.createElement("td")// table Data
    const td2 = document.createElement("td")// table Data

    ligne.appendChild(td1)
    ligne.appendChild(td2)

    tbody.appendChild(ligne)

    td1.innerText = firstName
    td2.textContent = lastName

    td2.classList.add("X")
    ligne.setAttribute("style","background-color: azure;")

    firstNameInput.value=""
    lastNameInput.value=""
})