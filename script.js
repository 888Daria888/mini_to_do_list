

// присваивания
let buttonToDo = document.querySelector('.button')
let inputToDo = document.querySelector('.input-text')
let newList =  document.querySelector('.list')
//
let buttonSort = document.querySelector('.button-sort-list-one')


let formList = document.querySelector('.form')

let arrayList = [] //массив списка задач

// слушатели
buttonToDo.addEventListener('click', (e) => {clickButtonToDo(e)});
document.addEventListener('keydown', (e)=>{
   if (e.key == 'Enter'){
      clickButtonToDo(e)
   } else{
      return
   }
});
buttonSort.addEventListener('click', (e) => {clickButtonSort()});



// функции
function clickButtonToDo(e){
e.preventDefault()
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
function addTask(newTaskk){
   let newElDivContainer =  document.createElement('div')
   newList.append(newElDivContainer);
   newElDivContainer.classList.add('list__container-el')
   newElDivContainer.setAttribute('draggable','true')
   newList.addEventListener(`dragstart`, (e) => {
      e.target.classList.add(`selected`);
   });
   newList.addEventListener(`dragend`, (e) => {
      e.target.classList.remove(`selected`);
   });

   newList.addEventListener(`dragover`, (e) => {
      e.preventDefault();
      const activeElement = newList.querySelector(`.selected`);
      const currentElement = e.target;
      const isMoveable = activeElement !== currentElement &&
      currentElement.classList.contains(`list__container-el`);
      if (!isMoveable) {
         return;
      }
      const nextElement = (currentElement === activeElement.nextElementSibling) 
      ? currentElement.nextElementSibling 
      : currentElement;
      newList.insertBefore(activeElement, nextElement);
   });

   const getNextElement = (cursorPosition, currentElement) => {
      const currentElementCoord = currentElement.getBoundingClientRect();
      const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;
      const nextElement = (cursorPosition < currentElementCenter)
      ? currentElement 
      : currentElement.nextElementSibling;
      return nextElement;
   };

   newList.addEventListener(`dragover`, (e) => {
      e.preventDefault();
      const activeElement = newList.querySelector(`.selected`);
      const currentElement = e.target;
      const isMoveable = activeElement !== currentElement &&
      currentElement.classList.contains(`list__container-el`);
      if (!isMoveable) {
      return;
      }
      const nextElement = getNextElement(e.clientY, currentElement);
      if (
      nextElement && 
      activeElement === nextElement.previousElementSibling ||
      activeElement === nextElement
      ) {
         return;
      }
      newList.insertBefore(activeElement, nextElement);
   });


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
      
      listToSort.forEach((el, i , arr)=> {
         arr[i].innerHTML = '';
         arr[i].innerHTML= `<div class = "el-text">${arrayList[i]}</div>`
         console.log(arr[i]);
         
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
