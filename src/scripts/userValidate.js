const pb = sessionStorage.getItem('pbInstance');
if (!pb.authStore.isValid){
	document.location.href = 'login.html'
}