class ListaNegociacoes {

  constructor() {
      this._negociacoes = [];
  }

  adiciona(negociacao){
      this._negociacoes.push(negociacao);
  }

  esvazia(){
      return this._negociacoes = [];
  }

  ordena(criterio){
      this._negociacoes.sort(criterio);
  }

  inverteOrdem(){
      this._negociacoes.reverse();
  }

  get negociacoes(){
      return [].concat(this._negociacoes);
  }

  get volumeTotal(){
      return this._negociacoes.reduce((total , item) => total + item.volume, 0.0);
  }
}
