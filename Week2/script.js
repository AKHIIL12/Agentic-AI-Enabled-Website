function addTask(){

    let input=document.getElementById("taskInput");

    let task=input.value.trim();

    let msg=document.getElementById("message");


    if(task===""){

        msg.innerText="Task cannot be empty";

        msg.className="error";

        return;
    }


    let li=document.createElement("li");



    let span=document.createElement("span");

    span.innerText=task;



    let edit=document.createElement("button");

    edit.innerText="Edit";



    edit.onclick=function(){

        let newTask=prompt("Edit Task",span.innerText);


        if(newTask!==null && newTask.trim()!==""){

            span.innerText=newTask;

        }

    };



    let del=document.createElement("button");

    del.innerText="Delete";


    del.onclick=function(){

        li.remove();

    };



    li.appendChild(span);

    li.appendChild(edit);

    li.appendChild(del);



    document.getElementById("taskList").appendChild(li);



    msg.innerText="Task Added Successfully";

    msg.className="success";



    input.value="";

}