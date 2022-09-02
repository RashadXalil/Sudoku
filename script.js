const modeSwitch = document.getElementById('candidate-switch')
const keyboardKeys = document.getElementsByClassName('number-control')
const controlNums = document.getElementById('number-control')
const board = document.getElementById('board')
const candidatesWrapper = document.getElementsByClassName('candidates')
const normalNumberValue = document.getElementsByClassName('given-number')
const valueBoxes = document.querySelectorAll('td:not(.given-number)')
let mode = 1 // normal 2-conmode
let box = ''
let num = 1
let valueSpan = ''
let condidateSpan = ''
for (let i = 0; i < valueBoxes.length; i++) {
  valueBoxes[i].addEventListener('click', function (e) {
    box = this
    condidateSpan = box.firstElementChild
    valueSpan = box.lastElementChild
    box.classList.add('selected')
    return box
  })
}
function getValue() {
  for (let i = 0; i < keyboardKeys.length; i++) {
    keyboardKeys[i].addEventListener('click', function (e) {
      num = Number.parseInt(e.target.innerHTML)
      setValue()
      box.classList.remove('selected')
      return num
    })
  }
}
getValue()
function getMode() {
  modeSwitch.addEventListener('change', function () {
    if (modeSwitch.checked == false) {
      mode = 1
    } else {
      mode = 2
    }
  })
}
getMode()
function setValue() {
  if (mode == 1) {
    valueSpan.innerHTML = num
  } else {
    if (condidateSpan.innerHTML.includes(num)) {
      let string = condidateSpan.innerHTML
      let array = []
      for (let index = 0; index < string.length; index++) {
        array.push(string[index])
      }
      let target = array.find((x) => x == num)
      let targetIndex = array.indexOf(target)
      array.splice(targetIndex, 1)
      let inner = ''
      for (let i = 0; i < array.length; i++) {
        inner += array[i]
      }
      condidateSpan.innerHTML = inner
    } else {
      condidateSpan.innerHTML += num
    }
  }
}
