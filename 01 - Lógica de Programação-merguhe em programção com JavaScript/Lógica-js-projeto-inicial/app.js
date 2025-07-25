/*Exibir mensagem na tela */
alert('BEM-VINDO AO JOGO DO NÚMERO SECRETO!');

/* Declarando váriavel */
let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let numero;
let tentativa = 1;

/*Entrar com um valor no programa */
/*Condicional IF-else */
// loop - while()

 while (numero != numeroSecreto){
    
let numero = prompt(`Escolha um numero de 1 a ${numeroMaximo}`);

if(numeroSecreto == numero){
  console.log(numeroSecreto);
    break;
}else {
    if ( numeroSecreto > numero){
        alert(`O numero secreto é maior que ${numero}`);
    }else {
         alert(`O numero secreto é menor que ${numero}`)
    }
   
     tentativa ++;
  }
 }
 
 
 alert(`Você acertou! O numero secreto é ${numeroSecreto}, voce tentou ${tentativa} vez `);


/*
Desafios
Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
alert('Boas vidas ao nosso site !');

Declare uma variável chamada nome e atribua a ela o valor "Lua".
  let nome = 'Lua';

Crie uma variável chamada idade e atribua a ela o valor 25.
   let idade = 25;

Defina uma variável numeroDeVendas e atribua a ela o valor 50.
    let numeroDeVendas = 50;

Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
    let saldoDisponivel = 100;

Exiba um alerta com o texto "Erro! Preencha todos os campos"
   alert('Erro! Preencha todos os campos');

Declare uma variável chamada mensagemDeErro e atribua a ela o valor 
"Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
   let mensagemDeErro = 'Erro! Preencha todos os campos';
   alert(mensagemDeErro);

 Para o próximo código, use um novo prompt para perguntar o nome do usuário e armazená-lo em uma variável, 
pode chamá-la de nome ou adicionar o que desejar .
   let nomeUsuario = prompt('Nome: ');

Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
   let idadeUsuario = prompt('idade: ');

Agora, para validar a idade que capturamos no desafio 09, caso a idade seja maior ou igual
 que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".

   if (idadeUsuario >= 18){
     alert('Pode tirar a habilitação');
   }
*/

/*Desafios
Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!".
 Caso contrário, mostre "Boa semana!".

let diaSemana = prompt('Informe o dia da semana: ');
  
if (diaSemana == 'Sabado' || diaSeman == 'Domingo'){
        alert('Bom final de semana !');
}else {
     alert('Boa semana !');
}

Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

  let numero = prompt('Informe um numero para saber se é positivo ou negativo: ');

  if (numero / 2 == 0 ){
     alert('Positivo !');
  }else {
     alert('Negativo!');
  }

Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". 
Caso contrário, mostre "Tente novamente para ganhar.".

let ponto = prompt('Informe a sua pontuação: ');
  
  if (ponto >= 100){
     alert('Parabens, voce venceu!');
  }else {
     alert('Tente novamente para ganhar!');
  }

Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor 
do saldo.
  let saldoConta = 2000;

   alert(`O saldo da sua conta é: ${saldoConta}`);

Peça ao usuário para inserir seu nome usando prompt. 
Em seguida, mostre um alerta de boas-vindas usando esse nome.


 let nome = prompt('Informe o seu nome : ');
    alert(`seja bem-vindo ${nome}`);
 */


/*Desafios
Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
 
let cont = 1;
  while (cont < 10){
     alert(cont);
     cont ++;
  }

Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número. 

 let cont = 10;
  while(cont > 0){
     alert(cont)
     cont --;
  }

Crie um programa de contagem regressiva. Peça um número e conte deste número até 0,
 usando um loop while no console do navegador.
 
let num = prompt('Informe um numero : ');


 while(num > 0){
    alert(num);
    num --;
 }
Crie um programa de contagem progressiva.
 Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

 let num = prompt('Informe um numero : ');
 let cont = 0
  while(cont < num){
     alert(num);
     num ++;
  }
*/

Desafios finais
Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

Use um loop while para imprimir os números de 1 a 10 no console.

Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.