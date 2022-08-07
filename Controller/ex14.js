//Ajustando os decimais 

document.getElementById("preco").addEventListener("change", function(){
   this.value = parseFloat(this.value).toFixed(2);
});

document.getElementById("qtd").addEventListener("change", function(){
     this.value = parseInt(this.value);
});

document.getElementById("dinheiro").addEventListener("change", function(){
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
   const preco = parseFloat(document.getElementById("preco").value)
   const qtd = parseFloat(document.getElementById("qtd").value)
   const dinheiro = parseFloat(document.getElementById("dinheiro").value)


   // Calculando 
   var resultado = calulos(preco, qtd, dinheiro)
   console.log(resultado);
  
  // inserindo o HTML
  getResultHTML(resultado);

   
   //

});

// Calulos

const calulos = (preco, qtd, dinheiro) => {
   var resultado = new Object()

   // calculando 

   const valor =  (preco * qtd)


   if(valor <= dinheiro){

      resultado.troco =  parseFloat((dinheiro - valor)).toFixed(2)
      resultado.pagar = true
      return resultado
   }
   else if (valor > dinheiro){

      resultado.falta = parseFloat((valor - dinheiro)).toFixed(2)
      resultado.pagar = false

      return resultado

   }         
}


//HTML Resultado

const getResultHTML = (objeto) => {
   const main = document.getElementById('formularioExercicio');  
   if (objeto.pagar){

      const dadoHTML = `   
      <div >
         <label>Troco: </label>
         <input
            id="troco"
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

      const inputTroco = document.getElementById('troco')
       
      inputTroco.value = objeto.troco
      return
   }

   else {

      const dadoHTML = `   
      <div >
            <label> DINHEIRO INSUFICIENTE. FALTAM ${objeto.falta} REAIS </label>
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

 