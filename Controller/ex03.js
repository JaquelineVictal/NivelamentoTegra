//Ajustando os decimais 

document.getElementById("idade1").addEventListener("change", function(){
     this.value = parseInt(this.value);
});

document.getElementById("idade2").addEventListener("change", function(){
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
   const nome1 = document.getElementById("nome1").value
   const idade1 = parseFloat(document.getElementById("idade1").value)
   const nome2 =  document.getElementById("nome2").value
   const idade2 = parseFloat(document.getElementById("idade2").value)
   
   

   // Calculando 
   var resusltado = calulos(idade1, idade2)
   console.log(resusltado);


   
   // inserindo o HTML
   getResultHTML(resusltado, nome1, nome2);


});

// Calulos

const calulos = (idade1, idade2) => {
   var resultado = new Object()
   resultado.media = ((idade1 + idade2)/2).toFixed(1)
   console.log(resultado)
   return resultado

}





//HTML Resultado

const getResultHTML = (objeto, nome1, nome2) => {
   const main = document.getElementById('formularioExercicio');

   const dadoHTML = `   
   <div >
      <label>A idade média de ${nome1} e ${nome2} é de ${objeto.media} anos</label>
   </div> 
   <br><br>
   <div>
       <button class="button" id="finalizar">Finalizar</button>
   </div>
  `;

   main.innerHTML = dadoHTML;
};
 