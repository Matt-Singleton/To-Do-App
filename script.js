var today = new Date()


const clear = document.querySelector(".clear");
const list = document.getElementById("list");
const input = document.getElementById("input");


document.getElementById('date').innerHTML= today.toLocaleDateString('en-gb');

function addToDo(toDo) {
    const text =    `<li class="item">
                        <i class="tick-circle"></i>
                        <p class="text">${toDo}</p>
                        <i class="delete-trash"></i>
                    </li>`

const position = "beforeend";    

list.insertAdjacentHTML(position, input);
}



