const { getAllUsers, addUser } = require("./queries");

getAllUsers().then(data => data.forEach(user => console.log(user.id, user.nom, user.prenom, user.age)))
addUser({id:111,nom:"tmimi",prenom:"mehdi",age:32}).then(result => console.log(result)).catch(e => console.error(e))