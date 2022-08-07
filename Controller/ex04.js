//Ajustando os decimais 

document.getElementById("preco").addEventListener("change", function(){
   this.value = parseFloat(this.value).toFixed(2);
});

document.getElementById("quantidade").addEventListener("change", function(){
   this.value = parseInt(this.value);
});
document.getElementById("valor").addEventListener("change", function(){
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
   const preco = document.getElementById("preco").value
   const qtd = parseFloat(document.getElementById("quantidade").value)
   const valor =  document.getElementById("valor").value
   
   console.log(valor)

   // Calculando 
   if(valor<preco*qtd) {

      alert("O dinheiro fornecido pelo cliente é inferior ao valor da compra")

   } else {

      //Calculando o troco
         var resusltado = calulos(preco, qtd, valor)
         console.log(resusltado);

       // inserindo o HTML
         getResultHTML();

         const inputTroco = document.getElementById('troco')
      
         inputTroco.value = resusltado.troco

   }

 

   
  

});

// Calulos

const calulos = (preco, qtd, valor) => {
   var resultado = new Object()
   resultado.troco = ((valor - (preco*qtd))).toFixed(2)
   console.log(resultado)
   return resultado

}





//HTML Resultado

const getResultHTML = () => {
   const main = document.getElementById('formularioExercicio');

   const dadoHTML = `   
   <div >
   <label>Troco: </label>
   <input
      id="troco"
      type="text"
      disabled
   />
</div>
<div>
    <button class="button" id="finalizar">Finalizar</button>
</div>
  `;

   main.innerHTML = dadoHTML;
};
 