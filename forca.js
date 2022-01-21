function solucao(palpite, palavra) {
	// seu codigo aqui
    
    let contador =0
  for (let letra of palavra){
      if(letra === palpite){
          contador ++;
      }
  }
    console.log(contador);
}

function processData(input) {
    const [palpite, palavra] = input.split(" ");
  	solucao(palpite, palavra);
}