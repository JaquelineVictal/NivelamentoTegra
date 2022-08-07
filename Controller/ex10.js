//Ajustando os decimais 

document.getElementById("numero1").addEventListener("change", function(){
     this.value = parseInt(this.value);
});

document.getElementById("numero2").addEventListener("change", function(){
   this.value = parseInt(this.value);
});

document.getElementById("numero3").addEventListener("change", function(){
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
   const numero3 = parseFloat(document.getElementById("numero3").value)

 
   // Calculando 
   var resultado = calulos(numero1,numero2,numero3)
   console.log(resultado);
  
  // inserindo o HTML
  getResultHTML(resultado);

   
   //

});

// Calulos

const calulos = (numero1,numero2,numero3) => {
   var resultado = new Object()
   
   if(numero1 <= numero2){
      if(numero1 <= numero3) {
         resultado.menor = numero1
         return resultado
      }
      else if (numero3 < numero1){
         resultado.menor = numero3
         return resultado
      }
   }
   else if (numero2 <= numero3){
      resultado.menor = numero2
         return resultado
   }

   else if (numero3 < numero2){
      resultado.menor = numero3
         return resultado
   }
   
}





//HTML Resultado

const getResultHTML = (objeto) => {
   const main = document.getElementById('formularioExercicio');

   const dadoHTML = `   
   <div >
   <label> o menor número é ${objeto.menor}</label>
</div> 
<br><br>
<div>
    <button class="button" id="finalizar">Finalizar</button>
</div>;
`;

main.innerHTML = dadoHTML;
};

 