//Ajustando os decimais 

document.getElementById("coefA").addEventListener("change", function(){
     this.value = parseInt(this.value);
});

document.getElementById("coefB").addEventListener("change", function(){
   this.value = parseInt(this.value);
});

document.getElementById("coefC").addEventListener("change", function(){
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
   const coefA = parseFloat(document.getElementById("coefA").value)
   const coefB = parseFloat(document.getElementById("coefB").value)
   const coefC = parseFloat(document.getElementById("coefC").value)

 
   // Calculando 
   var resultado = calulos(coefA,coefB,coefC)
   console.log(resultado);
  
  // inserindo o HTML
  getResultHTML(resultado);

   
   //

});

// Calulos

const calulos = (coefA,coefB,coefC) => {
   var resultado = new Object()

   // calculando delta

   const delta_2 = ((coefB ** 2) -4*coefA*coefC)
   
   
   if(delta_2 >= 0){

      const delta =  Math.sqrt(delta_2)

      resultado.x1 = (((-1 * coefB) + delta)/(2 * coefA))
      resultado.x2 = (((-1 * coefB) - delta)/(2 * coefA))
      resultado.delta = true

      return resultado
   }
   else if (delta_2 < 0){
      resultado.delta = false
      return resultado
   }
       
}





//HTML Resultado

const getResultHTML = (objeto) => {
   const main = document.getElementById('formularioExercicio');

   if (objeto.delta){

      const dadoHTML = `   
      <div >
         <label>X1: </label>
         <input
            id="X1"
            type="text"
            disabled
         />
         <br>
         <label>X2: </label>
         <input
            id="X2"
            type="text"
            disabled
         />
      </div>
      <br><br>
      <div>
         <button class="button" id="finalizar">Finalizar</button>
      </div>;
      `;

   
      main.innerHTML = dadoHTML;

      const inputX1 = document.getElementById('X1')
      const inputX2 = document.getElementById('X2')
   
      inputX1.value = objeto.x1
      inputX2.value = objeto.x2


      return
   }

   else {

      const dadoHTML = `   
      <div >
            <label> Está equação não tem raiz real</label>
      </div> 
      <br><br>
      <div>
         <button class="button" id="finalizar">Finalizar</button>
      </div>;
      `;

   main.innerHTML = dadoHTML;
   return
   }

 


};

 