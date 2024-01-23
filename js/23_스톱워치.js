const display = document.querySelector("#display");

const list = document.querySelectorAll("#display>span");

const startBtn = document.querySelector("#startBtn");
const recordBtn = document.querySelector("#recordBtn");
const resetBtn = document.querySelector("#resetBtn");
const recordContainer = document.querySelector("#recordContainer");


let count = 0; // 1/100 초 마다 1씩 증가한 값을 저장할 변수

// 1/100 초 자리 : count % 100
// 1초           : count / 100 % 60
// 1분           : count / 100 / 60

let currInterval; //인터벌 저장 변수

/* START 버튼 클릭 시 10ms 마다 display(시간)을 증가 */
startBtn.addEventListener("click",(e)=>{
    
    // 클릭한 버튼에 작성된 내용이 "PAUSE"인 경우
    if(e.target.textContent == "PAUSE"){
        e.target.textContent = "START";

        window.clearInterval(currInterval);
        return;
    }

    // 클릭한 버튼에 작성된 내용이 "START"인 경우
    currInterval = window.setInterval(()=>{
        count++ // count 1 증가
        //document.querySelectorAll("#display>span")[2].innerText = count;
        outPut(); // 화면에 시간 출력

    },10); //10ms

    // e.target.disabled=true;
    e.target.textContent = "PAUSE";
    

});

/* 시계 출력 함수 */
function outPut(){
    let minute = Math.floor(count/ 100 / 60);
    let second = Math.floor(count / 100 % 60);
    let ms = count % 100;

    // 0 붙여서 문자열로 변환 후 반환
    minute = attachZero(minute);
    second = attachZero(second);
    ms = attachZero(ms);

    //console.log(minute,second,ms);

    // minute 의 값과 화면에 출력된 분이 다를 경우
    if(list[0].innerText != minute)list[0].innerText = minute;
    
    // second의 값과 화면에 출력된 초가 다를 경우
    if(list[1].innerText != second)list[1].innerText = second;

    list[2].innerText = ms;


}

/* 한 자리 숫자인 경우 앞에 0 붙여서 반환하는 함수 */
function attachZero(num){
    if(num<10){//한 자리 수
        return "0" +num;

    }

    return "" + num;

}

/*  RESET 버튼이 클릭 되었을 때 */
resetBtn.addEventListener("click", (e)=>{
    
    window.clearInterval(currInterval);

    //count, 출력된 시간 모두 0으로
    count = 0;
    outPut();

    // // start 버튼 활성화 (==비활성화 안함)
    // startBtn.disabled=false;
    
    //START 버튼의 내용을 "START"로 변경
    startBtn.textContent = "START";

    // recordContainer 내용 삭제 (== 빈 문자열 변경)
    recordContainer.innerHTML = "";
    
    

})

/* 요소.textContent 와 요소.innerText */

// textContent를 이용해 요소에 작성된 내용 얻어오기
// -> HTML 파일에 작성된 내용 형태(단, 태그 빼고) 그대로 얻어옴
//    (띄어쓰기, 엔터 포함 ex. /n)

// innerText를 이용해 요소에 작성된 내용 얻어오기
// -> 브라우저 화면에 보이는 형태(단, 태그 빼고)를 얻어옴

/* RECORD 버튼 클릭시 */
recordBtn.addEventListener("click",()=>{

    if(startBtn.textContent == "START"){
        recordBtn.disabled = false;
        return;
    }

    // li 요소 생성
    const li = document.createElement("li");

    // #display에 출력된 시간을 얻어와 대입
    li.innerText = display.innerText;

    // #recordContainer의 첫 번째 자식으로 li 추가
    recordContainer.prepend(li);

})