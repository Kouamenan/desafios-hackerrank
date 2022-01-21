function solucao(dados) {
	//seu codigo aqui
     if(dados.negativoPCR && dados.vacinada ) {
       if(dados.mascara && dados.gritando) {
           console.log("RETIRADA POR ESTAR GRITANDO");
       } 
         if(dados.mascara == false && dados.gritando == false){
             console.log ("RETIRADA POR FALTA DE MASCARA") 
         }
         if(dados.mascara == false && dados.gritando){
             console.log("BAGUNCANDO TUDO");
         }
         if(dados.mascara && dados.gritando == false){
             console.log("OK");
         }
         
     }else{
         console.log("BARRADA");
     }
   
}