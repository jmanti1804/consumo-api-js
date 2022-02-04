const API_URL = "http://jsonplaceholder.typicode.com";


//Consumir api con xhmlHttpRequest

// const xhr = new XMLHttpRequest();

// function onRequestHandler(){
//     if(this.readyState === 4 && this.status === 200){
//     // 0 = UNSET no se ha llamado al metodo open
//     // 1 = OPENED se ha llamado al metodo open
//     // 2 = HEADER_RECEIVED se esta llamando al metodo send()
//     // 3 = LOADING  esta cargando
//     // 4 = DONE se ha completado la operacion
//     const data = JSON.parse(this.response);
//     const HTMLResponse = document.querySelector('#app');

//     const tpl = data.map(user =>`<li>${user.name} ${user.email} </li>`)
//         HTMLResponse.innerHTML=`<ul>${tpl}</ul>`;
// }
// }

// xhr.addEventListener("load", onRequestHandler);
// xhr.open("GET", `${API_URL}/users`);
// xhr.send();


//Consumir api con fetch
const HTMLResponse = document.querySelector("#app");
const ul = document.createElement('ul');

fetch(`${API_URL}/users`)
.then((response) => response.json())
.then((users) =>{
    users.forEach(user => {
        let elem = document.createElement("li");
        elem.appendChild(
            document.createTextNode(`${user.name} ${user.email}`)
            );
            ul.appendChild(elem);
    });

    HTMLResponse.appendChild(ul);
    // const tpl = users.map(user => `<li>${user.name} ${user.email}</li>`);
    // HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
});