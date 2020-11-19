
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"; 

    //console.log(document.getElementById("agradecimento"));
    //alert("obrigada por clicar"); 
}

function redirecionar (){
    //window.open("https://www.google.com.br/");
    //window.location.href = "https://www.google.com.br/"; 
}

function trocar (elemento){
    elemento.innerHTML = "obrigado por passar";
    //document.getElementById("mousemove").innerHTML = "obrigada por passar"
    //alert("trocar text")
}

function voltar(elemento){
    elemento.innerHTML = "passe o mouse aqui"
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
}

function load (){
    alert("pagina carregada")
}

function funcaoChange (elemento){
    console.log(elemento.value)
}


/*
function soma(n1, n2){
    return n1 + n2;
}

var validar = 0

function validaIdade(idade){
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("qual sua idade");
validaIdade(idade);
console.log(validar);
*/


//alert(soma(5,10));


/*
var d =new Date();
alert(d.getMonth () +1)
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count=1; count <= 5; count++){
alert(count);
}
*/

/*
var count = 0;
while(count <= 5){
    console.log(count);
    count++;
}
*/

/*
var idade = prompt("qual sua idade?")
if(idade >= 18){
    alert("maior de idade")
}else{
    alert("menos de idade")
} 
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome: "uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta)
alert(fruta.cor);
*/

//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" - "));

//var nome = "Joyce Alberto";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 + n2);
//console.log(frase.toLoweCase())
//alert(frase.replace("Japão", "Brasil"))
