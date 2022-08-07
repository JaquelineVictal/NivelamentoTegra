//Ajustando os decimais 

document.getElementById("glicose").addEventListener("change", function(){
   this.value = parseFloat(this.value).toFixed(1);
});


// Limpando o formulario quando clinar em cancelar
document.getElementById("cancel").addEventListener("click",function() {
   const formulario = document.getElementById('formularioExercicio')
   formulario.reset();
});

// Calculando as medidas solicitadas

document.getElementById("salve").addEventListener("click",(event) => {
   // salvando os valores
   const glicose = parseFloat(document.getElementById("glicose").value)
   
   // Calculando 
   var resultado = calulos(glicose)
   console.log(resultado);
  
  // inserindo o HTML
  getResultHTML(resultado);

   
   //

});

// Calulos

const calulos = (glicose) => {
   var resultado = new Object()

   // calculando 

   if(glicose > 140){

      resultado.classificacao = 'Diabetes'
      return resultado
   }
   else if (glicose >= 100 && glicose <= 140){

      resultado.classificacao = 'Elevado'
      return resultado
   }  
   else if (glicose < 100){

      resultado.classificacao = 'Normal'
      return resultado
   }        
}


//HTML Resultado

const getResultHTML = (objeto) => {
   const main = document.getElementById('formularioExercicio');  
   
   const dadoHTML = `   
      <div >
            <label> A Classificação de glicose é ${objeto.classificacao} </label>
      </div> 
      <br><br>
      <div>
         <button class="button" id="finalizar">Finalizar</button>
      </div>
      `;

   main.innerHTML = dadoHTML;
   
   
};

 