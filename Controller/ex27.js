// Limpando o formulario quando clinar em cancelar
document.getElementById("cancel").addEventListener("click",function() {
   const formulario = document.getElementById('formularioExercicio')
   formulario.reset();
});
document.getElementById("salve").addEventListener("click",(event) => {
   // salvando os valores
   const palavra = document.getElementById("palavra").value
  
   // Calculando 

   if(palavra != ""){
      var resusltado = calulos(palavra)
      console.log(resusltado);       
   }
   

  
   // inserindo o HTML
   getResultHTML(resusltado);
  
   //

});

// Calulos

const calulos = (palavra) => {
   var resultado = new Object()

   const palavraLower = palavra.toLowerCase();
   var palindroma = ""
   console.log(palavraLower[0])

   for(var i = (palavra.length-1); i >= 0; i = i - 1){
      
      palindroma =  palindroma + palavraLower[i]
  
   }

   if(palavraLower == palindroma){
      resultado.palindroma = "É palíndroma."
      return resultado
   }
   else { 
      resultado.palindroma = "NÂO é palíndroma."
      return resultado
   } 
}





//HTML Resultado

const getResultHTML = (objeto) => {
   const main = document.getElementById('formularioExercicio');

   const dadoHTML = `   
   <div >
      <label> `+ objeto.palindroma + ` </label>
   </div> 
   <br><br>
   </div>
   <div>
       <button class="button" id="finalizar">Finalizar</button>
   </div>  
      
  `;

   main.innerHTML = dadoHTML;
};
 