function solucao(notas) {
	//seu codigo aquilet total = 0;
    let menor = notas[0];
    let maior = notas[0];
    let soma = 0;
    let anulado = 0;
    let total =0;
    for (let item of notas){
     
        if(item < menor){
            menor = item;
        }
       if (item > maior){
           maior = item;
       }
      soma +=item;
      anulado = maior + menor;
    total = soma - anulado;
    }
    
    let media = total / (notas.length - 2);
    
    const resposta = media;
    
    console.log(resposta);
        
}
