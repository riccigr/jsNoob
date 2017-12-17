class ListaNegociacoes {

  constructor() {
      this._negociacoes = [];
  }

  adiciona(negociacao){
      this._negociacoes.push(negociacao);
  }

  get negociacoes(){
      return [].concat(this._negociacoes);
  }

  esvazia(){
      return this._negociacoes = [];
  }

  get volumeTotal(){
      return this._negociacoes.reduce((total , item) => total + item.volume, 0.0);
  }
}
