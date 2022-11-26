import { generateId } from './generateId'
import './styles.css'
const button = document.querySelector('.btnGenerate') as HTMLButtonElement
const slider = document.querySelector('#slider') as HTMLInputElement
const quantityInput = document.querySelector('#quantity') as HTMLInputElement
const checkNumbers = document.querySelector('#onlyNums') as HTMLInputElement
const checkHyphen = document.querySelector('#hyphen') as HTMLInputElement
const ids = document.querySelector('#ids') as HTMLDivElement

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
  let generatedIds: string = ''

  if (quantity !== 1 && quantity < 11) {
    for (let i = 0; i < quantity; i++) {
      generatedIds += `<h1 id='generatedId'>${generateId(
        length,
        hyphen,
        onlyNums
      )}</h1>`
    }
    return (ids.innerHTML = generatedIds)
  }
  ids.innerHTML = `<h1 id='generatedId'>${generateId(
    length,
    hyphen,
    onlyNums
  )}</h1>`
})

ids.addEventListener('click', (e) => {
  const generatedId = e.target as HTMLHeadingElement
  navigator.clipboard.writeText(generatedId.innerText)
  const alert = document.createElement('p') as HTMLParagraphElement
  alert.innerText = 'copied'
  alert.classList.add('alert')
  generatedId.appendChild(alert)
  generatedId.classList.add('clipboard')

  setTimeout(() => {
    generatedId.removeChild(alert)
    generatedId.classList.remove('clipboard')
  }, 300)
})
