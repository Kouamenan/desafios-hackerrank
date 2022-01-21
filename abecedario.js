function solucao(letra, palavras) {
	//seu codigo aqui
    let erros = 0;
    for (let palavra of palavras){
        const primeiraLetra = palavra[0];
        
        if (primeiraLetra !== letra){
            erros ++;
        }
    }
    console.log(erros);
}
