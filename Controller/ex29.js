// Limpando o formulario quando clinar em cancelar
document.getElementById("cancel").addEventListener("click",function() {
   const formulario = document.getElementById('formularioExercicio')
   formulario.reset();
});
document.getElementById("salve").addEventListener("click",(event) => {
   // salvando os valores
   const cnpj = document.getElementById("cnpj").value
  
   // Calculando 

   if(cnpj != ""){
      var resusltado = calulos(cnpj)
      console.log(resusltado);       
   }
   

  
   // inserindo o HTML
   getResultHTML(resusltado);
  
   //

});

// Calulos

const calulos = (cnpj) => {
   var resultado = new Object()

   //Calculando o Primeiro Dígito Verificador
   const peso = [5,4,3,2,9,8,7,6,5,4,3,2]
   const cnpj12 = [cnpj[0],cnpj[1],cnpj[3],cnpj[4],cnpj[5],cnpj[7],cnpj[8],cnpj[9],cnpj[11],cnpj[12],cnpj[13],cnpj[14]]
   const verificador = [cnpj[16],cnpj[17]]

  

   var soma = 0
   var resto = 0

   resultado.cnpj1 = false
 

   for(var i = 0; i < peso.length; i++){

      soma = soma + (peso[i] * cnpj12[i])
   }

  
   resto = soma % 11
   

   if ((resto < 2) && verificador[0] == 0){
      resultado.cnpj1 = true
      
   }
   else if((resto>=2) && verificador[0] == (11-resto)){
      resultado.cnpj1 = true
   }
   
   
   //Calculando o Segundo Dígito Verificador

   const peso2 = [6,5,4,3,2,9,8,7,6,5,4,3,2]
   const cnpj13 = [cnpj[0],cnpj[1],cnpj[3],cnpj[4],cnpj[5],cnpj[7],cnpj[8],cnpj[9],cnpj[11],cnpj[12],cnpj[13],cnpj[14],cnpj[16]]
   console.log(cnpj13)
   console.log(peso2)
   resultado.cnpj2 = false

   var soma2 = 0
   var resto2 = 0

   for(var i = 0; i < peso2.length; i++){

      soma2 = soma2 + (peso2[i] * cnpj13[i])
   }

   resto2 = soma2 % 11
  

   if ((resto2 < 2) && verificador[1] == 0){
      resultado.cnpj2 = true
   }
   else if((resto2>=2) && verificador[1] == (11-resto2)){
      resultado.cnpj2 = true
   }

   if(resultado.cnpj1 && resultado.cnpj2){

      resultado.texto = "Válido"
      return resultado
   }else {
      resultado.texto = "Inválido"
      return resultado
   } 
 
}





//HTML Resultado

const getResultHTML = (objeto) => {
   const main = document.getElementById('formularioExercicio');

   const dadoHTML = `   
   <div >
      <label> `+ objeto.texto + ` </label>
   </div> 
   <br><br>
   </div>
   <div>
       <button class="button" id="finalizar">Finalizar</button>
   </div>  
      
  `;

   main.innerHTML = dadoHTML;
};
 