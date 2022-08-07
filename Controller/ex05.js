//Ajustando os decimais 

document.getElementById("raio").addEventListener("change", function(){
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
   const raio = document.getElementById("raio").value
 
   
   

 //Calculando o troco
       var resusltado = calulos(raio)
       console.log(resusltado);

 // inserindo o HTML
         getResultHTML();

         const inputArea = document.getElementById('area')
      
         inputArea.value = resusltado.area

});

// Calulos

const calulos = (raio) => {
   var resultado = new Object()
   resultado.area = ((raio**2)*Math.PI).toFixed(3)
   
   return resultado

}





//HTML Resultado

const getResultHTML = () => {
   const main = document.getElementById('formularioExercicio');

   const dadoHTML = `   
   <div >
   <label>Área: </label>
   <input
      id="area"
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
 