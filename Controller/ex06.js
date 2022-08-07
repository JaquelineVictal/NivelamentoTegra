//Ajustando os decimais 

document.getElementById("valor").addEventListener("change", function(){
   this.value = parseFloat(this.value).toFixed(2);
});

document.getElementById("horas").addEventListener("change", function(){
   this.value = parseFloat(this.value).toFixed(2);
});


// Limpando o formulario quando clinar em cancelar
document.getElementById("cancel").addEventListener("click",function() {
   const formulario = document.getElementById('formularioExercicio')
   formulario.reset();
});

// Calculando as medidas solicitadas

document.getElementById("salve").addEventListener("click",(event) => {
   // salvando os valores
   const nome = document.getElementById("nome").value
   const valor = parseFloat(document.getElementById("valor").value)
   const horas =  document.getElementById("horas").value
   
   
   

   // Calculando 
   var resusltado = calulos(valor, horas)
   console.log(resusltado);


   
   // inserindo o HTML
   getResultHTML(resusltado, nome);


});

// Calulos

const calulos = (valor, horas) => {
   var resultado = new Object()
   resultado.pagamento = ((horas*valor)).toFixed(2)
   console.log(resultado)
   return resultado

}





//HTML Resultado

const getResultHTML = (objeto, nome) => {
   const main = document.getElementById('formularioExercicio');

   const dadoHTML = `   
   <div >
      <label>O pagamento para ${nome} deve ser ${objeto.pagamento} </label>
   </div> 
   <br><br>
   <div>
       <button class="button" id="finalizar">Finalizar</button>
   </div>
  `;

   main.innerHTML = dadoHTML;
};
 