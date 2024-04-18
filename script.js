const listaFilmes = []
const data = new Date()
const ano = data.getFullYear()

class Filme {
    constructor(titulo, nota, anoLancamento) {
      this.titulo = titulo
      if (nota >= 0 && nota <= 10) {
        this.nota = nota
      } else {
        console.log('A nota deve ser entre 0 e 10. Atribuindo o valor 0 como padrão.')
        this.nota = 0
      }
      if (anoLancamento >= 1880 && anoLancamento <= ano) {
        this.anoLancamento = anoLancamento
      } else {
        console.log('Ano de lançamento inválido. Atribuindo o ano 2000 como padrão.')
        this.anoLancamento = 2000
      }
    }
  
    atribuirNovaNota(novaNota) {
      if (novaNota >= 0 && novaNota <= 10) {
        this.nota = novaNota
        return `Atribuindo nova nota...`
      } else {
        console.log("A nota deve estar entre 0 e 10.")
      }
    }

    atribuirNovoAno(novoAno) {
        if (novoAno >= 1880 && novoAno <= ano) {
            this.anoLancamento = novoAno
        } else {
            return
        }
    }
  
    get detalhes() {
      return `${this.titulo} (${this.anoLancamento}) - Nota: ${this.nota}`
    }
}

const meuFilme = new Filme('Peter Pan', 12 , 1700)

listaFilmes.push(meuFilme)
console.log(meuFilme)
console.log(meuFilme.atribuirNovaNota(10))
console.log(listaFilmes)
console.log(meuFilme.detalhes)