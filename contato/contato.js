function animacao1() {
  const input1 = document.querySelector('.input1')
  const label1 = document.querySelector('.label1')
  input1.addEventListener('click', () => {
    label1.style.transform = "translateY(-10px)"
    label1.style.transition = ".3s"
    label1.style.fontSize = '16px'
    label1.style.color = "#eca316"
  })
}
function animacao2() {
  const input2 = document.querySelector('.input2')
  const label2 = document.querySelector('.label2')
  input2.addEventListener('click', () => {
    label2.style.transform = "translateY(-10px)"
    label2.style.transition = ".3s"
    label2.style.fontSize = '16px'
    label2.style.color = "#eca316"
  })
}
const input3 = document.querySelector('.input3')
const label3 = document.querySelector('.label3')
const inputId3 = document.getElementById('inputId3')
function animacao3() {
    input3.addEventListener('click', () => {
      document.body.removeEventListener('click', teste())
      label3.style.transform = "translateY(-10px)"
      label3.style.transition = ".3s"
      label3.style.fontSize = '16px'
      label3.style.color = "#eca316"
    })
  }



animacao1()
animacao2()
animacao3()