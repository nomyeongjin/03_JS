/* break 확인 */
function check1(){
    
    for (let i=1; i<=10; i++){
        console.log(i);
        if(i==5){
            break;
        }
    }
}

/* 무한 반복하는 while문 멈추기 */
function check2(){
    let i=1;
    while(true){
    // true일때 반복실행
    
        console.log(i++);

        if(i>10){
            break;
        }
    }
}

/* continue 확인하기 */
function check3(){

    /* 1부터 20까지 출력. 단, 3의 배수는 건너뛰기 */
    for(let i=1;i<=20;i++){
        
        if(i%3==0){
            continue;
        }
        console.log(i);
    }

}

/* 
    1부터 30까지 1씩 증가하며 출력
    단, 홀수 또는 10의 배수는 건너뛰기
*/
function check4(){
    for(i=1; i<=30; i++){
        if(i%2!=0 || i%10==0){
            continue;
        }
        console.log(i);
    }

}

/* 0~9까지 5줄 출력 */
// 각 줄에서 4의 배수는 건너뛰기
// 3번째 줄 출력 후 멈추기
function check5(){
    
    for(let row=1; row<=5; row++){
        

        let str="";
        for(i=0;i<=9;i++){
           /* 0을 제외한 4의 배수는 빼고 */
            if(i!=0 && i%4==0){
                continue;
            }
           /* 빈 문자열에 누적 후 */
            str += i;
            
        } 
        /* 출력 (한줄로 나옴) 01235679 */
        console.log(str);
        /* 3줄일때 반복문을 빠져나옴 */
        if(row==3){
            break;
        }
    }
}

// ----------------------------------------------------------------
/* UP/Down Game */

function startGame(){
     
    // 1~100사이 난수
    const randomNumber = Math.floor(Math.random() *100)+1;

    // 숫자를 입력한 횟수 (정답 시도 횟수)
    let count = 0;

    // prompt에 작성되어질 문자열
    let str = "1~100사이 숫자를 입력해주세요."
    
    

    while(true){//무한 반복
    
    // prompt를 이용해서 값 입력 받기
    // -> 확인 : 입력한 값, 취소 : null
    let input = prompt(str);


    // 취소를 누른 경우 -> "게임 포기"알림을 띄운 뒤 반복 종료
    if(input===null){
        alert("게임 포기");
        break;
    }

    // 확인을 누른 경우 숫자로 변환
    // NaN (Not a Number) : 숫자가 아니다를 나타내는 값

    input = Number(input);
    // input 에는 입력한 숫자 || NaN이 대입됨

    // NaN인 경우 다시 입력받게 하기
    // -> isNaN(변수/값) : 변수/값이 NaN이면 true, 아니면 false 반환
    if(isNaN(input)){
        alert("숫자만 입력해주세요.");
        continue;
    }
    
    if(input==0 || input==""){
        alert("숫자를 입력해주세요")
        continue;
    }


    // --------------------------------------------------------------
    /* 정상입력(숫자 입력)한 경우 */
    // 정답 시도 횟수를 1증가
    count++
   

    // 입력한 값이 난수와 같다면
    // 정답!! (입력한 값) / count : 정답횟수
    if(randomNumber==input){
        alert(`정답!! (${input}) / count : ${count}`);
        break;
    }

    // 입력한 값이 난수보다 큰 경우
    // [Down] (입력한 값) / count : 정답횟수
    // 문자열을 str에 대입 후 다음 반복으로 이동
    if(randomNumber<input){
        str=`[DOWN] (${input}) / count : ${count}`;
    }

    // 입력한 값이 난수보다 작은 경우
    // [UP] (입력한 값) / count : 정답횟수
    // 문자열을 str에 대입 후 다음 반복으로 이동

    
    else{
        str=`[UP] (${input}) / count : ${count}`;
    }

}
}