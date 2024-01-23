/* a 태그 기본 이벤트 제거 */
document.querySelector("#move").addEventListener("click",e=>{
    // e: 이벤트 객체


    // e.preventDefault() : 요소의 기본 이벤트 막기 (제거)
    // prevent : 하지 못하게 막다
    // default : 기본, 기본 값
    e.preventDefault();
})

/* form 기본 이벤트 제거 */

/* 방법 1 : e.preventDefault() 사용 방법 */

// input 요소들이 하나라도 작성되지 않은 경우 제출 못하게 막기
document.inputForm.addEventListener("submit",e=>{

    // #form의 자식 input 요소만 얻어오기
    const inputList = document.querySelectorAll("#form>input");
    for(let i=0;i<inputList.length;i++){

        // 작성 안된 input이 있으면 
        if(inputList[i].value.trim().length == 0){
            e.preventDefault(); // form 제출 막기
            alert("작성되지 않은 input이 존재합니다.")
            inputList[i].focus();
            return;
        }
        
    }
})

const onsubmitTest = () =>{

    const radio = document.querySelector("[name='submitRadio']:checked")
    if(radio==null)return false;
    
    if(radio.value=="O")return true;
    return false;

};

/* 방법 3) 일반 버튼 클릭 시 form 태그 제출/막기 */

document.querySelector("#btn3").addEventListener("click",()=>{
    const input = document.querySelector("#inputTest")

    if(input.value.trim().length>0){ //값을 작성한 경우

        document.inputForm3.submit();

    }

})