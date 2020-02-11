var nameFill = document.querySelector("input[type=text]");
var emailFill = document.querySelector("input[type=email]");
var ageFill = document.querySelector("input[type=number]");
var textArea = document.querySelector("textarea");

document.addEventListener("click", function(event){
	if(event.target.closest("input[type=text")){
		nameFill.style.borderBottom = "2px solid #6894ca";
		nameFill.style.boxShadow = "0 6px 6px -6px rgba(34, 34, 34, 0.8)";
	}else{
		nameFill.style.borderBottom = "1px solid #ddd";
		nameFill.style.boxShadow = "none";
	}
});


document.addEventListener("click", function(event){
	if(event.target.closest("input[type=email")){
		emailFill.style.borderBottom = "2px solid #6894ca";
		emailFill.style.boxShadow = "0 6px 6px -6px rgba(34, 34, 34, 0.8)";
	}else{
		emailFill.style.borderBottom = "1px solid #ddd";
		emailFill.style.boxShadow = "none";
	}
});

document.addEventListener("click", function(event){
	if(event.target.closest("input[type=number")){
		ageFill.style.borderBottom = "2px solid #6894ca";
		ageFill.style.boxShadow = "0 6px 6px -6px rgba(34, 34, 34, 0.8)";
	}else{
		ageFill.style.borderBottom = "1px solid #ddd";
		ageFill.style.boxShadow = "none";
	}
});

document.addEventListener("click", function(event){
	if(event.target.closest("textarea")){
		textArea.style.boxShadow = "1px 1px 6px 2px rgba(0,0,0,0.15)";
	}else{
		textArea.style.boxShadow = "none";
		textArea.style.boxShadow = "1px 3px 3px -3px #222";
	}
});
