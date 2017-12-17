class NegociacaoService {

    obterNegociacoesSemana(callback){
        const DONE = 4;
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'negociacoes/semana');
        xhr.onreadystatechange = () => {
          if(xhr.readyState == DONE){
              if(xhr.status == 200){

                  callback(null, JSON.parse(xhr.responseText)
                      .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

              }else{
                  console.log(xhr.responseText);
                  callback('Não foi possível importar as negociações.', null);
              }
          }
        };

        xhr.send();
    }

}
