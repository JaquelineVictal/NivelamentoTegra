//Ajustando os decimais 

document.getElementById("distancia").addEventListener("change", function(){
     this.value = parseInt(this.value);
});

document.getElementById("combustivel").addEventListener("change", function(){
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
   const distancia = parseFloat(document.getElementById("distancia").value)
   const combustivel = parseFloat(document.getElementById("combustivel").value)
   
   // inserindo o HTML
      getResultHTML();

   // Calculando 
   var resusltado = calulos(distancia,combustivel)
   console.log(resusltado);
   
   const inputConsumo = document.getElementById('consumo')
   

   inputConsumo.value = ` ${resusltado.consumo} Km/l`
  

   
   //

});

// Calulos

const calulos = (distancia, combustivel) => {
   var resultado = new Object()
   resultado.consumo = (distancia/combustivel).toFixed(3);
   
   return resultado

}





//HTML Resultado

const getResultHTML = () => {
   const main = document.getElementById('formularioExercicio');

   const dadoHTML = `   
   <div >
      <label>Consumo médio: </label>
      <input
         id="consumo"
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
 