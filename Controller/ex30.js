//Ajustando os decimais 

document.getElementById("numero").addEventListener("change", function(){
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
   const numero = parseInt(document.getElementById("numero").value)
   

 
   // Calculando 
   var resultado = calulos(numero)
   console.log(resultado);
  
  // inserindo o HTML
  getResultHTML(resultado);

   
   //

});

// Calulos

const calulos = (numero) => {
   var resultado = new Object()
   
   if(numero > 99){
      resultado.texto = "Escreva um valor numérico de até dois algarismos"
      return resultado
   }
   
   resultado.texto = "teste"
      const matrizextenso = [         
      ["zero","um", "dois", "três","quatro", "cinco","seis","sete","oito", "nove"],
      ["dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis","dezessete", "dezoito", "dezenove"],
      ["dummy","dummy","vinte", "trinta","quarenta","cinquenta","secenta","setenta","oitenta","noventa"]
   ]
   console.log( matrizextenso)

   if(numero <= 9){
      console.log("1")
      resultado.texto = matrizextenso[0][(numero)]
      
      return resultado  
   }
   else if(numero >= 10){
      console.log("2")
      if(numero <= 19 ){
         console.log("3")
         resultado.texto = matrizextenso[1][numero-9]
         return resultado  
      }
      else if ((numero % 10) == 0){
         console.log("4")
         var aux = numero.toString()
         var num = parseInt(aux[0])
         resultado.texto = matrizextenso[2][num]
         return resultado
      }
      else {
         console.log("4")
         var aux = numero.toString()
         var num = parseInt(aux[0])
         var num2 = parseInt(aux[1])
         resultado.texto = matrizextenso[2][num] + ' e ' + matrizextenso[0][num2]
         return resultado
      }
   }
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

 