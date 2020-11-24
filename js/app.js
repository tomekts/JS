'use strict';

document.addEventListener('DOMContentLoaded', function() {
	// tutaj będziemy umieszczać kod ze wszystkich zadań
	var listMenu  = document.querySelector('.for-dropdown');  

	listMenu.addEventListener('mouseover', function(){
		console.log('wjezda na menu');
		document.querySelector('.dropdown').style.display = 'block';
	});

	listMenu.addEventListener('mouseout', function(){
		console.log('wyjezdza z menu');
		document.querySelector('.dropdown').style.display = 'none';
	});
});