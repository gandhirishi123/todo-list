document.getElementById('sb').addEventListener('click',fun1)



function fun1(){
var a = document.getElementById('task').value
document.getElementById('card').innerHTML += `
<td>
    <div class="card" style="width: 18rem;">
        <h5 class="card-title">${a}</h5>
        <div class="card-body" id="date"><p>${new Date()}</p>
        </div>
    </div>
</td> `


}


