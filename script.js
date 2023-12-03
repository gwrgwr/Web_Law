const teste = document.querySelectorAll('p')

teste.forEach((e) => {
  if(e.innerHTML === 'a') {
    e.classList.add('desapareca')
  }
})

const entrar = document.querySelector('.bg-blue button')
const bgBlue = document.querySelector('.bg-blue')
const bgTrans = document.querySelector('.bg-transparent')
const newBgBlue = document.querySelector('.divFormChangedBlue')
const newBgTrans = document.querySelector('.divFormChangedTransparent')
const divForms = document.querySelector('.divForms')
const barra = document.querySelector('.linhaBranca')
entrar.addEventListener('click', () => {
  if(divForms.classList.contains('ativar')) {
    divForms.classList.remove('ativar')
    bgBlue.remove(bgBlue.children)
    bgTrans.remove(bgTrans.children)
    barra.before(newBgBlue)
    barra.after(newBgTrans)
    newBgBlue.style.display = 'flex'
    newBgTrans.style.display = 'flex'
  }
})

const registrar = document.querySelector('.divFormChangedBlue button')
registrar.addEventListener('click', () => {
  divForms.classList.add('ativar')
  divForms.replaceChild(bgTrans, newBgTrans)
  divForms.replaceChild(bgBlue, newBgBlue)
  barra.after(bgBlue)
  barra.before(bgTrans)
})

console.log(registrar)


