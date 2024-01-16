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

let money = 10000;
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
          alert(`${am}원이 출금 되었습니다. 남은 잔액 : ${money}원`)
       
        }else{
                
          alert("출금 금액이 잔액보다 클 수 없습니다")
            
        }
      
      } else {
        
        alert("비밀번호가 일치하지 않습니다");
      
      }
    }

}