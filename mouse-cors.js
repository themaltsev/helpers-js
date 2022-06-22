let mouseX = 0;
let mouseY = 0;

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;


document.addEventListener( 'mousemove', event =>{

	mouseX = ( event.clientX - windowHalfX ) / 100;
	mouseY = ( event.clientY - windowHalfY ) / 100;

	console.log(mouseX,mouseY);

} );
