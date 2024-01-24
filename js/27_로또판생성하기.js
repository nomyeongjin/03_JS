const btn = document.querySelector('#btn');
const lottoBoard = document.querySelector("#lottoBoard");


// #createBtn 버튼 클릭 시
// #lottoBoard에 div.number 요소 45개 생성해서 추가하기
btn.addEventListener("click",()=>{

    // #lottoBoard 이전 내용 삭제
    lottoBoard.innerHTML = "";
    
    for(let i=1; i<46;i++){
        const number=document.createElement("div");
        number.classList.add("number") // 클래스 추가

        number.textContent = i;

        // 만들어진 div.number에 클릭 시 동작 추가
        number.addEventListener("click", e=>{
            // console.log(e.target.textContent);

            // active 클래스 없으면 -> 추가
            // active 클래스 있으면 -> 제거

            //화면에 선택된 요소가 6개 이하일 경우
            // 또는
            // 클릭한 요소에 active 클래스가 있을 경우
            const count = document.querySelectorAll(".active").length;
            // console.log(count);


            /* 
                요소.class.contains(클래스명)
                요소에 (클래스명)이 존재하면 true, 아니면 false
            */
        //    if(e.target.classList.contains("active")){
        //     e.target.classList.remove("active")
        //    }else{
        //     e.target.classList.add("active")
        //    }
        // })
        

        if(count<=5 || e.target.classList.contains("active")){ 
                
        /* 요소.classList.toggle(클래스명) :
            요소에 (클래스명)이 있으면 제거, 없으면 추가
        */

            e.target.classList.toggle("active")
        
        }else{
            alert("6개 이하만 선택 가능합니다.")

        }
        
            
       
        });
        lottoBoard.append(number); // 화면에 추가
   
    }
});