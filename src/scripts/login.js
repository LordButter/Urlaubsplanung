const pb = new PocketBase('http://127.0.0.1:8090');

function onSubmit(event){
    event.preventDefault();
	const data = new FormData(event.target);
	
	pb.collection('users').authWithPassword(data.get('username'), data.get('password')).then((result) => {
		if (pb.authStore.isValid){
			sessionStorage.setItem('pbInstance', pb);
			document.location.href = 'index.html';
		}
	}).catch((error) => console.log(error));
}

let form = document.getElementById('loginForm');
form.addEventListener('submit', onSubmit);