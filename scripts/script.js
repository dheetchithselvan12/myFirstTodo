

// Toggle Theme
const modebtn = document.getElementById("dl-btn");
modebtn.addEventListener("click",() => {
    document.body.classList.toggle("dl-theme");
})

const addbtn = document.getElementById("Add-btn");

addbtn.addEventListener('click', () =>{

    const textInput = document.getElementById("taskInput");
    const textTask = textInput.value.trim();

    if(textTask !== ""){
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = textTask

        // Creat remove Button with list
       const removebtn = document.createElement("button");
       removebtn.textContent = "-";
       removebtn.classList.add("child-btn");
       removebtn.addEventListener("click", () =>(li.remove()));                 //remove functionality

    //    create Edit button with list
    const editbtn = document.createElement("buttion");
    editbtn.textContent = "Edit";
    editbtn.classList.add("child-btn");
    editbtn.addEventListener("click", () => {

        const inputEdit = li.querySelector("input");

        if(!inputEdit){                                    // edit Button functionality

            const span = li.querySelector("span");
            const modifyText = document.createElement("input");
            modifyText.value = span.textContent;
            li.insertBefore(modifyText, span);
            li.removeChild(span);
            editbtn.textContent = "Save";

        }
        else {

            const newspan = document.createElement("span");
            newspan.textContent = inputEdit.value;
            li.insertBefore(newspan, inputEdit);
            li.removeChild(inputEdit);
            editbtn.textContent = "Edit";
        }

    });

    // All child elements are added to list
       li.appendChild(span)
       li.appendChild(removebtn);
       li.appendChild(editbtn);
       


       
       const text = document.getElementById("task-list");
       text.insertBefore(li, text.firstElementChild);


    }

    textInput.value = "";
});


