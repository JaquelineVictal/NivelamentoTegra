//Ajustando os decimais 

document.getElementById("salario").addEventListener("change", function(){
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
   const salario = parseFloat(document.getElementById("salario").value)


 
   // Calculando 
   const resultado = calulos(salario)
   console.log(resultado);
  
  // inserindo o HTML
  getResultHTML(resultado);

  const inputNovo = document.getElementById('novoSalario')
  const inputAumento = document.getElementById('aumento') 
  const inputPorcentagem = document.getElementById('porcentagem')

  inputNovo.value = resultado.novo
  inputAumento.value = resultado.aumento
  inputPorcentagem.value = resultado.percentual

   
   //

});

// Calulos

const calulos = (salario) => {
   var resultado = new Object()

   // calculando 
   console.log(salario)
   
   switch (true) {

      case salario < 1000:
         console.log('TESTE')
         resultado.percentual = "20%"
         resultado.novo = (salario * 1.2)
         resultado.aumento = (salario * 0.2)
         console.log(resultado)
         return resultado;

      case salario >= 1000 && salario < 3000:
         resultado.percentual = "15%"
         resultado.novo = (salario * 1.15)
         resultado.aumento = (salario * 0.15)
         return resultado;
      
      case salario >= 3000 && salario < 8000:
         resultado.percentual = "10%"
         resultado.novo = (salario * 1.10)
         resultado.aumento = (salario * 0.10)
         return resultado;
     
      case salario >= 8000:
         resultado.percentual = "5%"
         resultado.novo = (salario * 1.05)
         resultado.aumento = (salario * 0.05)
         return resultado;
    }        
}


//HTML Resultado

const getResultHTML = (objeto) => {
   const main = document.getElementById('formularioExercicio');  
      const dadoHTML = `   
      <div >
      <label>Novo salário: </label>
      <input
         id="novoSalario"
         type="text"
         disabled
      />
   </div>
   <div>
   <label>Aumento: </label>
   <input
       id="aumento"
       class="input"
       type="text"
       disabled
   />
   </div>
   <div>
   <label>Porcentagem: </label>
   <input
       id="porcentagem"
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

 