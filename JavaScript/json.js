// fetch info from JSON
fetch("json.JSON").then(
    response => {
        return response.json()
    }
).then(
    responseJSON => {
        console.log(responseJSON)
        console.log(responseJSON.userName)
        console.log(responseJSON.password)
        console.log(responseJSON.serverIP)
    }
)

// fetch info from API
fetch("https://jsonplaceholder.typicode.com/posts").then(
    response2 => {
        return response2.json()
    }
).then(
    responseJSON2 => {
        console.log(responseJSON2)

        let userDOM = document.querySelector("#userList")
        responseJSON2.forEach(item => {
            let liDOM = document.createElement('li')
            liDOM.innerText = item.title
            userDOM.append(liDOM)
        });
    }
)