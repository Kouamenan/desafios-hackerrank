function solucao(stringCorrompida) {
	// seu codigo aqui
    
    let dadoPurificado = '';
    for (let caractere of stringCorrompida){
        if (caractere === '!' || caractere === '@' || caractere === '#' || caractere === '$' || caractere === '%' || caractere === '&' || caractere === '*' || caractere === '(' || caractere === ')' || caractere === '.' ){
            
        }else{
            dadoPurificado = dadoPurificado + caractere
            
        }
    }console.log(dadoPurificado);
};
