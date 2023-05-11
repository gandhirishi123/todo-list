document.getElementById('sb').addEventListener('click',fun1)

var Todos = [ 
    {title:'Todo 1', date:'Jan23'}
]
function addData(){
    let msg = document.getElementById('task').value
    let currentdate= new Date()
    
    let datatoadd={
        title:msg,
        date:currentdate
    }

    Todos.unshift(datatoadd)
    fun1()
}

function fun1(){
   
    for(let i =0;i<Todos.length;i++){
    document.getElementById('card').innerHTML = ``
    document.getElementById('card').innerHTML += `
        <div class="col">
            <div class="card">
                <h6 id="index"></h6>
                <h5 class="card-title">${Todos[i].title}</h5>
                <div class="card-body" id="date"><p>${Todos[i].date}</p>
                <button class="btn btn-danger" onClick="deletecard(${i})">Delete</button>
                </div>
            </div>
        </div>`
    
}
}

function deletecard(index){
    console.log(`e`)
    if(confirm('Are you sure')){
        Todos.splice(index, 1)
        fun1()
    }
}

// document.getElementById('button-close').addEventListener('click',fun2)

// function fun2(card){
//     card.remove();
// }
