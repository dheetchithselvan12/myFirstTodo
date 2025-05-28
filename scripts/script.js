

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

    //    check task done

    let check = document.createElement("button");
    check.innerHTML = "<i class='bx bx-radio-circle'></i> ";
    check.classList.add("check-btn");

    // check and uncheck ----- 28 may 2025 - 10:39
    let checked = false;
    check.addEventListener("click", () => {

        const currentspan = li.querySelector("span");  // This will hold the current value from span element and it helps to check and uncheck before and after edit. 
        
        checked = !checked
        check.innerHTML = checked ? "<i class='bx bx-radio-circle-marked'></i>" : "<i class='bx bx-radio-circle'></i> ";
        currentspan.style.textDecorationLine = checked ? "line-through" : "none";
        currentspan.style.opacity = checked ? "0.4" :"1";

    });


    //    create Edit button with list

    const editbtn = document.createElement("buttion");
    editbtn.textContent = "Edit";
    editbtn.classList.add("child-btn");
    editbtn.addEventListener("click", () => {

        const inputEdit = li.querySelector("input");
        const currentspan = li.querySelector("span");    //created at 28 may 2025  

        if(!inputEdit){                                    // edit Button functionality
            const modifyText = document.createElement("input");
            modifyText.value = currentspan.textContent;
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


            
            newspan.style.textDecorationLine = checked ? "line-through" : "none";
            newspan.style.opacity = checked ? "0.4" : "1";


            li.replaceChild(newspan, inputEdit);
            span = newspan;


            // edit after task done


        }

    });

    // All child elements are added to list
       li.appendChild(check)
       li.appendChild(span)
       li.appendChild(removebtn);
       li.appendChild(editbtn);
       


       
       const text = document.getElementById("task-list");
       text.insertBefore(li, text.firstElementChild);


    }

    textInput.value = "";
});


