function solucao(disparos) {
	//seu codigo aqui
        let totaltirocerto = 0;
    
    for (let item of disparos){
        if(item > 70){
           //e tirocerto
            totaltirocerto = totaltirocerto + 1
           }
          }
    const resposta = totaltirocerto;
    if (totaltirocerto >= 3){ console.log(resposta) };
    if (totaltirocerto<3){console.log("ELIMINADO")}
    
}
