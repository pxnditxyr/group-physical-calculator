const perimetroCuadrado = (ladoCuadrado) => ladoCuadrado * 4;
const areaCuadrado = (ladoCuadrado) => ladoCuadrado * ladoCuadrado;
var calculateSquareArea = () => {

    const ladoCuadrado = document.querySelector("#rectangle-height").value;
    const resultado = areaCuadrado(ladoCuadrado)
    document.querySelector("#result-square-area").innerHTML = resultado
}
var calculateSquarePerimeter = () => {

    const ladoCuadrado = document.querySelector("#rectangle-height").value;
    const resultado = perimetroCuadrado(ladoCuadrado)
    document.querySelector("#result-square-perimeter").innerHTML = resultado
}