const input = document.querySelectorAll(".input");
const box = document.querySelectorAll(".box");
const btn = document.querySelector("#btn");

btn.addEventListener("click",function(){


    for(let i=0; i<box.length; i++){
        box[i].style.backgroundColor = input[i].value;
    }

})
