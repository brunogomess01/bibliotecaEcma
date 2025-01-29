let aspasSimples = 'Testando minha String com aspas simples';
//String em resumo são texto que podem ser utilizados no JavaScript
//e para utilizar-lo podemos usar com aspas simples, duplas, ou string template.

let aspasDuplas = "String com aspas Duplas";
//Exemplo de string com aspas Duplas.

let templateLiteral = `String interpolation allows embedding expressions like ${1 + 1}.`;
//Essa é uma String Template, basicamente usados em casos onde há a necessidade de
//realizar uma ação aritimética(como no exemplo) ou quando guardamos alguma variável dentro dela.
//O simbolo ${} em JavaScript é usado para interpolar variaveis, ou seja para retornar o valor dela. 

//Veja abaixo exemplo de como e quando usar as crases 

let nome = 'Igor';
let idade = 24; //Numero usados sem aspas (simples ou duplas)

let mensagem = `Olá, meu nome é ${nome} e tenho ${idade} anos`;

//console.log(mensagem);
//console.log(templateLiteral);


let primeiroNome = 'John';
let ultimoNome = 'Doe';
let nomeCompleto = primeiroNome + ' ' + ultimoNome; // Usando o +
let nomeCompletoTemplate = `${primeiroNome} ${ultimoNome}`; // Usando template literal

//console.log(nomeCompletoTemplate);
//console.log(nomeCompleto);

