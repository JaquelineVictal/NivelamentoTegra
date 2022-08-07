//Ajustando os decimais 

document.getElementById("inicial").addEventListener("change", function(){
   this.value = parseInt(this.value);
});

document.getElementById("final").addEventListener("change", function(){
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
   const inicial = parseFloat(document.getElementById("inicial").value)
   const final = parseFloat(document.getElementById("final").value)


 
   // Calculando 
   var resultado = calulos(inicial, final)
   console.log(resultado);
  
  // inserindo o HTML
  getResultHTML(resultado);

   
   //

});

// Calulos

const calulos = (inicial,final) => {
   var resultado = new Object()

   const soma = 0

   for (var i = inicial ; i <= final; i++) {

      soma = soma + i
   }
   resultado.soma= soma
   return resultado
}



//HTML Resultado

const getResultHTML = (objeto) => {
   const main = document.getElementById('formularioExercicio');

   if (objeto.multiplos){

      const dadoHTML = `   
      <div >
      <label> São múltiplos</label>
   </div> 
   <br><br>
   <div>
      <button class="button" id="finalizar">Finalizar</button>
   </div>
      `;

   
      main.innerHTML = dadoHTML;

      const inputTroco = document.getElementById('troco')
       
      inputTroco.value = objeto.troco
      return
   }
   else {
      const dadoHTML = `   
      <div >
         <label> NÃO são múltiplos</label>
      </div> 
      <br><br>
      <div>
         <button class="button" id="finalizar">Finalizar</button>
      </div>
      `;
   main.innerHTML = dadoHTML;
   return
   }
};

 