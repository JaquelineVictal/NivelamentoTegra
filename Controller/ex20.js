//Ajustando os decimais 

document.getElementById("inicial").addEventListener("change", function(){
   this.value = parseInt(this.value);
});

document.getElementById("final").addEventListener("change", function(){
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
   const inicial = parseInt(document.getElementById("inicial").value)
   const final = parseInt(document.getElementById("final").value)


 
   // Calculando 
   var resultado = calulos(inicial, final)
   console.log(resultado);
  
  // inserindo o HTML
  getResultHTML(resultado);

   
   //

});

// Calulos

const calulos = (inicial,final) => {
   var resultado = new Object()
   

   var soma = 0

   for (var i = inicial ; i <= final; i++) {

      console.log(soma)
      soma = soma + i
   }

   resultado.soma= soma
   return resultado
}



//HTML Resultado

const getResultHTML = (objeto) => {
   const main = document.getElementById('formularioExercicio');

      const dadoHTML = `   
      <div >
      <label> O Resultado é ${objeto.soma} </label>
   </div> 
   <br><br>
   </div>
   <div>
       <button class="button" id="finalizar">Finalizar</button>
   </div>
   
      `;

   
      main.innerHTML = dadoHTML;

};

 