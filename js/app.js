'use strict';

document.addEventListener('DOMContentLoaded', function() {
	// tutaj będziemy umieszczać kod ze wszystkich zadań
	
    
	// rozwijanie listy menu
	var listMenu  = document.querySelector('.for-dropdown');
	listMenu.addEventListener('mouseover', function(){
		console.log('wjezda na menu');
		document.querySelector('.dropdown').style.display = 'block';
	});

	listMenu.addEventListener('mouseout', function(){
		console.log('wyjezdza z menu');
		document.querySelector('.dropdown').style.display = 'none';
	});

	//obsługa rozwijania 
	var buttons = document.querySelectorAll('.read-more');
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
       		this.innerHTML='wiecej <span class="glyphicon glyphicon-chevron-down"></span>';
    	}  
	}

// skrolowanie
	 window.addEventListener('scroll', function() {
      console.log('działa przy scrollu');
      var bar =document.querySelector('.navbar');
      bar.style.borderBottom = '1px solid #7f7f7f';
      
      var inside =document.querySelector('.dropdown');
      inside.style.border = '1px solid #7f7f7f';      
    });
	
// przycisk powrótu do góry strony
	var but = document.querySelector('.upButton');
	but.addEventListener('click', function(){
		console.log('pies')
		window.scroll( 0, 0)
	});

// obługa przegladania ocen
	var items = document.querySelectorAll('.org');
	var dots = document.querySelectorAll('.dot');
	
	//items[0].classList.remove('visible');

	for (var i =0 ; dots.length > i; i++) {
		dots[i].addEventListener('click', kropka);	
	}	

	function kropka(){
		for (var i =0 ; dots.length > i; i++) {
		dots[i].classList.remove('active');	
		items[i].classList.remove('visible');	
	}

		for (var i =0 ; dots.length > i; i++){
			if (this==dots[i])
			items[i].classList.add('visible');			
		}


	}

//lista zadań
	var buttonAddWork = document.querySelector('.buttonAddWork');
	var listWork = document.querySelector('.list-group');
	var inputWork = document.querySelector('.form-control');
	buttonAddWork.addEventListener('click', function(){
		console.log('butto dodania zadani');
	});


	buttonAddWork.addEventListener('click', addTask);
	

	function addTask(){
		var newTask = document.createElement('li');
		var buttonDelete = document.createElement('button');
		buttonDelete.innerHTML="Usuń";		
		buttonDelete.classList.add('buttonDelete');	
		buttonDelete.addEventListener('click', deleteTask);		
		
	
		newTask.innerHTML=inputWork.value;
		listWork.appendChild(newTask);
		listWork.appendChild(buttonDelete);		
		inputWork.value="";

	}

	function deleteTask(){		
		this.previousElementSibling.remove();
		this.remove();				

	}
	



// zamykanie ładowani js

});