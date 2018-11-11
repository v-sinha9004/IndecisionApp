
class Counter extends React.Component {
	constructor(props){
		super(props);
		this.handleAddOne=this.handleAddOne.bind(this);
		this.handleMinusOne=this.handleMinusOne.bind(this);
		this.handleReset=this.handleReset.bind(this);
		this.state = {
			count:0
		};
	}

	componentDidMount(){
		try{
		const json = localStorage.getItem("count");
		const count = JSON.parse(json);   //parseInt(json, 10)

		this.setState({count})
		}

		catch(e){
			//do nothing at all
		}
		
	}

	componentDidUpdate(prevProps, prevState){
		if(prevState.count !== 0){
			const json = JSON.stringify(this.state.count);
		localStorage.setItem("count", json);
		console.log("saving data");
		}
	}

	handleAddOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1
			};
		});
	}

	handleMinusOne(){
		this.setState((prevState) => {
			return {
				count: prevState.count - 1
			};
		});
	}

	handleReset(){
		this.setState(() => {
			return {
				count:0
			}
		});
	}

	render(){
		return(
			<div>
				<h1>Count: {this.state.count} </h1>
				<button onClick={this.handleAddOne}>+1</button>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.handleReset}>reset</button>
			</div>
		);
	}
}

Counter.defaultProps = {
	count: 0
}




ReactDOM.render(<Counter />, document.getElementById('new'));


// let count=0;
// const addOne= () => {
// 	count++;
// 	renderCounterApp();
// };
// const minusOne= () => {
// 	count--;
// 	renderCounterApp();
// };
// const reset= () => {
// 	count=0;
// 	renderCounterApp();

// const sonal = document.getElementById('new');

// const renderCounterApp = () =>{
// const templateTwo= (
//   <div>
//   	<h1>Count:{count}</h1>
//   	<button onClick={addOne}>+1</button>
//   	<button onClick={minusOne}>-1</button>
//   	<button onClick={reset}>reset</button>
//   </div>
// );
// ReactDOM.render(templateTwo, sonal);
// };

// renderCounterApp();