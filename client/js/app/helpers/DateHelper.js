class DateHelper{

  constructor(){
      throw new Error('Esta class nao pode ser instanciada');
  }

  static textoParaData(texto){

      let expressaoData = new RegExp(/^\d{4}-\d{2}-\d{2}$/);

      if(!expressaoData.test(texto))
          throw new Error('Formato invalido. Utilizar aaaa-mm-dd.');

      return new Date(
        ...texto.split('-').map((item, index) => item - index % 2));
  }

  static dataParaTexto(data){
      return  "${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}";
  }
}
