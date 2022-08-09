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
   const numero1 = parseInt(document.getElementById("numero1").value)
   const numero2 = parseInt(document.getElementById("numero2").value)

 
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
   
   var soma = 0
   
   
      for (var i = (numero1 + 1); i <numero2; i++) {

         var par = (i % 2)
         if (par != 0) {
            soma = soma + i
         }
         resultado.soma = soma
      } 
      return resultado     
   

   }

 


//HTML Resultado

const getResultHTML = (objeto) => {
   const main = document.getElementById('formularioExercicio');
  

      const dadoHTML = `   
      <div >
         <label> A Soma dos Impares é ${objeto.soma} </label>
      </div> 
      <br><br>
      </div>
      <div>
         <button class="button" id="finalizar">Finalizar</button>
      </div>
   
      `;

   
      main.innerHTML = dadoHTML;
};

 