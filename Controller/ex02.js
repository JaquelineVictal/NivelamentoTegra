//Ajustando os decimais 

document.getElementById("base").addEventListener("change", function(){
     this.value = parseFloat(this.value).toFixed(1);
});

document.getElementById("altura").addEventListener("change", function(){
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
   const base = parseFloat inputPreco.value = resusltado.preco= parseFloat(document.getElementById("altura").value)
   
   // inserindo o HTML
      getResultHTML();

   // Calculando 
   var resusltado = calulos(base,altura)
   console.log(resusltado);
   
   const inputArea = document.getElementById('area')
   const inputPerimetro = document.getElementById('perimetro')
   const inputDiagonal = document.getElementById('diagonal')

   inputArea.value = resusltado.area
   inputPerimetro.value = resusltado.perimetro
   inputDiagonal.value = resusltado.diagonal

   
   //

});

// Calulos

const calulos = (base, altura) => {
   var resultado = new Object()
   resultado.area = (base*altura).toFixed(4);
   resultado.perimetro = ((base + altura)*2).toFixed(4);
   resultado.diagonal = Math.sqrt(((base**2) + (altura**2))).toFixed(4);
   return resultado

}





//HTML Resultado

const getResultHTML = () => {
   const main = document.getElementById('formularioExercicio');

   const dadoHTML = `   
   <div >
      <label>Área do retângulo: </label>
      <input
         id="area"
         type="text"
         disabled
      />
   </div>
   <div>
   <label>Perimétro do retângulo: </label>
   <input
       id="perimetro"
       class="input"
       type="text"
       disabled
   />
   </div>
   
   <div>
   <label>Diagonal do retângulo: </label>
   <input
       id="diagonal"
       class="input"
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
 