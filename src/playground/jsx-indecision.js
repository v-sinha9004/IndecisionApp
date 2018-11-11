
console.log("Vishal sinha");

const app= {
	title: 'Indecision App',
	subtitle:'Chandler and joey are my favorites',
	options:[]
};

const removeOptions =() => {
	app.options.length = 0;
	// app.options-[];  //same function as above line
	render();
};

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNum];
	alert(option);
}

const onformSubmit = (e) =>{
  e.preventDefault();
  
  const option = e.target.elements.option.value;

  if(option){
  	app.options.push(option);
  	e.target.elements.option.value = '';
  	render();
  }
};

const sonal = document.getElementById('new');

const render = () => {

const template=( 
<div>
	<h1> {app.title} </h1>
	{app.subtitle && <p> {app.subtitle} </p>}
	<p>{app.options.length>0 ? 'Here are your options' : 'No Options'}</p>
	<button disabled={app.options.length===0} onClick={onMakeDecision}>What should i do?</button>
	<ol>
	 {
	 	app.options.map((option) => <li key={option}>{option}</li> )
	 }	
	</ol> 	
	<form onSubmit={onformSubmit}>
		<input type="text" name="option"/>
		<button>Add Option</button>
	</form>
	<button onClick={removeOptions}>Remove All</button>
</div>);	

ReactDOM.render(template, sonal);

};

render();




// const firstname = (fullname) => {
// 	return fullname.split(' ')[0];
// };

// console.log(firstname('Vishal Sinha'));

// const firstnameArrow= (fullname) => fullname.split(' ')[0];

// console.log(firstnameArrow('Sonal Mishra'));

// const multiplier = {
// 	numbers:[2, 3 ,4],
// 	multiplyBy:3,
// 	multiply() {
// 		return this.numbers.map((guna) => this.multiplyBy * guna);
// 	}
// };

// console.log(multiplier.multiply());