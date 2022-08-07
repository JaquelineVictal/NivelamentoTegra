const radios = document.querySelectorAll('input')
for (const radio of radios) {
  radio.onclick = (e) => {
    if(e.target.value == 'C'){
      CelsiusHTML()
   }
   else if (e.target.value== 'F'){
      FahrenheitHTML()
   }
  }
}

//Ajustando os decimais 

/* document.getElementById("temperatura").addEventListener("change", function(){
   this.value = parseFloat(this.value).toFixed(2);
}); */



// Limpando o formulario quando clinar em cancelar
document.getElementById("cancel").addEventListener("click",function() {
   const formulario = document.getElementById('formularioExercicio')
   formulario.reset();
});

// Calculando as medidas solicitadas

document.getElementById("salve").addEventListener("click",(event) => {
   // salvando os valores

   for (const radio of radios) {

      if(radio.checked) {

         const escala = radio.value

         if(escala == 'C'){
            const temperatura = parseFloat(document.getElementById("temperatura").value)
            var resultado = CelsiusToFahrenheit(temperatura)
            console.log(resultado)
            getResultCelsiusHTML(resultado)

            const inputCtoF = document.getElementById('CtoF')      
            inputCtoF.value = resultado.Fahrenheit

            return
         }
         else if (escala == 'F'){
            const temperatura = parseFloat(document.getElementById("temperatura").value)
            var resultado = FahrenheitToCelsius(temperatura)
            console.log(resultado)
            getResultFahrenheitHTML(resultado)

            const inputFtoC = document.getElementById('FtoC')      
            inputFtoC.value = resultado.Celsius

            return
         }

      }
     
    }
  
});

// Calulos

const  CelsiusToFahrenheit = (temperatura) => {
   var resultado = new Object()   
   resultado.Fahrenheit = parseFloat(((temperatura * 1.8) + 32)).toFixed(2);
   return resultado
}

const  FahrenheitToCelsius = (temperatura) => {
   var resultado = new Object()   
   resultado.Celsius = parseFloat(((temperatura - 32) / 1.8)).toFixed(2);
   return resultado
}
//HTML Front 

const CelsiusHTML = () => {
   const main = document.getElementById('perguntas');

   const dadoHTML = `   

   <label>Digite a temperatura em Celsius:</label>
   <input id="temperatura" type="text" placeholder="Digite a temperatura em Celsius:">
`;

main.innerHTML = dadoHTML;
};

const FahrenheitHTML = () => {
   const main = document.getElementById('perguntas');

   const dadoHTML = `   

   <label>Digite a temperatura em Fahrenheit:</label>
   <input id="temperatura" type="text" placeholder="Digite a temperatura em Fahrenheit:">
`;

main.innerHTML = dadoHTML;
};


//HTML Resultado

const getResultCelsiusHTML = (objeto) => {
   const main = document.getElementById('formularioExercicio');

   const dadoHTML = `   
   <div >
      <label>Temperatura equivalente em Fahrenheit: </label>
      <input
         id="CtoF"
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

const getResultFahrenheitHTML = (objeto) => {
   const main = document.getElementById('formularioExercicio');

   const dadoHTML = `   
   <div >
      <label>Temperatura equivalente em Celsius: </label>
      <input
         id="FtoC"
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
 