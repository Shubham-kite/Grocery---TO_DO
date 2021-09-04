let inputfiled=document.getElementById("inputfield");
let add=document.getElementById("add");
let todocontainer=document.getElementById("todocontainer");
add.addEventListener
("click",function()
    {
        let value = document.createElement('p');    //created runtime p tag so that we can add data
        value.classList.add("values");
        value.innerText = inputfiled.value;         //input value get stored in value
        todocontainer.appendChild(value);
        inputfiled.value = " ";
        value.addEventListener
        ("click" ,function()
            {
                value.style.textDecoration="line-through";
            }
        );
        value.addEventListener("dblclick",function()
            {
                todocontainer.removeChild(value);
            } 
        )   
    
    }
)