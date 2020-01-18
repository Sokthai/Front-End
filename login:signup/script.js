const get = elem => document.getElementById(elem),
					 registerButton = get('register'),
					 loginButton = get('login'),
					 container = get('container'),
					 classList = container.classList

// if you add same animation it will not work
registerButton.onclick = () => {
		classList.remove('close')  
    classList.add('active')  
}
loginButton.onclick = () => {
		classList.add('close')  
	  classList.remove('active')   
}
 
