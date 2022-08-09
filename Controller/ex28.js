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

document.getElementById("numero4").addEventListener("change", function(){
   this.value = parseInt(this.value);
});
document.getElementById("numero5").addEventListener("change", function(){
   this.value = parseInt(this.value);
});
;



// Limpando o formulario quando clinar em cancelar
document.getElementById("cancel").addEventListener("click",function() {
   const formulario = document.getElementById('formularioExercicio')
   formulario.reset();
});

// Calculando as medidas solicitadas


document.getElementById("salve").addEventListener("click",(event) => {
   // salvando os valores
   
   const numero1 = parseInt(document.getElementById("numero1").value)
   const numero2 = parseInt(document.getElementById("numero2").value)
   const numero3 = parseInt(document.getElementById("numero3").value)
   const numero4 = parseInt(document.getElementById("numero4").value)
   const numero5 = parseInt(document.getElementById("numero5").value)

   var numeros = [numero1,numero2,numero3,numero4,numero5]
   console.log(numeros)


 
   // Calculando 
   var resultado = calulos(numeros)
   console.log(resultado);
  
  // inserindo o HTML
  getResultHTML(resultado);

   
   //

});

// Calulos

const calulos = (ordenar) => {
   var resultado = new Object()
   var aux = 0
   resultado.texto = ' <br> ' 
   
   
      for (var i = 0; i < ordenar.length; i++) {
         for (var j = 0; j < ordenar.length; j++) {
                   if(ordenar[i] < ordenar[j]) {
               aux = ordenar[i];
               ordenar[i] = ordenar[j]
               ordenar[j] = aux
            }
         }       
      }

     
         resultado.texto = 'O menor valor é ' + ordenar[0] + ' e o maior valor é ' + ordenar[( ordenar.length-1)]
      
      return resultado      
   }

 //HTML Resultado

const getResultHTML = (objeto) => {
   const main = document.getElementById('formularioExercicio');
        const dadoHTML = `   
      <div >
      <label> `+ objeto.texto + ` </label>
   </div> 
   <br><br>
   </div>
   <div>
       <button class="button" id="finalizar">Finalizar</button>
   </div>  
      `;  
      main.innerHTML = dadoHTML;
};

 