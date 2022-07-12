const body = document.getElementsByTagName("body")[0]; 
const myinput =document.getElementById('myinput');
const container =document.getElementById('container');


const app ={
    list : [],
    isDone : false,
    add : function(todotext){
        this.list.push({
            id : Date.now(),
            text : todotext
        })
        this.render()
    },
    remove : function(id ){
        this.list = this.list.filter(todo => todo.id !== id)
        this.render()
    },
 
    render : function(){
        container.innerHTML =""
        this.list.forEach(todo =>{
            container.innerHTML +=`
            <div id="parent" class="d-flex justify-content-between padding-8px align-items-center border-radius-8px w-32  bg--div-text margin-bottom-1rem margin-right-1rem">
            <div class="mt-2 ms-1">
                <p class="text-white">${todo.text}</p>
            </div>
            <div class="d-flex gap-3 me-2">
                <button id="ButtonDone" onClick="clickButtonDone()" class="text-dark bg-green border-none border-radius-8px font-weight-bold h-DONE-DELETE-button w-DONE-button">DONE</button>
                <button onClick="clickButtonDelete(${todo.id})" class="text-white bg-red border-none border-radius-8px font-weight-bold h-DONE-DELETE-button w-DELETE-button">DELETE</button>
            </div>
        </div>
           
            `
        })

    }
}


function clickButtonDone() {
    isDone = true;
    if (isDone==true) {
        ButtonDone.innerText = "UNDO"
    
    }
    
}


function clickbuttonadd() {
    if (myinput.value) {
        app.add(myinput.value)
        myinput.value = ""
    }
    
}

function clickButtonDelete(id) {
    app.remove(id)
    
}


body.addEventListener('keypress', (e) =>{
  if ((e.key === 'Enter')) {

    clickbuttonadd()
  }
   
})


