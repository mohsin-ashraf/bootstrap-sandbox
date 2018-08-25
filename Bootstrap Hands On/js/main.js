var counter = 1;
var animalContainer = document.getElementById('animal-info');
var btn = document.getElementById('btn');
btn.addEventListener('click',()=>{
	var ourRequest = new XMLHttpRequest();
	ourRequest.open("GET","https://learnwebcode.github.io/json-example/animals-"+counter+".json");
	ourRequest.onload = function () {
		var ourData = JSON.parse(ourRequest.responseText);
		renderHTML(ourData);
	};
	ourRequest.send();
	counter++;
	if (counter > 3){
		btn.style.display = "none";
	}
});

function renderHTML(data){
	var htmlString = "";
	for (var i = 0 ; i < data.length; i++){
		htmlString += "<p> "+data[i].name +" is a "+data[i].species+". </p>";
	}
	animalContainer.insertAdjacentHTML("beforeend",htmlString);
}