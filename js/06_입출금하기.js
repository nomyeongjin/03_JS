/* prompt 사용 연습 */

function test(){

    const password = prompt("비밀번호를 입력하세요");
  
    // 확인 -> 입력한 문자열
    // 취소 -> null
  
    if(password == null){ // 취소
      alert("취소");
    
    } else{ // 확인
       
      // 입력한 비밀번호가 '1234'가 맞는지 확인
      if(password == '1234'){
        alert("비밀번호 일치");
     
      } else {
        alert("비밀번호가 일치하지 않습니다");
      }
    }
  
}

// ------------------------------------------------------------------------

let money = 0;
const amount = document.getElementById("amount") //input
const balance = document.getElementById("balance") //innerText



function deposit(){ // 입금
    const am = Number(amount.value)
    money += am;

    balance.innerText = money;

}

function withdrawal(){ // 출금
    const am = Number(amount.value)
    const password = prompt("비밀번호를 입력하세요");

  
    // 확인 -> 입력한 문자열
    // 취소 -> null
  
    if(password == null){ // 취소
      alert("취소");
    
    } else{ // 확인
       
      // 입력한 비밀번호가 '1234'가 맞는지 확인
      if(password == '1234'){
        alert("비밀번호 일치");
        if(!(money<am)){
            money-=am
            balance.innerText = money;
        }else{
                alert("잔액이 부족합니다.")
            }
        
     
      } else {
        alert("비밀번호가 일치하지 않습니다");
      }
    }

}