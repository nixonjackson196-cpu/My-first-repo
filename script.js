const taskInput=document.querySelector("#taskInput");
const addBtn=document.querySelector("#addBtn");
const taskList=document.querySelector("#taskList");

addBtn.addEventListener("click", function(){
    const text=taskInput.value;

    if(text===""){
        alert("please type a task first");
    }else{
        const li=document.createElement("li");

        li.textContent=text;
        taskList.appendChild(li);
        taskInput.value="";
    }
});