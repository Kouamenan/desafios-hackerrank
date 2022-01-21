function solucao(resultados) {
	//seu codigo aqui
    
    let pontuacao = 0
    for (let resultado of resultados){
        if(resultado === "V"){
            pontuacao = pontuacao + 3
        }
        if(resultado === "E"){
            pontuacao = pontuacao + 1
        }
        if(resultado === "D"){
            pontuacao = pontuacao + 0 
        }
    }
    console.log(pontuacao)
}