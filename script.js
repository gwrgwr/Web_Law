const teste = document.querySelectorAll('p')

teste.forEach((e) => {
  if(e.innerHTML === 'a') {
    e.classList.add('desapareca')
  }
})

const img = document.querySelectorAll('.title-flex-perguntas-imagens img')
const divOfImg = document.querySelectorAll('.title-flex-perguntas-imagens')
const p = document.querySelectorAll('.faq p')

console.log(p)
function accordList() {
  if(this.parentElement.parentElement.children[1].classList.contains('p-ativo')) {
    this.parentElement.parentElement.children[1].classList.remove('p-ativo')
  } else {
    this.parentElement.parentElement.children[1].classList.add('p-ativo')
  }
}

img.forEach((item) => {
  item.addEventListener('click', accordList)
})