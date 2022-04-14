

// присваивания
let buttonToDo = document.querySelector('.button')
let inputToDo = document.querySelector('.input-text')
let newList =  document.querySelector('.list')
//
let buttonSort = document.querySelector('.button-sort-list-one')


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
   let deleteButton = createDeleteButton()  
   newElDivContainer.append(deleteButton);
}

function createDeleteButton(){
   let deleteButton = document.createElement('div')
   deleteButton.classList.add('delete-button')
   deleteButton.addEventListener('click', clickDleletButton)
   return deleteButton
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
   } else {
      let listToSort = document.querySelectorAll('.list__container-el')
      arrayList.sort(compareList);
      console.log(arrayList);
      console.log(listToSort);
      
      listToSort.forEach((el, i , arr)=> {
         arr[i].innerHTML = '';
         arr[i].innerHTML= arrayList[i];
         arr[i].innerHTML.classList
         let deleteButton = createDeleteButton(); 
         el.append(deleteButton);
      })
      buttonSort.classList = buttonSort.classList == 'button-sort-list-one' 
      ? 'button-sort-list-two' 
      : 'button-sort-list-one'
      }
   }

function compareList(a,b){
   return buttonSort.classList == "button-sort-list-one"
   ? a < b
   ? -1
   : a > b
   ? 1
   : 0

   : a < b
   ? 1
   : a > b
   ? -1
   : 0;
}
