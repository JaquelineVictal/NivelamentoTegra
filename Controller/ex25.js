// Limpando o formulario quando clinar em cancelar
document.getElementById("cancel").addEventListener("click",function() {
   const formulario = document.getElementById('formularioExercicio')
   formulario.reset();
});

// Calculando as medidas solicitadas


document.getElementById("salve").addEventListener("click",(event) => {
   // salvando os valores
   
   const data = new Date(document.getElementById("data").value)
   console.log(data)
 
   // Calculando 
   var resultado = calulos(data)
   console.log(resultado);
  
  // inserindo o HTML
  getResultHTML(resultado);

   
   //

});

// Calulos

const calulos = (data) => {
   var resultado = new Object()

   var year = data.getFullYear()

   console.log(year)
   var ares_in = new Date(year+'-03-21 00:00:00');
   var ares_fn = new Date(year+'-04-20 00:00:00');
   var touro_in = new Date(year+'-04-21 00:00:00');
   var touro_fn = new Date(year+'-05-20 00:00:00');
   var gemeos_in = new Date(year+'-05-21 00:00:00');
   var gemeos_fn = new Date(year+'-06-20 00:00:00');
   var cancer_in = new Date(year+'-06-21 00:00:00');
   var cancer_fn = new Date(year+'-07-20 00:00:00');
   var leao_in = new Date(year+'-07-21 00:00:00');
   var leao_fn = new Date(year+'-08-20 00:00:00');
   var virgem_in = new Date(year+'-08-21 00:00:00');
   var virgem_fn = new Date(year+'-09-20 00:00:00');
   var libra_in = new Date(year+'-09-21 00:00:00');
   var libra_fn = new Date(year+'-10-20 00:00:00');
   var escorpiao_in = new Date(year+'-10-21 00:00:00');
   var escorpiao_fn = new Date(year+'-11-20 00:00:00');
   var sagitario_in = new Date(year+'-11-21 00:00:00');
   var sagitario_fn = new Date(year+'-12-20 00:00:00');
   var capricornio_in1 = new Date(year+'-12-21 00:00:00');
   var capricornio_fn1 = new Date(year+'-12-31 00:00:00');
   var capricornio_in2 = new Date(year+'-01-01 00:00:00');
   var capricornio_fn2 = new Date(year+'-01-20 00:00:00');
   var aquario_in = new Date(year+'-01-21 00:00:00');
   var aquario_fn = new Date(year+'-02-18 00:00:00');
   var peixes_in = new Date(year+'-02-19 00:00:00');
   var peixes_fn = new Date(year+'-03-20 00:00:00');

   switch (true){

      case (data>=ares_in && data <= ares_fn):
         resultado.signo = "Seu signo é de Áries"
         return resultado;
      
      case (data>=touro_in && data <= touro_fn):
         resultado.signo = "Seu signo é de Touro"
         return resultado;

       case (data>=gemeos_in && data <= gemeos_fn):
         resultado.signo = "Seu signo é de Gêmeos"
         return resultado;

      case (data>=cancer_in && data <= cancer_fn):
         resultado.signo = "Seu signo é de Cancer"
         return resultado;
      
      case (data>=leao_in && data <= leao_fn):
         resultado.signo = "Seu signo é de Leão"
         return resultado;

      case (data>=virgem_in && data <= virgem_fn):
         resultado.signo = "Seu signo é de Virgem"
         return resultado;
   
      case (data>=libra_in && data <= libra_fn):
         resultado.signo = "Seu signo é de Libra"
         return resultado;

      case (data>= escorpiao_in && data <= escorpiao_fn):
            resultado.signo = "Seu signo é de Escorpião"
            return resultado;
      
      case (data>= sagitario_in && data <= sagitario_fn):
          resultado.signo = "Seu signo é de Sagitário"
          return resultado;

      
      case ((data>= capricornio_in1 && data <= capricornio_fn1) || (data>= capricornio_in2 && data <= capricornio_fn2)):
         resultado.signo = "Seu signo é de Capricórnio"
         return resultado;

      case (data>= aquario_in && data <= aquario_fn):
         resultado.signo = "Seu signo é de Aquário"
         return resultado;

      case (data>= peixes_in && data <= peixes_fn):
         resultado.signo = "Seu signo é de Peixes"
         return resultado;
     }


   



      return resultado      
   }

 //HTML Resultado

const getResultHTML = (objeto) => {
   const main = document.getElementById('formularioExercicio');
        const dadoHTML = `   
      <div >
      <label> `+ objeto.signo + ` </label>
   </div> 
   <br><br>
   </div>
   <div>
       <button class="button" id="finalizar">Finalizar</button>
   </div>  
      `;  
      main.innerHTML = dadoHTML;
};

 