const input = document.querySelector('#input')
const ul = document.querySelector ('#ul')
const btn = document.querySelector('#button')
// worked w Dennis, Mandy, and Vonds

const clearList = document.querySelector('#byeByeList')
// const popUpPress = document.querySelector('.crossOut').


function makeToDo (event){
  event.preventDefault()
  if(input.value === '') return
  const li = document.createElement('li')
  li.innerText = input.value
  ul.appendChild(li)
  li.className='line'
  input.value = ''
  countTasks()
}

function crossOut (e){
  if(e.target.classList.contains('line')){
  e.target.classList.toggle('crossOut')
  countTasks()
  }
  if(e.target.classList.contains('crossOut') === false) {
    randoPopUp()
  }
}

function eliminateAll(){
  ul.className = 'remove'
  ul.classList.toggle('remove')
  ul.innerText =''
  countTasks()
}
btn.addEventListener('click', makeToDo)
ul.addEventListener('click', crossOut)
clearList.addEventListener('click', eliminateAll)

function countTasks(){
  tasks = 0
  document.querySelectorAll('.line').forEach(li => tasks++)
  document.querySelectorAll('.crossOut').forEach(element => tasks--)
  if(tasks > 1){
    document.getElementById('tasksLeft').innerText = `You have ${tasks} tasks left to complete.`
  } 
   else if(tasks == 1) {
    document.getElementById('tasksLeft').innerText = `You have ${tasks} task left to complete.`
   }
}

function randoPopUp() {
  const image = document.createElement('img')
  const randoNumber = Math.ceil(Math.random()*2) ;
  if(randoNumber === 1) {
    image.src = 'meanPhotoOne.png';
  } else {
    image.src = 'meanPhotoThree.png' ;
  }
  document.querySelector('#popUp').appendChild(image) ; 
  setTimeout(function(){document.querySelector('img').remove();}, 4000)

}