import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Options from './Options';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
	state = {
		options:[],
		selectedOption: undefined
	};

	handleClearSelectedOption = () => {
		this.setState(() => ({ selectedOption: undefined }));
	};

	handleDeleteOptions = () => {
		this.setState(() => ({options:[]}));  
	};

	handleDeleteOption = (optionToRemove) => {
		this.setState((prevState)=>({
			options: prevState.options.filter((option) => {
				return optionToRemove !== option;
			})
		}));
	};	

	handlePick = () => {
		var randomNum= Math.floor(Math.random()*this.state.options.length);
		var option = this.state.options[randomNum];
		// this.setState({selectedOption: option});
		this.setState(() => ({
			selectedOption: option
		}));
	};
	
	handleAddOption = (option) => {
		if(!option){
			return 'Enter valid value to add'
		}

		else if(this.state.options.indexOf(option)>-1){
			return 'This option already exists'

		}

		this.setState((prevState) => ({options: prevState.options.concat(option)}));
	};


	componentDidMount(){
		try{
		const json= localStorage.getItem('options');
		const options = JSON.parse(json);
		if(options){
				this.setState({options});	
				}
		}

		catch(e){
				//do nothing at all
		}
}

	componentDidUpdate(prevProps, prevState){
		if(prevState.options.length !== this.state.options.length){
				const json = JSON.stringify(this.state.options);
		localStorage.setItem('options', json);
		console.log('saving data');
		}
	}
	componentWillUnmount(){
		console.log('componentDidUnmount');
	}

	render(){	
		const title="Indecision";
		const subtitle = "What I cannot create,I don't understand";
		return(
			<div>
			<Header title={title} subtitle={subtitle} />
			<div className="container">
				<Action handlePick={this.handlePick} hasOptions={this.state.options.length>0} />
				<div className="widget">
				<Options 
				options={this.state.options}
				handleDeleteOptions={this.handleDeleteOptions}
				handleDeleteOption={this.handleDeleteOption}
				/>
				<AddOption  handleAddOption={this.handleAddOption} />
			</div>
				</div>
				<OptionModal 
					selectedOption={this.state.selectedOption}
					handleClearSelectedOption={this.handleClearSelectedOption}
				/>			
			</div>
		);
	}
}