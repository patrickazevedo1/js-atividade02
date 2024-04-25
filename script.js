const listaFilmes = []
const data = new Date()
const anoAtual = data.getFullYear()

class Filme {
  constructor(titulo, nota, anoLancamento) {
    this.titulo = titulo
    this.nota = this.validarNota(nota)
    this.anoLancamento = this.validarAnoLancamento(anoLancamento)
  }

  validarNota(nota) {
    if (nota >= 0 && nota <= 10) {
      return nota
    } else {
      console.log('A nota deve ser entre 0 e 10. Atribuindo o valor 0 como padrão.')
      return 0
    }
  }

  validarAnoLancamento(anoLancamento) {
    if (anoLancamento >= 1880 && anoLancamento <= anoAtual) {
      return anoLancamento
    } else {
      console.log('Ano de lançamento inválido. Atribuindo o ano 2000 como padrão.')
      return 2000
    }
  }

  get detalhes() {
    return `${this.titulo} (${this.anoLancamento}) - Nota: ${this.nota}`
  }
}

const titulo = prompt('Digite o nome do filme:')
const nota = parseFloat(prompt('Digite a nota do filme (de 0 a 10):'))
const anoLancamento = parseInt(prompt('Digite o ano de lançamento do filme:'))
const meuFilme = new Filme(titulo, nota, anoLancamento)
listaFilmes.push(meuFilme)

console.log(meuFilme)
console.log(listaFilmes)
console.log(meuFilme.detalhes)