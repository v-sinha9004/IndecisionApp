class Person {

constructor(name="Anonymous", age=0){
	this.name=name;
	this.age=age;
}
	getGreeting(){
		return `Hi. I am ${this.name}.`
	}
	getDescription(){
		return `${this.name} is ${this.age} year(s) old.`
	}
}

class Traveler extends Person {
	constructor(name, age, homeLocation){
		super(name, age);
		this.homeLocation=homeLocation;
	}

hasLocation(){
	return !!this.homeLocation;
}

getGreeting(){
	let greeting = super.getGreeting();

	if(this.homeLocation){
		greeting+= ` I am visiting from ${this.homeLocation}`
	}

	return greeting;
 }
}


const me = new Traveler("Vishal Sinha", 20, "New Delhi");
console.log(me.hasLocation());

const other = new Traveler();
console.log(other.hasLocation());