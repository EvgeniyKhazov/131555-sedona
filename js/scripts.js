var link = document.querySelector(".interest a");
var form = document.querySelector(".map form");
link.addEventListener("click", function(event){
event.preventDefault();
form.classList.toggle("show");
});
	
