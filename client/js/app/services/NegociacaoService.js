class NegociacaoService {

    constructor(){
        this._http = new HttpService();
    }

    obterNegociacoesSemana(){
        return new Promise((resolve, reject) => {
            this._http
                .get('negociacoes/semana')
                .then( objeto  => {
                    resolve(objeto.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(err => {
                    console.log(err);
                    reject('Não foi possível importar as negociações da semana.');
                });
        });
    }

    obterNegociacoesAnterior(){

        return new Promise((resolve, reject) => {
            this._http
                .get('negociacoes/anterior')
                .then( objeto  => {
                    resolve(objeto.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(err => {
                    console.log(err);
                    reject('Não foi possível importar as negociações da semana anterior.');
                });
        });
    }

    obterNegociacoesRetrasada(){

        return new Promise((resolve, reject) => {
            this._http
                .get('negociacoes/retrasada')
                .then( objeto  => {
                    resolve(objeto.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(err => {
                    console.log(err);
                    reject('Não foi possível importar as negociações da semana retrasada.');
                });
        });

    }

}
