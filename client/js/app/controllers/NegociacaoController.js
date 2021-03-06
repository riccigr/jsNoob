class NegociacaoController{

  constructor(){
      let $ = document.querySelector.bind(document);

      this._inputData = $('#data');
      this._inputQuantidade = $('#quantidade');
      this._inputValor = $('#valor');
      this._ordemColunaAtual = '';

      this._mensagem = new Bind(
          new Mensagem,
          new MensagemView($("#mensagemView")),
          'texto'
      );

      this._listaNegociacoes = new Bind(
          new ListaNegociacoes(),
          new NegociacoesView($('#negociacoesView')),
          'adiciona','esvazia', 'ordena', 'inverteOrdem'
      );
  }

  adiciona(event){
      event.preventDefault();

      this._listaNegociacoes.adiciona(this._criaNegociacao());
      this._mensagem.texto = "Negociação adicionada com sucesso!";

      this._limpaFormulario();
  }

  apaga(){
      this._listaNegociacoes.esvazia();
      this._mensagem.texto = "Negociação apagadas!";
  }

  importaNegociacoes(){
      let service = new NegociacaoService();

      Promise.all([
          service.obterNegociacoesSemana(),
          service.obterNegociacoesAnterior(),
          service.obterNegociacoesRetrasada()
      ]).then(negociacao => {
                    negociacao
                        .reduce((flatArray, array) => flatArray.concat(array), [])
                        .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                    this._mensagem.texto = 'Negociações foram importadas com sucesso!';
      }).catch(err => this._mensagem.texto = err);
  }

  ordena(coluna){
      if(this._ordemColunaAtual == coluna){
          this._listaNegociacoes.inverteOrdem();
      }else{
          this._listaNegociacoes.ordena((a,b) => b[coluna] - a[coluna]);
      }
      this._ordemColunaAtual = coluna;
  }

  _criaNegociacao(){
      return new Negociacao(
        DateHelper.textoParaData(this._inputData.value),
        this._inputQuantidade.value,
        this._inputValor.value
      );
  }

  _limpaFormulario(){
      this._inputData.value = '';
      this._inputQuantidade.value = 1;
      this._inputValor.value = 0.0;
      this._inputData.focus();
  }

}
