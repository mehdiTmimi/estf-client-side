const URL = "http://localhost:3000/users"
const getAllUsers = () => fetch(URL)
    .then(response => response.json())
    .then(data => data.users)
const addUser = (user) =>fetch(URL, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(async response => {
        if (response.status >= 200 && response.status < 300)
            return {
                state : true,
                data : await response.json()
            }

        return {
            state : false,
            data : await response.json()
        }
    })
module.exports = {
    addUser, getAllUsers
}