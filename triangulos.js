function solucao(ladoA, ladoB, ladoC) {
    //seu codigo aqui
if (ladoA == ladoB && ladoA == ladoC){
        console.log("EQUILATERO");
    }else if(ladoA == ladoB || ladoA == ladoC || ladoC==ladoB){
        console.log("ISOSCELES");
        }else
        console.log("ESCALENO");
}

function processData(input) {
    const [ladoA, ladoB, ladoC] = input.trim().split(" ").filter(x => x).map(x => parseInt(x, 10));
    solucao(ladoA, ladoB, ladoC);
}
