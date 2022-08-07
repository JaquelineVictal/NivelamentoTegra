//Ajustando os decimais 

document.getElementById("tempo").addEventListener("change", function(){
   this.value = parseInt(this.value);
});

// Limpando o formulario quando clinar em cancelar
document.getElementById("cancel").addEventListener("click",function() {
   const formulario = document.getElementById('formularioExercicio')
   formulario.reset();
});
document.getElementById("salve").addEventListener("click",(event) => {
   // salvando os valores
   const tempo = parseInt(document.getElementById("tempo").value)


   // Calculando 
   var resusltado = calulos(tempo)
   console.log(resusltado);

   
   // inserindo o HTML
   getResultHTML(resusltado);
 
});

// Calulos

const calulos = (tempoEmSegundos) => {
   var resultado = new Object()
   resultado.horas = parseInt(tempoEmSegundos / 3600);
   resultado.minutos = parseInt((tempoEmSegundos % 3600) / 60);
   resultado.seguntos = parseInt((tempoEmSegundos % 3600) % 60);

   return resultado

}


//HTML Resultado

const getResultHTML = (objeto) => {
   const main = document.getElementById('formularioExercicio');

   const dadoHTML = `   
<div >
   <label> ${objeto.horas}:${objeto.minutos}:${objeto.seguntos}</label>
</div> 
<br><br>
<div>
    <button class="button" id="finalizar">Finalizar</button>
</div>
 
  `;

  


   main.innerHTML = dadoHTML;
};
 