const container = document.querySelector(".container")
const number = document.querySelectorAll(".number")
const clickNumber = document.querySelector("#clickNumber")
const btn = document.querySelector("#btn")


    
for(let i=0;i<number.length;i++){

    number[i].addEventListener("click",e=>{
       
        // if(clickNumber.innerText.length==10)return;
        if(clickNumber.innerText.length<10){
            
            // console.log(number[i].innerText);
            clickNumber.innerText += number[i].innerText
        }else{alert("10자까지 작성 가능")}
    })
    
}

btn.addEventListener("click",()=>{
    clickNumber.innerText="";

})


    
