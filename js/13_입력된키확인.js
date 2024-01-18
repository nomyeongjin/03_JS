// 화면에 존대하는 key 모두 얻어오기

const keys = document.querySelectorAll(".key");

//특정 요소X
//문서(화면 전체)에서 키가 눌러지는 걸 감지
document.addEventListener("keydown",function(e){
    // e: 이벤트 객체(이벤트 관련 정보가 모두 담겨있음)
    // e.key
    let idx; // 인덱스 값을 저장할 변수

    // 문자열.toLowerCase() : 영어를 모두 소문자로 변경
    // 문자열.toUpperCase() : 영어를 모두 대문자로 변경

    switch(e.key.toLowerCase()){
        case 'q' : idx=0; break;
        case 'w' : idx=1; break;
        case 'e' : idx=2; break;
        case 'r' : idx=3; break;
        default : return; // 함수종료

    }

    // idx 번호와 일치하는 keys 배열의 요소의 배경색을 변경
    keys[idx].style.backgroundColor = "#d6ccc2";

    
    

})

document.addEventListener("keyup",function(e){
    switch(e.key.toLowerCase()){
        case 'q' : idx=0; break;
        case 'w' : idx=1; break;
        case 'e' : idx=2; break;
        case 'r' : idx=3; break;
        default : return; // 함수종료

    }

    keys[idx].style.backgroundColor = "#ffffff";
})