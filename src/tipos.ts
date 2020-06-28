// Boolean
let contaPaga: boolean = false;

console.log("conta está paga:" + contaPaga);

//string

const word: string = "Carlos";
console.log(word);

// number

const x: number = 2;
console.log(x);

// Array

// forma verbosa do array
const ar: Array<number> = [1, 23, 56];

console.log(ar);

const st: string[] = ["joão", "jose"];

console.log(st);

// null & undefined

const n: null = null;

console.log(n);

const u: undefined = undefined;

console.log(u);

//void

function nr(msg: string): void {
  console.log(msg);
}

nr("ferrou");

//arrow function

// object
function listarPessoas() {
  const pessoa = {
    nome: "gabriel",
    idade: 22,
    sexo: "m"
  };
  console.log(pessoa);
}

listarPessoas();

// Never

// function loopInfinite(): never{
//   while(true){

//   }
// }

//loopInfinite();

/* function falha(){
  return error('fudeo parça');
} */
//falha();
//union types

const i: number | boolean = 2;

console.log(i);

function exibirNota(nota: number | string) {
  console.log(`A nota é : ${nota}`);
}

exibirNota("10");

//Alias
type Funcionario = {
  nome: string;
  sobrenome: string;
  dataNasc: Date;
};

// type Funcionarios = Array<Funcionario>;
const funcionarios: Funcionario[] = [
  { nome: "gabriel", sobrenome: "rodrigues", dataNasc: new Date() }
];

console.log(funcionarios);

let tratarFuncionario = (funcionarios: Funcionario[]) => {
  for (let funcionario of funcionarios) {
    console.log(funcionario.nome);
  }
};

tratarFuncionario(funcionarios);

//type assertion

const myage: any = 22;

(myage as number).toString();

var input = new HTMLInputElement();

input.value = "gabriel";

console.log(input.value);
