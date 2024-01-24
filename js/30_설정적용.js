const width = document.querySelector("#width");
const height = document.querySelector("#height");
const fontSize = document.querySelector("#fontSize");
const fontColor = document.querySelector("#fontColor");
const bgc = document.querySelector("#bgc");

const btn = document.querySelector("#btn");

const outputContainer = document.querySelector("#outputContainer");


btn.addEventListener("click",()=>{
    const input = document.querySelector("#input");
    
    if(input.value.trim().length==0){
        alert("출력 문자열이 비어있습니다.")
        return;
    }
    
    outputContainer.innerText = input.value // 글자 출력
    
    outputContainer.style.width = width.value+"px"; // 박스 너비
    outputContainer.style.height = height.value+"px"; //박스 높이
    outputContainer.style.fontSize = fontSize.value+"px"; // 글자 크기
    
    outputContainer.style.color = fontColor.value; // 글자색 출력
    outputContainer.style.backgroundColor = bgc.value; //배경색 출력
    
    //글씨 굵게
    const weight = document.querySelector("[name='weight']:checked")
    // 만약 weight의 value가 null이 아닐 경우 outputContainer.style.fontWeight에 weight.value 대입
    if(weight.value=="normal"){
        outputContainer.style.fontWeight="normal" // 보통
        
    }
    else if(weight.value=="bold"){
        outputContainer.style.fontWeight= "bold"//굵게

    }
    
    //가로 정렬
    const col = document.querySelector("[name='col']:checked")
    if(col.value=="left"){
        outputContainer.style.justifyContent="left" //왼쪽
        
    }
    else if(col.value=="center"){
        outputContainer.style.justifyContent= "center"//센터

    }
    else if(col.value=="right"){
        outputContainer.style.justifyContent="right" //오른쪽

    }

    //세로 정렬
    const row = document.querySelector("[name='row']:checked")
    if(row.value=="flex-start"){
        outputContainer.style.alignItems="flex-start" //위
        
    }
    else if(row.value=="center"){
        outputContainer.style.alignItems= "center"//센터

    }
    else if(row.value=="flex-end"){
        outputContainer.style.alignItems="flex-end" //아래

    }



})