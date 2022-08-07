//Ajustando os decimais 

document.getElementById("numero1").addEventListener("change", function(){
   this.value = parseInt(this.value);
});

document.getElementById("numero2").addEventListener("change", function(){
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
   const numero1 = parseFloat(document.getElementById("numero1").value)
   const numero2 = parseFloat(document.getElementById("numero2").value)


 
   // Calculando 
   var resultado = calulos(numero1,numero2)
   console.log(resultado);
  
  // inserindo o HTML
  getResultHTML(resultado);

   
   //

});

// Calulos

const calulos = (numero1,numero2) => {
   var resultado = new Object()
   
   const resto1 = (numero1 % numero2)
   const resto2 = (numero2 % numero1)

   if(resto1 == 0 || resto2 == 0){

      resultado.multiplos = true
      return resultado  
}

else {
      resultado.multiplos = false
      return resultado  
}

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

 