var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");
//dblclick- escuta o double click na página
tabela.addEventListener("dblclick", function(event){
	event.target.parentNode.classList.add("fadeOut");

	setTimeout(function(){
	event.target.parentNode.remove();

}, 500);

});
