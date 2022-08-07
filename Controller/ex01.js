//Ajustando os decimais 

document.getElementById("largura").addEventListener("change", function(){
     this.value = parseFloat(this.value).toFixed(1);
});

document.getElementById("comprimento").addEventListener("change", function(){
   this.value = parseFloat(this.value).toFixed(1);
});

document.getElementById("valor").addEventListener("change", function(){
   this.value = parseFloat(this.value).toFixed(2);
});

// Limpando o formulario quando clinar em cancelar
document.getElementById("cancel").addEventListener("click",function() {
   const formulario = document.getElementById('formularioExercicio')
   formulario.reset();
});
document.getElementById("salve").addEventListener("click",(event) => {
   // salvando os valores
   const largura = document.getElementById("largura").value
   const comprimento = document.getElementById("comprimento").value
   const valor = document.getElementById("valor").value


   // inserindo o HTML
      getResultHTML();

   // Calculando 
   var resusltado = calulos(largura, comprimento, valor)
   console.log(resusltado);
   
   const inputArea = document.getElementById('area')
   const inputPreco = document.getElementById('preco')

   inputArea.value = resusltado.area
   inputPreco.value = resusltado.preco

   
   //

});

// Calulos

const calulos = (largura, comprimento, valor) => {
   var resultado = new Object()
   resultado.area = (largura*comprimento).toFixed(2);
   resultado.preco = (largura*comprimento*valor).toFixed(2);
   return resultado

}





//HTML Resultado

const getResultHTML = () => {
   const main = document.getElementById('formularioExercicio');

   const dadoHTML = `   
   <div >
      <label>Área do terreno: </label>
      <input
         id="area"
         type="text"
         disabled
      />
   </div>
   <div>
   <label>Preço do terreno: </label>
   <input
       id="preco"
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
 