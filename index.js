    var goButton = document.getElementById('make-changes');
    goButton.onclick = function() {
      // тому что слева, мы присваиваем то, что что справа 
	var firstNameId = 'first-name';
	// = это оператор присваивания ... то есть то что слева (переменная), ей присваивается значение справа. 
	var firstNameEl = document.getElementById(firstNameId);	
	
        // а можно не создавать отдельную переменную для id и сразу передавать значение id в метод getElementById
	var lastNameEl = document.getElementById('last-name');
	var addressEl = document.getElementById('address')
	var citiesEl = document.getElementById('cities')
	var hobbiesEl = document.getElementById('hobbies');
	var avatarWrapperEl = document.getElementById('avatar-wrapper');
	var avatarEl = document.getElementById('avatar');
        // то это значит, что firstNameEl.value приобретёт новое значение 'Andrey'  
	firstNameEl.value = 'Andrey';
    lastNameEl.value = 'Popov'
    addressEl.value = 'saaass'
    citiesEl.value = 'Kiev'
   }
