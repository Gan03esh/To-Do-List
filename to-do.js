let inputs=document.getElementById("inp");
let text=document.querySelector(".text");

function Add(){
    if(inputs.value==""){
        alert("Please enter the task")
    }else{
        let newele=document.createElement("ul");
        newele.innerHTML=`${inputs.value}<i class="fa-solid fa-trash-can"></i>`;
        text.appendChild(newele);
        inputs.value="";
        newele.querySelector("i").addEventListener("click",remove);
        savedata();
        function remove(){
            newele.remove()
            savedata();
        }
    }
}
function savedata(){
    localStorage.setItem("data", container.innerHTML);
}
function showTask(){
    container.innerHTML=localStorage.getItem("data");
}
showTask();
