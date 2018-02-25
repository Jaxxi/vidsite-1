// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var elements = document.getElementsByClassName("column");

/*
var modalContent = document.createElement("div");
modalContent.id = "modal-content";
modalContent.className = "modal-content";
var modalSpan = document.createElement("span");
modalSpan.className = "close";
modalSpan.textContent = "\u00d7";
var modalP = document.createElement("p");
modalP.textContent = "Some text";
*/
var frame = document.createElement("iframe");
frame.id = "animFrame";
frame.className = "animFrame";

for(var i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", function (e) {
		e.preventDefault();

		fetch(e.path[1].dataset.url)
		.then(function(response) { return response.json(); })
		.then(function(json) {
			console.log(json);
//			modalContent.appendChild(modalSpan);
//			modalP.textContent = json.description;
//			modalContent.appendChild(modalP);
			frame.src = json.target;
//			modalContent.appendChild(frame);
			modal.appendChild(frame);

		});

		modal.style.display = "block";
	}, true);
}

// When the user clicks on <span> (x), close the modal
frame.contentDocument.getElementsByClassName("close").addEventListener("click", function() {
    modal.style.display = "none";
    while (modal.firstChild) {
	    modal.removeChild(modal.firstChild);
	}
}, true);

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
	    while (modal.firstChild) {
		    modal.removeChild(modal.firstChild);
		}
    }
}, true);