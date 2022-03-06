// Código del cuadrado

console.group("Código del cuadrado");

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

// Código del triangulo

console.group("Código del triangulo");

function perimetroTriangulo(lado1, lado2 ,base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

// Código del circulo
console.group("Circulos")

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    return diametroCirculo(radio) * PI;
}

function areaCirculo(radio){
    return (radio ** 2) * PI;
}

const PI = Math.PI;

console.groupEnd();

//Interacción HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const area = areaCuadrado(document.getElementById("InputCuadrado").value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const ladoA = document.getElementById("InputTrianguloA").value;
    const ladoB = document.getElementById("InputTrianguloB").value;
    const base = document.getElementById("InputTrianguloC").value;
    const perimetro = perimetroTriangulo(Number(ladoA), Number(ladoB), Number(base));
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const base = document.getElementById("InputTrianguloC").value;
    const altura = document.getElementById("InputTrianguloD").value;
    const area = areaTriangulo(base, altura);
    alert(area);
}

function calcularDiametroCirculo(){
    const value = document.getElementById("InputCirculo").value;
    alert(diametroCirculo(value));
}

function calcularPerimetroCirculo(){
    const value = document.getElementById("InputCirculo").value;
    alert(perimetroCirculo(value));
}

function calcularAreaCirculo(){
    const value = document.getElementById("InputCirculo").value;
    alert(areaCirculo(value));
}

function esIsosceles(A,B,C){
    return A == B && A != C;
}

function calcularAlturaTrianguloIsosceles(ladoA, ladoB, ladoC){
    if(esIsosceles(ladoA,ladoB,ladoC)){
        const value = Math.sqrt(ladoA ** 2 - ((ladoC ** 2) / 4));
        return value;
    }
    
}