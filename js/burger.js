document.querySelector('.burger').addEventListener('click', () => {
	document.querySelector('.burger').classList.toggle('active');
	document.querySelector('.nav-menu').classList.toggle('active');
	document.querySelector('body').classList.toggle('lock');
})