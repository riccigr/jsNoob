class NegociacaoService {

    obterNegociacoesSemana(){

        return new Promise((resolve, reject) => {

            const DONE = 4;
            let xhr = new XMLHttpRequest();

            xhr.open('GET', 'negociacoes/semana');
            xhr.onreadystatechange = () => {
                if(xhr.readyState == DONE){
                    if(xhr.status == 200){

                        resolve(JSON.parse(xhr.responseText)
                        .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                    }else{
                        console.log(xhr.responseText);
                        reject('Não foi possível importar as negociações da semana.');
                    }
                }
            };
            xhr.send();
        });
    }

    obterNegociacoesAnterior(){

        return new Promise((resolve, reject) => {

            const DONE = 4;
            let xhr = new XMLHttpRequest();

            xhr.open('GET', 'negociacoes/anterior');
            xhr.onreadystatechange = () => {
                if(xhr.readyState == DONE){
                    if(xhr.status == 200){

                        resolve(JSON.parse(xhr.responseText)
                        .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                    }else{
                        console.log(xhr.responseText);
                        reject('Não foi possível importar as negociações da semana anterior.');
                    }
                }
            };
            xhr.send();
        });
    }

    obterNegociacoesRetrasada(){

        return new Promise((resolve, reject) => {

            const DONE = 4;
            let xhr = new XMLHttpRequest();

            xhr.open('GET', 'negociacoes/retrasada');
            xhr.onreadystatechange = () => {
                if(xhr.readyState == DONE){
                    if(xhr.status == 200){

                        resolve(JSON.parse(xhr.responseText)
                        .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                    }else{
                        console.log(xhr.responseText);
                        reject('Não foi possível importar as negociações da semana retrasada.');
                    }
                }
            };

            xhr.send();
        });

    }

}
