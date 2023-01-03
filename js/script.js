/*
Instructions

In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
We will provide the HTML page.
You only have to work with a JS file.

1. Create an array which value is the planets of the solar system.
2. For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
3. Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
4. Finally append each div to the <section> in the HTML (presented below).
5. Bonus: Do the same process to create the moons.
Be careful, each planet has a certain amount of moons. How should you display them?
Should you still use an array for the planets ? Or an array of objects ?

*/

const planetes = ['Mercure',"Vénus","la Terre","Mars","Jupiter","Saturne","Uranus","Neptune"]

for(let planete of planetes){
	
	let newDiv = document.createElement('div');
	newDiv.classList.add('planet')
	let name = document.createTextNode(planete);
	newDiv.appendChild(name)
	let composition = '0123456789ABCDEF';
	let color = '#';
	for(let i = 0; i < 6 ; i++){
		color += composition[Math.floor(Math.random() * 16)];
	}
	newDiv.style.background = color ;
	document.getElementsByClassName('listPlanets')[0].appendChild(newDiv);
}