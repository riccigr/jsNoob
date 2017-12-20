class NegociacaoService {

    constructor(){
        this._http = new HttpService();
    }

    obterNegociacoesSemana(){

        return this._http
            .get('negociacoes/semana')
            .then( objeto  => {
                return objeto.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
            })
            .catch(err => {
                console.log(err);
                throw new Error('Não foi possível importar as negociações da semana.');
            });

    }

    obterNegociacoesAnterior(){

        return this._http
            .get('negociacoes/anterior')
            .then( objeto  => {
                return objeto.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
            })
            .catch(err => {
                console.log(err);
                throw new Error('Não foi possível importar as negociações da semana anterior.');
            });
    }

    obterNegociacoesRetrasada(){

        return this._http
            .get('negociacoes/retrasada')
            .then( objeto  => {
                return objeto.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
            })
            .catch(err => {
                console.log(err);
                throw new Error('Não foi possível importar as negociações da semana retrasada.');
            });
    }

}
