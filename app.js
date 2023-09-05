const input=document.querySelector('input')
const ol=document.querySelector('ol')
let todoarry=[]
function addtodo() {
   
    if (input.value=="") {
        alert('first enter input')
    } else {
        todoarry.push(input.value)
       ol.innerHTML=''
       for (let i = 0; i<todoarry.length; i++) {
      const list = todoarry[i];
       ol.innerHTML +=`<li> ${list}</li>
       <button onclick="deletetext(${i})">delete</button>
       <button onclick="edittext(${i})">edit</button>`
       } 
    }
    
    input.value=''
    
}


function render(){
    ol.innerHTML=''
       for (let i = 0; i<todoarry.length; i++) {
      const list = todoarry[i];
       ol.innerHTML +=`<li> ${list}</li>
       <button onclick="deletetext(${i})">delete</button>
       <button onclick="edittext(${i})">edit</button>`
       } 
}


function deletetext(index){
    todoarry.splice(index,1)
    render()
}


function edittext(index) {
    const textchange= prompt('enter edited value')
    todoarry.splice(index,1,textchange)
    render()
}