window.onload = function(){
const cadastrar = document.querySelector("#cadastrar");
const nome = document.querySelector("#nome");
const curso = cument.querySelector("#curso");
const buscar = document.querySelector("#buscar");
const id = document.querySelector("#id");
const alterar = document.querySelector("#alterar");
const deletar = document.querySelector("#deletar");

cadastrar.addEventListener("click", function (){
  let formdata = new FormData();
  formdata.append ('nome','${nome.value}');
  formdata.append ('curso','${curso.value}');
  
  fetch(
    {
      body:formdata,
      method:"post",
      mode:'cors',
      cache:'default'
    }).then(()=>{
         (alert("Registro efetuado com sucesso"));
         limparCampos();
           }
    );
});
//metodo que lista uma pessoa
buscar.addEventListener("click",fuction(){
  fetch({
      method:"get",
      mode:'cors',
      cache:'default'
  }).then(response =>{
    response.json().then(data => {
    nome.value = data['nome'];
    curso.value = data['curso'];
    })
  })
})
//metodo para alterar os dados dos registros
alterar.addEventListener("click",fuction(){
   fetch({
      method:"put",
      mode:'cors',
      cache:'default'
      headers:{
     'content-type':'aplication/json;charset=UTF-8'
    },
    body:JSON.stringfy({
      'nome':'${nome.value}',
      'curso':'${curso.value}'
    })
  }).then(()=>{
  (alert("Registro Alterado com Sucesso));
    limparCampos();
});
});
//metodo para deletar um registro 
deletar.addEventListener("click",fuction(){
   fetch({
      method:"delete",
      mode:'cors',
      cache:'default'
   }).then(()=>{
     (alert("Registro alterado com sucesso!"));
     limparCampos();
 });
})

//metodo para limpar os campos
function limparCampos(){
  nome.value = "";
  curso.value = "";

}
}

