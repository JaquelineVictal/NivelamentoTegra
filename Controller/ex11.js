//Ajustando os decimais 

document.getElementById("nota1").addEventListener("change", function(){
   this.value = parseFloat(this.value).toFixed(1);
});

document.getElementById("nota2").addEventListener("change", function(){
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
   const nota1 = parseFloat(document.getElementById("nota1").value)
   const nota2 = parseFloat(document.getElementById("nota2").value)

 
   // Calculando 
   var resultado = calulos(nota1, nota2)
   console.log(resultado);
  
  // inserindo o HTML
  getResultHTML(resultado);

   const inputFinal = document.getElementById('final')
   
   inputFinal.value = resultado.final

   
   //

});

// Calulos

const calulos = (nota1, nota2) => {
   var resultado = new Object()

   resultado.final = nota1 + nota2
   
   if( resultado.final >=  60.0){
      resultado.status = 'Aprovado'
      return resultado     
   }
   else {
      resultado.status = 'Reprovado'
      return resultado  
   }
  
}





//HTML Resultado

const getResultHTML = (objeto) => {
   const main = document.getElementById('formularioExercicio');

   const dadoHTML = `   
   <div >
   <label>Nota final: </label>
   <input
      id="final"
      type="text"
      disabled
   />
</div>
<div >
   <label> o aluno está ${objeto.status}</label>
</div> 
<br><br>
<div>
    <button class="button" id="finalizar">Finalizar</button>
</div>;
`;

main.innerHTML = dadoHTML;
};

 