

// присваивания
let buttonToDo = document.querySelector('.button')
let inputToDo = document.querySelector('.input-text')
let newList =  document.querySelector('.list')
//
let buttonSort = document.querySelector('.sort-image')


let formList = document.querySelector('.form')

let arrayList = [] //массив списка задач

// слушатели
buttonToDo.addEventListener('click', (e) => {clickButtonToDo()});
buttonSort.addEventListener('click', (e) => {clickButtonSort()});
// document.addEventListener('keydown', (e)=>e.key == enter)



// функции
function clickButtonToDo(){
   if (inputToDo.value == " " || inputToDo.value == ""){
   console.log('Error. Not a text');
      return
   } else {
      arrayList.push(inputToDo.value)
      addTask(inputToDo.value) // rererr
      newList.style.display = 'block'
      inputToDo.value=''
   }
}
//let inputToDo.value = 'rerere';
//визуал 
function addTask(newTaskk){
   //let newTask = inputToDo.value (rererr)
   let newElDivContainer =  document.createElement('div')
   newList.append(newElDivContainer);
   newElDivContainer.classList.add('list__container-el')
   let newElDiv =  document.createElement('div')
   newElDiv.innerText= newTaskk;
   newElDivContainer.append(newElDiv);
   newElDiv.classList.add('el-text')
   newElDiv.style.margin = '10px'
   newElDiv.style.maxWidth = '222px'
   newElDiv.style.wordBreak = "break-all"
   creartDeleteButton(newElDivContainer)   
}

function creartDeleteButton(newElDivContainer){
   let deleteButton = document.createElement('div')
   deleteButton.classList.add('delete-button')
   newElDivContainer.append(deleteButton);
   deleteButton.addEventListener('click', clickDleletButton)
}


function clickDleletButton(){
   let newElDivThis = this.closest('.list__container-el')
   newElDivThis.remove();
   let str = newElDivThis.innerText;
   let elIndex = arrayList.indexOf(str);
   arrayList.splice(elIndex, 1)
   if (newList.innerText == ''){
      newList.style.display = 'none'
   }
}


function clickButtonSort(){
   if (newList.innerText == ''){
      return
   } else{
      let buttonSortChild = buttonSort.children
      let listOne = document.querySelector('.button-sort-list-one')
      let listTwo = document.querySelector('.button-sort-list-two')
      console.log(buttonSortChild);
      
      buttonSortChild.classList = buttonSortChild.classList == listOne ? listTwo : listOne
      if(buttonSortChild.classList == listOne){
         listTwo.style.display ='none'
         listOne.style.display = 'block'
      }
      if (buttonSortChild.classList == listTwo){
         listTwo.style.display ='block'
         listOne.style.display = 'none'
         // arrayList.sort()
         // compareList(arrayList)
      }
      // console.log(arrayList);
      
   }
}
   
// listToSort.forEach((el, i , arr)=> {
//    arr[i]=""
//    arr[i]= arrayToDo[i];
//    let deleteButton = creartDeleteButton();
//    el.append(deleteButton)
// })
// }

// function compareList(a,b){
//    if(a>b) return 1;
//    if(a=b) return 0;
//    if(a<b) return -1;
// }
