'use strict';

document.addEventListener('DOMContentLoaded', function() {
	// tutaj będziemy umieszczać kod ze wszystkich zadań
	var listMenu  = document.querySelector('.for-dropdown');  
	var buttons = document.querySelectorAll('.read-more');
    
	
	listMenu.addEventListener('mouseover', function(){
		console.log('wjezda na menu');
		document.querySelector('.dropdown').style.display = 'block';
	});

	listMenu.addEventListener('mouseout', function(){
		console.log('wyjezdza z menu');
		document.querySelector('.dropdown').style.display = 'none';
	});

	// buttons[0].addEventListener('click', buttonClick );
	// buttons[1].addEventListener('click', buttonClick );
	// buttons[2].addEventListener('click', buttonClick );

	for (var i = 0 ; i < buttons.length; i++) {
		buttons[i].addEventListener('click', buttonClick )
	}   
	
	function buttonClick(){
		console.log("test button click")
		var textArea =this.previousElementSibling;  
       	if (textArea.style.display ==="none" || textArea.style.display ==="") {
       		textArea.style.display ="block"
       		this.innerHTML='mniej <span class="glyphicon glyphicon-chevron-up"></span>';
       	}else{
       	    textArea.style.display ="none";      	
       		this.innerHTML='wiecej <span class="glyphicon glyphicon-chevron-up"></span>';
    	}  
	}
	
});