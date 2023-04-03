            function getAndupdate(){
                console.log("updating list...");
                tit=document.getElementById('title').value;
                desc=document.getElementById('description').value;
                if(localStorage.getItem('itemsJson')==null){
               itemJsonArray=[];
               itemJsonArray.push([tit,desc]);
               localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
             } 
             else{
                itemJsonArrayStr=localStorage.getItem('itemsJson')
                itemJsonArray=JSON.parse(itemJsonArrayStr);
                itemJsonArray.push([tit,desc]);
                localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
             }
             update();
            }
            function update(){
                if(localStorage.getItem('itemsJson')==null){
               itemJsonArray=[];
               localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
             } 
             else{
                itemJsonArrayStr=localStorage.getItem('itemsJson')
                itemJsonArray=JSON.parse(itemJsonArrayStr);
             }
              let tablebody = document.getElementById("tablebody");
              let str ="";
               itemJsonArray.forEach((element , index) => {
                str+=`
                <tr>
                    <th scope="row">${index+1}</th>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
                  </tr>`;
               });
                tablebody.innerHTML = str; 
            }
            add= document.getElementById("add");
            add.addEventListener("click",getAndupdate);
            update();
            function deleted(itemindex){
                console.log("Delete",itemindex);
                itemJsonArrayStr= localStorage.getItem('itemsJson')
                itemJsonArray=JSON.parse(itemJsonArrayStr);
                itemJsonArray.splice(itemindex,1);
                localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
                update();
            }
            function clearstorage(){
                if(confirm("do u really want to clear list??")){
                    console.log("clearing the storage");
               localStorage.clear(); 
               update();
                }
            }
        