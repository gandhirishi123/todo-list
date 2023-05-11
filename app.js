document.getElementById('sb').addEventListener('click',addData)

var Todos = [ 
    {title:'TODO 1', date:'Jan23'}
]
function addData(){
    let msg = document.getElementById('task').value
    let currentdate= new Date()
    
    let datatoadd={
        title:msg,
        date:currentdate
    }
    if(msg.length>0){
        Todos.unshift(datatoadd)
        printdata()
        
    }else{
        alert('Please Enter Your TODO!')
    }
    
}

function printdata(){
    document.getElementById('card').innerHTML = ` `
    for(let i =0;i<Todos.length;i++){
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
printdata()

function deletecard(index){
    console.log(`e`)
    if(confirm('Are you sure')){
        Todos.splice(index, 1)
        printdata()
    }
}

// document.getElementById('button-close').addEventListener('click',fun2)

// function fun2(card){
//     card.remove();
// }
