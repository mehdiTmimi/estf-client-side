const URL = "http://localhost:3000/users"
const tbody = document.getElementById("tbody")
const submitBtn = document.getElementById("submitBtn")
submitBtn.addEventListener("click",()=>{
    let id = document.getElementById("idInput").value
    let nom = document.getElementById("nomInput").value
    let prenom = document.getElementById("prenomInput").value
    let age = document.getElementById("ageInput").value
    // verification
    let user = {
        id,nom,prenom,age
    }
    showLoading()
    fetch(URL,{
        method:"POST",
        body: JSON.stringify(user),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(response=>{
        if(response.status>=200 && response.status<300)
            addUserToTable(user)
        else
            alert("problem")
    })
    .catch(e=>{
        console.error(e)
        alert("problem")
    })
    .finally(()=>hideLoading())
})
const loadData = ()=>{
    showLoading()
    fetch(URL)
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        data.users.forEach(element => addUserToTable(element));
    })
    .catch(e=>{
        console.error(e)
    }).finally(()=>{
        hideLoading()
    })
}
const addUserToTable = (user)=>{
    const tr=document.createElement("tr")
    const td1=document.createElement("td")
    const td2=document.createElement("td")
    const td3=document.createElement("td")
    const td4=document.createElement("td")
    const td5=document.createElement("td")
    const buttonDelete=document.createElement("button")

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    td5.appendChild(buttonDelete)
    
    tbody.appendChild(tr)

    td1.textContent = user.id
    td2.textContent = user.nom
    td3.textContent = user.prenom
    td4.textContent = user.age
    buttonDelete.textContent="delete"
    buttonDelete.addEventListener("click",()=>{
        showLoading()
        fetch(URL+"/"+user.id,{
            method:"DELETE"
        })
        .then(response=>{
            if(response.status>=200 && response.status<300)
                tr.remove()
            else
                alert("problem")
        })
        .catch(e=>{
            console.error(e)
            alert("problem")
        }).finally(()=>hideLoading())
       
    })
}
//addUserToTable({id:1,nom:"tmimi",prenom:"mehdi",age:32})
const showLoading = ()=>{
    document.querySelector(".loadingDiv img").classList.remove("hide")
}
const hideLoading = ()=>{
    document.querySelector(".loadingDiv img").classList.add("hide")
}
loadData()

/*
CORS policy:
une regle appliquee par le navigateur
si le client est dans l origin : www.client.com
et il va consommer une API qui se trouve dans : www.restapi.com
fetch("www.restapi.com") => envoi de request vers www.restapi.com depuis www.client.com
CORS policy : si la response/reponse n autorise pas son exploitation par des noms de domaines
different de www.restapi.com . le navigateur va la bloquer
*/