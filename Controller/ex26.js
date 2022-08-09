// Limpando o formulario quando clinar em cancelar
document.getElementById("cancel").addEventListener("click",function() {
   const formulario = document.getElementById('formularioExercicio')
   formulario.reset();
});
document.getElementById("salve").addEventListener("click",(event) => {
   // salvando os valores
   const palavra = document.getElementById("palavra").value
  
   // Calculando 
   var resusltado = calulos(palavra)
   console.log(resusltado);    

   // inserindo o HTML
   getResultHTML();

   const inputVogais = document.getElementById('vogais')
   const inputConsoantes = document.getElementById('consoantes')

   inputVogais.value = resusltado.vogais
   inputConsoantes.value = resusltado.consoantes

   
   //

});

// Calulos

const calulos = (palavra) => {
   var resultado = new Object()

   const palavraLower = palavra.toLowerCase();

   const a = (palavraLower.match(/a/g) || []).length;
   const e = (palavraLower.match(/e/g) || []).length;
   const i = (palavraLower.match(/i/g) || []).length;
   const o = (palavraLower.match(/o/g) || []).length;
   const u = (palavraLower.match(/u/g) || []).length;

   resultado.total = palavra.length
   resultado.vogais = (a + e + i + o + u)
   resultado.consoantes = (resultado.total - resultado.vogais)
   return resultado

}





//HTML Resultado

const getResultHTML = () => {
   const main = document.getElementById('formularioExercicio');

   const dadoHTML = `   
   <div >
      <label>Vogais: </label>
      <input
         id="vogais"
         type="text"
         disabled
      />
   </div>
   <div>
   <label>Consoantes: </label>
   <input
       id="consoantes"
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
 