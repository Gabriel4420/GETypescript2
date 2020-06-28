class Data {
  /* public dia: number;
         mes: number | string;
         ano: number; */

  constructor(
    public dia: number,
    public mes: number | string,
    public ano: number = 1970
  ) {
    /* this.dia = dia;
          this.mes = mes;
          this.ano = ano; */
  }
}

const data = new Data(1, 1, 2022);

console.log(data.dia);
