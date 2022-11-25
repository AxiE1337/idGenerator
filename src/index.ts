import { generateId } from './generateId'
import './styles.css'
const button = document.querySelector('.btnGenerate') as HTMLButtonElement
const slider = document.querySelector('#slider') as HTMLInputElement
const quantityInput = document.querySelector('#quantity') as HTMLInputElement
const checkNumbers = document.querySelector('#onlyNums') as HTMLInputElement
const checkHyphen = document.querySelector('#hyphen') as HTMLInputElement
const btnCopy = document.querySelector('#btnCopy') as HTMLButtonElement
const title = document.querySelector('.title') as HTMLHeadingElement

let length: number = 5
let onlyNums: boolean = false
let hyphen: boolean = false
let quantity: number = 1

quantityInput.addEventListener('input', (e) => {
  const target = e.target as HTMLInputElement
  const value = target.value
  const label = target.nextSibling.nextSibling as HTMLLabelElement

  quantity = Number(value)
  label.innerText = `Generate ${quantity}?`
})

slider.addEventListener('input', (e) => {
  const target = e.target as HTMLInputElement
  const value = target.value
  const label = target.nextSibling.nextSibling as HTMLLabelElement

  length = Number(value)
  label.innerHTML = 'Length ' + value
})

checkNumbers.addEventListener('change', (e) => {
  const target = e.target as HTMLInputElement
  onlyNums = target.checked
})
checkHyphen.addEventListener('change', (e) => {
  const target = e.target as HTMLInputElement
  hyphen = target.checked
})

button.addEventListener('click', () => {
  let text: string = ''
  if (quantity !== 1 && quantity < 11) {
    for (let i = 0; i < quantity; i++) {
      text += generateId(length, hyphen, onlyNums) + '</br>'
    }
    return (title.innerHTML = text)
  }
  title.innerHTML = generateId(length, hyphen, onlyNums)
})

btnCopy.addEventListener('click', () => {
  navigator.clipboard.writeText(title.innerText)
  const alert = document.createElement('p') as HTMLParagraphElement
  alert.innerText = 'copied'
  alert.classList.add('alert')
  title.appendChild(alert)

  setTimeout(() => {
    title.removeChild(alert)
    return () => {
      console.log('3424')
    }
  }, 300)
})
