class DateHelper{

  constructor(){
    throw new Error('Esta class nao pode ser instanciada');
  }

  static textoParaData(texto){
    return new Date(
      ...texto.split('-').map((item, index) => item - index % 2));
  }

  static dataParaTexto(data){
    return data.getDate()
            + '/' + (data.getMonth() + 1)
            + '/' + data.getFullYear();
  }
}
