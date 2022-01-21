function solucao(primeiraLetra, segundaLetra, palavras) {
	//seu codigo aqui
    
    let encontrado = false;
    for(let palavra of palavras){
        if(primeiraLetra === palavra[0] && segundaLetra === palavra[1]){
            console.log(palavra);
            encontrado = true;
            }
    }
   if(!encontrado){
       console.log("NENHUMA")
   }
}