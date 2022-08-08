//Ajustando os decimais 

document.getElementById("numero").addEventListener("change", function(){
   this.value = parseInt(this.value);
});

// Limpando o formulario quando clinar em cancelar
document.getElementById("cancel").addEventListener("click",function() {
   const formulario = document.getElementById('formularioExercicio')
   formulario.reset();
});

// Calculando as medidas solicitadas

document.getElementById("salve").addEventListener("click",(event) => {
   // salvando os valores
   const numero = parseInt(document.getElementById("numero").value)
   

 
   // Calculando 
   var resultado = calulos(numero)
   console.log(resultado);
  
  // inserindo o HTML
  getResultHTML(resultado);

   
   //

});

// Calulos

const calulos = (numero) => {
   var resultado = new Object()
   
   const par = (numero % 2)

   resultado.texto = ' <br> '

   if(par == 0){
      for (var i = 2 ; i <= numero; i = i + 2) {

         resultado.texto = resultado.texto +  i + ' <br> '
         
      } 
      return resultado     
   } 
   else {
      for (var i = 2 ; i < numero; i = i + 2) {

         resultado.texto = resultado.texto +  i + ' <br> '
         
      } 
      return resultado  

   }

   

   

   resultado.soma= soma
   return resultado
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

 