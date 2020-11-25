'use strict';

document.addEventListener('DOMContentLoaded', function() {
	// tutaj będziemy umieszczać kod ze wszystkich zadań
	
    
// rozwijanie listy menu
	var listsMenu = document.querySelectorAll('.for-dropdown');
	var wysuwanie = document.querySelectorAll('.dropdown')


	for (var i = 0 ; i < listsMenu.length; i++){
		listsMenu[i].addEventListener('mouseover', show);
		listsMenu[i].addEventListener('mouseout', hide);
	}

	function show(){
		console.log('wjezda na menu');	
		for (var i = 0 ; i < listsMenu.length; i++){
			if (this==listsMenu[i]) {
			wysuwanie[i].style.display = 'block';
			}
		}
	}
	function hide(){
		console.log('wyjezdza z menu');
		for (var i = 0 ; i < listsMenu.length; i++){
			wysuwanie[i].style.display = 'none';
		}
	}


//obsługa rozwijania opisu o osobie 
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

// obramowanie górnego menu
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
			//walidacja inputa
		if (inputWork.value.length !==0) {
			var newTask = document.createElement('li');
			var buttonDelete = document.createElement('button');
			var checkbox = document.createElement('input');
			buttonDelete.innerHTML="Usuń";		
			buttonDelete.classList.add('buttonDelete');				
			
			buttonDelete.addEventListener('click', deleteTask);					
			newTask.innerHTML=inputWork.value;		
			checkbox.type="checkbox";
			checkbox.classList.add('checkButton');	
			checkbox.addEventListener('click', checkList);	
			listWork.appendChild(checkbox);	
			listWork.appendChild(newTask);
			listWork.appendChild(buttonDelete);	
			
			console.log(inputWork.value);		
			inputWork.value="";
		}else{
			alert("musisz wpisac co chcesz dodac");
		}

	}
	//usuwanie zadania
	function deleteTask(){		
		this.previousElementSibling.remove();
		this.previousElementSibling.remove();
		this.remove();		

	}
	//obługa boxa do wykonania zadania
	function checkList(){
		if (this.checked==true) {
		this.nextSibling.classList.add('redCollor');
		this.nextSibling.nextSibling.classList.add('redCollor');		
		}else{
			this.nextSibling.classList.remove('redCollor');
			this.nextSibling.nextSibling.classList.remove('redCollor');
		}

	}

// zamykanie ładowani js

});