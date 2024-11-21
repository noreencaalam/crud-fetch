/* 

console.log(fetch('https://pbs.twimg.com/media/GKhGFH_WwAEsGwy.jpg').then(response => {
  console.log(response)  
  return response.blob()
}).then(blob =>{
    console.log(blob)
    document.querySelector('#myImg').src=URL.createObjectURL(blob)
}).catch(error =>{
    console.log(error)
}))

*/
//hash id
//. class

const content = document.querySelector('#content')
const submit = document.querySelector('#submit')

submit.addEventListener("click", () => {
  let fname = document.querySelector('#fname').value
  let lname = document.querySelector('#lname').value 
  let email = document.querySelector('#email').value
  let gender = document.querySelector('#gender').value
  
  //object
  //{'fname,: fname, 'lname: dela cruz'}
  let formData = {fname, lname, email, gender}
  console.log(formData)
  fetch("https://bscs3b-crud-api-yvd4.onrender.com/api/members", {
  //fetch("http://localhost:5002/api/members", {
    method: 'POST',
    body: JSON.stringify(formData),
    headers:{
      'Content-Type': 'application/json',
    }
  
  
  })

//end
})

window.addEventListener("load", () => {
  getUsers();
})

function getUsers(){
  const rand = Math.random() * 20;
  let html = ""
  //fetch("http://localhost:5002/api/members", {mode: "cors"})
  fetch("https://bscs3b-crud-api-yvd4.onrender.com/api/members", {mode: "cors"})
    //fetch("http://ccs105-api.onrender.com/api/members", {mode: "cors"})
    //https://api.sampleapis.com/jokes/goodJokes
    //fetch("https://api.sampleapis.com/jokes/goodJokes", {mode: "cors"})
    
    
    .then((response)=>{
      console.log(response)
      return response.json();
    })
    
    //data start
    .then((data) =>{
      

      data.forEach((element)=>{
        console.log(element.id)
        console.log(Math.floor(rand))
        html += `<li> ${element.first_name} ${element.last_name}</li>`
        // if(element.id == Math.floor(rand)){
        //   html += `<li> ${element.setup} <br>${element.punchline}</li>`
        // }
      })
      content.innerHTML = html
    })
    //data end
    .catch((error) =>{
      console.log(error)
    })
}
