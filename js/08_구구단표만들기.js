function createTable(){

    //시작 단
    const start = Number(document.getElementById("start").value);
  
    //종료 단
    const end = Number(document.getElementById("end").value);

    // 단 (제목)이 작성되는 행 요소(tr 태그)
    const thRow = document.getElementById("thead-row")

    // 구구단(내용)이 작성되는 영역 (tbody 태그)
    const tbody = document.getElementById("tbody")


   thRow.innerHTML = ""; // 초기화
   

//----------------------------------------------------------

    // start부터 end까지 1씩 증가
    for(let dan=start; dan<=end; dan++){
        thRow.innerHTML += `<th>${dan}단</th>`;
    }
   
    
//----------------------------------------------------------

    tbody.innerHTML = ""; // 초기화
   
    // 곱해지는 수(또는 n번째 줄)
    for(let num=1; num<=9; num++){

        let str = "<tr>";
           
        for(let dan=start; dan<=end; dan++){
                str += `<td>${dan} X ${num} = ${dan * num}</td>  `;
               
            }
            
            str +="</tr>"
            tbody.innerHTML += str
        
    }
    
}