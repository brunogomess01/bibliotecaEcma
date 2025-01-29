//criem dois arquivos em JS, onde voces montem uma logica para guardar informações dos dados Bancarios e dados pessoais do cliente X. É necessario criar variaveis para guardar informações como tipo de conta, valor na conta, tipo do cartao, e ao final executar no console.log. Essas informações usando string(normal) e string Template.
//Lembre-se de utilizar textos coerentes a atividade.


let nome = 'Bruno Gomes'; 
let email = "bruno@bruno";
let cpf = 497; 

let valornaConta = `200 ${'mil reais'}`;
let tipoDoCartao = 'Flex' ;
let tipodeConta = 'Poupança';


//Primeira consulta
let consulta = `Consultando as informações ${nome} OK ${cpf} OK ${email} OK ${tipodeConta} OK ` 

// Retorno para o cliente
let informacoesBanco = `Ola ${nome}. Confirmamos seus dados com os 3 digitos do seu CPF ${cpf}. Segue sua consulta como solicitado: Cartao ${tipoDoCartao} temos o valor de ${valornaConta}, conta do tipo: ${tipodeConta}, iremos encaminhar o protocolo da sua consulta em ${email}. Obrigado!`;


console.log(consulta);
console.log(informacoesBanco);

