const container = document.querySelector(".container")
const number = document.querySelectorAll(".number")
const outPut = document.querySelector("#outPut")
const reset = document.querySelector("#reset")
const add = document.querySelector("#add")
const phoneList = document.querySelector(".phoneList")


// outPut에 number 누르면 출력
for(let i=0;i<number.length;i++){
    
    number[i].addEventListener("click",e=>{
        
        if(outPut.innerText.length==17)return;

            // console.log(number[i].innerText);
        outPut.innerText += number[i].innerText
    })
    
}

// 요소추가
add.addEventListener("click",e=>{
  if(outPut.innerText.trim().length==0){
    return;
  }
    // 1) div.row 생성
    const row = document.createElement("div");
    row.classList.add("row");

    // 전화번호
    const phoneNumber = document.createElement("span");
    phoneNumber.classList.add("phoneNumber");
    phoneNumber.innerHTML = outPut.innerText;


    // 즐찾 버튼
    const star = document.createElement("span");
    star.classList.add("star");
    star.innerHTML = "☆";

    // 즐찾 색칠
    star.addEventListener("click", e => {

        if(e.target.classList.contains("star")){
            e.target.innerText = "★"
            e.target.classList.remove("star")
            e.target.classList.add("star-active");
            phoneNumber.classList.add("phoneNumber-active")
        }else{
            e.target.innerText = "☆"
            e.target.classList.remove("star-active")
            e.target.classList.add("star");
            phoneNumber.classList.remove("phoneNumber-active")
        }
        
        

    });


    // 삭제 버튼
    const del = document.createElement("span");
    del.classList.add("del");
    del.innerHTML = "&times;";
  

    del.addEventListener("click", e => {
        const parent = e.target.parentElement; // == div.row
        parent.remove();
    });

    row.append(phoneNumber,star,del);
    phoneList.append(row);
    outPut.innerText="";

})


// 초기화
reset.addEventListener("click",()=>{
    outPut.innerText="";

})

// ------------------------------------------
/* 키보드로 눌러서 입력 */
// keydown만 backspace 입력
document.addEventListener("keydown",e=>{
    const num = /^[0-9*#]$/
    if(num.test(e.key)){
        if(outPut.innerText.length==17)return;
        outPut.innerText += e.key;
    }else{
        e.preventDefault();
        return;
    }

    let idx; 

    //키 눌렀을 때 배경색 변경
    switch(e.key){
        case '1' : idx=0; break;
        case '2' : idx=1; break;
        case '3' : idx=2; break;
        case '4' : idx=3; break;
        case '5' : idx=4; break;
        case '6' : idx=5; break;
        case '7' : idx=6; break;
        case '8' : idx=7; break;
        case '9' : idx=8; break;
        case '#' : idx=9; break;
        case '0' : idx=10; break;
        case '*' : idx=11; break;
        default : return; // 함수종료

    }

    // idx 번호와 일치하는 keys 배열의 요소의 배경색을 변경
    number[idx].style.backgroundColor = "#ddd";


    // inline 에서 배경색 요소 제거
    setTimeout(() => {
        number[idx].removeAttribute("style")
    }, 100);
   
    

})



// 키를 떼었을때
document.addEventListener("keyup",e=>{
    if(e.key==='Enter'){
        add.click();

    }
    
    if(e.key==="Backspace"){
        outPut.innerText=outPut.innerText.slice(0, -1);
        
    }

    //let idx; 

    // // 키 떼었을 때 흰색으로 변경
    // switch(e.key){
    //     case '1' : idx=0; break;
    //     case '2' : idx=1; break;
    //     case '3' : idx=2; break;
    //     case '4' : idx=3; break;
    //     case '5' : idx=4; break;
    //     case '6' : idx=5; break;
    //     case '7' : idx=6; break;
    //     case '8' : idx=7; break;
    //     case '9' : idx=8; break;
    //     case '#' : idx=9; break;
    //     case '0' : idx=10; break;
    //     case '*' : idx=11; break;
    //     default : return; // 함수종료

    // }

    // // idx 번호와 일치하는 number 배열의 요소의 배경색을 변경
    // number[idx].style.backgroundColor = "#fff"; 


    // /* CSS 적용 우선 순위 */
    // // inline으로 배경색을 흰색으로 채우는 것이기 때문에
    // // 0.2초 후 제거해주어야
    // // 클래스 스타일에 추가된 hover가 다시 보인다.
    // setTimeout(() => {
    //     number[idx].removeAttribute("style")
    // }, 200);
})
