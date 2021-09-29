const sp = (ladoA, ladoB, ladoC) => perimetroEscaleno(ladoA,ladoB,ladoC)/2;
const perimetroEquilatero = (ladoTriangulo) => ladoTriangulo * 3;
const areaEquilatero = (ladoTriangulo) => (ladoTriangulo*ladoTriangulo)*(Math.sqrt(3))/4;
const perimetroIsosceles = (ladosIguales,ladoDiferente) => (ladosIguales * 2) + parseFloat(ladoDiferente);
const areaIsosceles = (ladosIguales,ladoDiferente) => (ladoDiferente/2)*Math.sqrt((ladosIguales*ladosIguales)-((ladoDiferente*ladoDiferente)/4));
const perimetroEscaleno = (ladoA, ladoB, ladoC) => parseFloat(ladoA) +parseFloat(ladoB) + parseFloat(ladoC);
const areaEscaleno = (ladoA, ladoB, ladoC) =>  Math.sqrt(sp(ladoA,ladoB,ladoC)*(sp(ladoA,ladoB,ladoC)-ladoA)*(sp(ladoA,ladoB,ladoC)-ladoB)*(sp(ladoA,ladoB,ladoC)-ladoC));

var calcularAreaEquilatero = () => {

    const ladoTriangulo = document.querySelector("#lado-triangulo").value;
    console.log(areaEquilatero(ladoTriangulo));
    const resultado = areaEquilatero(ladoTriangulo)
    document.querySelector("#result-triangle-area").innerHTML = resultado
}
var calcularPerimetroEquilatero = () => {

    const ladoTriangulo = document.querySelector("#lado-triangulo").value;
    console.log(perimetroEquilatero(ladoTriangulo));
    const resultado = perimetroEquilatero(ladoTriangulo)
    document.querySelector("#result-triangle-perimeter").innerHTML = resultado
}
var calcularAreaIsosceles = () => {

    const ladosIguales = document.querySelector("#lado-triangulo-iguales").value;
    const ladoDiferente = document.querySelector("#lado-triangulo-diferente").value;
    console.log(areaIsosceles(ladosIguales,ladoDiferente));
    const resultado = areaIsosceles(ladosIguales,ladoDiferente)
    document.querySelector("#result-triangle-area").innerHTML = resultado
}
var calcularPerimetroIsosceles = () => {

    const ladosIguales = document.querySelector("#lado-triangulo-iguales").value;
    const ladoDiferente = document.querySelector("#lado-triangulo-diferente").value;
    console.log(perimetroIsosceles(ladosIguales,ladoDiferente));
    const resultado = perimetroIsosceles(ladosIguales,ladoDiferente)
    document.querySelector("#result-triangle-perimeter").innerHTML = resultado
}
var calcularAreaEscaleno = () => {

    const ladoA = document.querySelector("#lado-a").value;
    const ladoB = document.querySelector("#lado-b").value;
    const ladoC = document.querySelector("#lado-c").value;
    console.log(areaEscaleno(ladoA,ladoB,ladoC));
    const resultado = areaEscaleno(ladoA,ladoB,ladoC)
    document.querySelector("#result-triangle-area").innerHTML = resultado
}
var calcularPerimetroEscaleno = () => {

    const ladoA = document.querySelector("#lado-a").value;
    const ladoB = document.querySelector("#lado-b").value;
    const ladoC = document.querySelector("#lado-c").value;
    console.log(perimetroEscaleno(ladoA,ladoB,ladoC));
    const resultado = perimetroEscaleno(ladoA,ladoB,ladoC)
    document.querySelector("#result-triangle-perimeter").innerHTML = resultado
}

