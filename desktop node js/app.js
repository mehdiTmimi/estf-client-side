// fetch
/*
fetch("http://localhost:3000/users/3")
.then(response=>response.json())
.then(data=>{
    console.log(data)
})
/*.then(async response=>{
    console.log(response.status)
    console.log(response.statusText)
    console.log(response.headers.get("content-type"))
    console.log(await response.json())
})*/
//.catch(e=>console.error(e))

const scanf = require("scanf")
const { getAllUsers, addUser } = require("./queries")
const menu = ()=>{
    console.log("-------Menu-------")
    console.log("1- lister")
    console.log("2- ajouter")
    console.log("3- quiter")
    return scanf("%d")
}
const main = async ()=>{

    let choice;
    do{
       choice = menu()
       switch (choice) {
        case 1:
            console.log("liste des users")
            let users = await getAllUsers()
            console.table(users)
            break;
        case 2:
            let id,nom,prenom,age
            console.log("donnez id")
            id = scanf("%d")
            console.log("donnez prenom")
            prenom = scanf("%s")
            console.log("donnez nom")
            nom = scanf("%s")
            console.log("donnez age")
            age = scanf("%d")
            let res = await addUser({id,nom,prenom,age})
            if(res.state)
                console.log("success")
            else
                console.log("echec")
            break;
        case 3:
            console.log("au revoir !")
            break;
       
        default:
            console.log("incorrect choice !")
            break;
       }
    }while(choice!=3)
}
main()