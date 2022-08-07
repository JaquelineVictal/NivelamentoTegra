//Ajustando os decimais 

document.getElementById("minutos").addEventListener("change", function(){
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
   const minutos = parseFloat(document.getElementById("minutos").value)


 
   // Calculando 
   var resultado = calulos(minutos)
   console.log(resultado);
  
  // inserindo o HTML
  getResultHTML(resultado);

   
   //

});

// Calulos

const calulos = (minutos) => {
   var resultado = new Object()

   // calculando 

   if(minutos <= 100){

      resultado.pagar = 50
      return resultado
   }
   else if (minutos > 100){

      const excedente = minutos - 100;

      resultado.pagar = 50 + (excedente * 2)

      return resultado

   }         
}


//HTML Resultado

const getResultHTML = (objeto) => {
   const main = document.getElementById('formularioExercicio');  
      const dadoHTML = `   
      <div >
            <label> Valor a pagar é ${objeto.pagar} </label>
      </div> 
      <br><br>
      <div>
         <button class="button" id="finalizar">Finalizar</button>
      </div>;
      `;

   main.innerHTML = dadoHTML;
   
};

 