//Ajustando os decimais 

document.getElementById("medidaA").addEventListener("change", function(){
     this.value = parseFloat(this.value).toFixed(1);
});

document.getElementById("medidaB").addEventListener("change", function(){
   this.value = parseFloat(this.value).toFixed(1);
});

document.getElementById("medidaC").addEventListener("change", function(){
   this.value = parseFloat(this.value).toFixed(1);
});

// Limpando o formulario quando clinar em cancelar
document.getElementById("cancel").addEventListener("click",function() {
   const formulario = document.getElementById('formularioExercicio')
   formulario.reset();
});
document.getElementById("salve").addEventListener("click",(event) => {
   // salvando os valores
   const medidaA = parseFloat(document.getElementById("medidaA").value)
   const medidaB = parseFloat(document.getElementById("medidaB").value)
   const medidaC = parseFloat(document.getElementById("medidaC").value)



   // inserindo o HTML
      getResultHTML();

   // Calculando 
   var resusltado = calulos(medidaA, medidaB , medidaC)
   console.log(resusltado);
   
   const inputQuadrado = document.getElementById('quadrado')
   const inputTriangulo = document.getElementById('triangulo')
   const inputTrapezio = document.getElementById('trapezio')

   inputQuadrado.value = resusltado.quadrado
   inputTriangulo.value = resusltado.triangulo
   inputTrapezio.value = resusltado.trapezio
   
   //

});

// Calulos

const calulos = (medidaA, medidaB , medidaC) => {
   var resultado = new Object()
   resultado.quadrado = (medidaA**2).toFixed(4);
   resultado.triangulo = ((medidaA*medidaB)/2).toFixed(4);
   resultado.trapezio = (((medidaA + medidaB)*medidaC)/2).toFixed(4);
   return resultado

}


//HTML Resultado

const getResultHTML = () => {
   const main = document.getElementById('formularioExercicio');

   const dadoHTML = `   
   <div >
      <label>A área do quadrado de lado A: </label>
      <input
         id="quadrado"
         type="text"
         disabled
      />
   </div>
   <div>
   <label>A área do triângulo retângulo com base A e altura B: </label>
   <input
       id="triangulo"
       class="input"
       type="text"
       disabled
   />
   </div>
   <label>A área do trapézio com bases A e B, e altura C: </label>
   <input
       id="trapezio"
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
 