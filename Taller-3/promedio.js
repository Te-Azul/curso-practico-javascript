
function esPar(numero){
    return numero%2 == 0;
}

function textToLista(text){
    return text.split(",").map(function(a){return Number(a)});
}

function getListToInput(){
    const textArea = document.getElementById("InputList").value;
    return textToLista(textArea);
}

function imprimirResultado(text){
    const resultadoSpan = document.getElementById("ResultadoPromedio");
    resultadoSpan.innerText = text;
}

function calcularModa(){
    lista = getListToInput();
    lista.sort(function(a,b){
        return lista.filter(function(item){return item == b}).length - lista.filter(function(item){return item == a}).length;
    });
    const resultado = lista[0];
    imprimirResultado(resultado);
}


function calcularMediana(){
    lista = getListToInput();
    let resultado;
    const mitadLista = parseInt(lista.length / 2);
    lista.sort(function(a,b){return a - b})
    if(esPar(lista.length)){
        resultado = (lista[mitadLista] + lista[mitadLista -1]) / 2; 
    
    }else{
        resultado = lista[mitadLista];
    }

    imprimirResultado(resultado);
}


function calcularMediaAritmetica(){
    lista = getListToInput();
    const sumaList = lista.reduce(function(valorAcumulado = 0, siguienteElemento){
        return valorAcumulado + siguienteElemento;
    });
    let resultado = sumaList / lista.length;
    imprimirResultado(resultado);
}

function calcularMedianaArmonica(){
    lista = getListToInput();
    let sumatoriaInversos = 0;
    for(var numero of lista){
        sumatoriaInversos += 1/numero;
    }
    const resultado = lista.length / sumatoriaInversos;
    imprimirResultado(resultado);
}