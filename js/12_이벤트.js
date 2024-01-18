/* 인라인 이벤트 모델 확인 */
function check1(btn){

    // 매개 변수 : 함수 호출 시 () 내부에 작성된 값을
    //             전달 받아 저장하는 변수

    // 매개 변수 btn == 클릭한 버튼(this)
    console.log(btn);

    // 버튼의 배경색을 얻어와 저장
    const bgColor = btn.style.backgroundColor;

    // 처음에는 inline-style로 지정된 배경색이 없어서 ""(빈칸)
    console.log(bgColor);


    if(bgColor == "yellow"){
        btn.style.backgroundColor = "pink"
    }else{
        btn.style.backgroundColor ="yellow"
    }
}

// -------------------------------------------------

/* 고전 이벤트 모델 확인 */

// 아이디가 test1-1인 요소를 얻어와 test1a변수에 저장
const test1a = document.querySelector("#test1-1");

/* *** 고전 이벤트 모델 작성법 */
// 요소.이벤트리스너 = 이벤트 핸들러
/* ****************************** */

test1a.onclick = function(){
    alert("고전 이벤트 모델 확인 버튼 클릭")
}

/* 고전 이벤트 모델 제거 */

// #test1-2 버튼 클릭 시
// #test1-1의 onclick 이벤트 리스너의 이벤트 핸들러 제거하기

document.querySelector('#test1-2').onclick = function(){

    // 기존 onclick의 이벤트 핸들러를
    // null로 덮어 씌움 (이벤트 제거)
    document.querySelector('#test1-1').onclick = null;
    alert("이벤트 제거됨");
}

/* 고전 이벤트 모델 단점 */

// #test1-2 요소를 얻어와 test1c 변수에 저장
const test1c = document.querySelector("#test1-3");

// #test1-2 요소가 클릭 되었을 때
// 배경색을 red로 변경

test1c.onclick = function(){
    test1c.style.backgroundColor="red";
}

// ...6개월 후...
// #test1-3이 클릭 되었을때 글자색을 "white"로 변경
test1c.onclick = function(){
    test1c.style.color = "White"
}

// -> onclick에 저장된 값이 덮어 씌워지면서
// 이전 코드 (배경색)가 사라지는 문제 발생


//------------------------------------------------------

/* 표준 이벤트 모델 확인 */
const test2 = document.querySelector("#test2");

/* *** 표준 이벤트 모델 작성법 *** */

// 요소.addEventListener("이벤트 종류"),이벤트 핸들러

/* ****************************************************** */

test2.addEventListener("click",function(){
    // 투명도 1(불투명) -> 0(투명) 0.01씩 줄이기
    
    //현재 #test2의 투명도 확인
    let curr = test2.style.opacity;

    // 맨처음에는 투명도 '' -> 1대입
    if(curr==''){
        test2.style.opacity = 1;
        curr =1;
    }

    // 투명도 0.01 감소
    test2.style.opacity = curr-0.01

    if(test2.style.opacity <0){
        test2.style.opacity=1;
    }
});

/* $test2 요소를 클릭하면 클릭 쇡수 카운트 */

let count = 0;

test2.addEventListener("click",function(){
    count++ // count 1 증가

    /* 표준 이벤트 모델의 이벤트 핸들러 안에서 this == 이벤트가 발생한 요소 */
    this.innerText = count;

})

/* 입력한 색상으로 배경색 변경하기 */
const box3 = document.querySelector("#box3");
const input3 = document.querySelector("#input3");
const btn3 = document.querySelector("#btn3");

btn3.addEventListener("click",function(){

    box3.style.backgroundColor = input3.value;

});

/* #input3에서 엔터 입력시(key 관련 이벤트) 배경색 변경 */

input3.addEventListener("keyup",function(e){

    // e: 이벤트 객체 (발생한 이벤트에 대한 정보를 담은 객체)
    // e.key : 입력된 키 
    if(e.key=="Enter"){
        box3.style.backgroundColor=input3.value;
    }
})

/* #box3를 클릭하면 현재 배경색을 alert로 출력 */
box3.addEventListener("click",function(e){
    // e : 이벤트 객체
    //  e.target : 이벤트가 발생한 대상 요소 (이벤트 발생 요소)

    alert(`배경색 : ${e.target.style.backgroundColor}`)
})