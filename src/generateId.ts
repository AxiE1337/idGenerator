const numbersArr = '123456789'.split('')
let characters: string = '123456789@abcdefghijklmnopqrstuvwxyz'

const textArea = document.querySelector('#textarea') as HTMLTextAreaElement
textArea.innerHTML = characters
textArea.addEventListener('input', (e) => {
  const value = (e.target as HTMLTextAreaElement).value
  characters = value
})

const idNoLetters = () => {
  const index: number = Math.floor(Math.random() * (numbersArr.length - 0) + 0)
  return numbersArr[index]
}
const idAll = () => {
  const arr = characters.split('')
  const isCapital: boolean = !!Math.round(Math.random() * (1 - 0) + 0)
  const index: number = Math.floor(Math.random() * (arr.length - 0) + 0)
  if (isCapital) {
    return arr[index].toLocaleUpperCase()
  }
  return arr[index]
}

export const generateId = (
  length: number,
  hyphen: boolean,
  letters: boolean
) => {
  let id: string = ''
  for (let i = 0; i < length; i++) {
    const each4 = (i + 1) % 4
    if (letters) {
      id += idNoLetters()
    } else {
      id += idAll()
    }
    if (!each4 && hyphen) {
      const lastLetter = +length === i + 1
      if (!lastLetter) {
        id += '-'
      }
    }
  }
  return id
}
