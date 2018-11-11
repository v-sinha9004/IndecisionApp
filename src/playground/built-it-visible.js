class VisiblityToggle extends React.Component {
  constructor(props){
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visiblity : false 
    };
  }

  handleToggleVisibility(){
   this.setState((prevState) => {
      return {
          visiblity : !prevState.visiblity
      };
   });
  }

  render(){
    return (
      <div>
        <h1>Visiblity Toggle</h1>
          <button onClick={this.handleToggleVisibility}>
            {this.state.visiblity ? "Hide details": "Show details"}
          </button>
          {this.state.visiblity &&(
            <div>
               <p>Can you see me?</p>
            </div>
          )}
      </div>
      );
  }

}


ReactDOM.render(<VisiblityToggle /> , document.getElementById('new'));



// let visiblity = false;

// const app= {
// 	h1: 'Visiblity Toggle',
// 	p:'You can see me',
// 	buttonText: 'Show details'
// }

// const onToggle = () =>{
// 	visiblity = !visiblity;
// 	render();
// };


// const render = () => {
// 	const template = (
//   <div>
//   	<h1>{app.h1}</h1>
//   	<button onClick={onToggle}>
//   	{visiblity ? "Hide details": "Show details"}
//   	</button>
//   	{visiblity && <p>{app.p}</p>}
//   </div>
// )

// ReactDOM.render(template, document.getElementById('new'));
// }

// render();
