

const addbtn = document.getElementById("Add-btn");

addbtn.addEventListener('click', () =>{

    const textInput = document.getElementById("taskInput");
    const textTask = textInput.value.trim();

    if(textTask !== ""){
        const li = document.createElement("li");
        li.innerText = textTask;

        // Creat remove Button with list
       const removebtn = document.createElement("button");
       removebtn.innerText = "-";
       removebtn.classList.add("child-btn")

       removebtn.addEventListener("click", () =>(li.remove()));                 //remove functionality

       li.appendChild(removebtn);

        document.getElementById("task-list").appendChild(li);

    }

textInput.value = "";
})


