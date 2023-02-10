// const app = {
//   title: 'Visibility Toggle',
//   text: 'This is shown now',
//   shown: false,
// }

// const appRoot = document.getElementById('app');

// const toggleVisibility = () => {
//   app.shown = !app.shown;

//   render();
// }

// const render = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={toggleVisibility}>{app.shown ? 'Hide detais' : 'Show details'}</button>
//       {app.shown && <p>{app.text}</p>}
//     </div>
//   )
//   ReactDOM.render(template, appRoot);
// }

// render();

class VisibilityToggle extends React.Component {
  constructor(props){
    super(props);

    this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
    this.state = {
      isVisible: false,
    };
  }

  handleVisibilityToggle() {
    this.setState((prevState) => {
      return {
        isVisible: !prevState.isVisible
      };
    });
  }

  render(){
    const buttonText = this.state.isVisible ? 'Hide details' : 'Show details';

    return(
      <div>
        <h1>Build it! Visible</h1>
        <button onClick={this.handleVisibilityToggle}>{buttonText}</button>

        {this.state.isVisible && (
          <div>
            <p>Hey. These are some details you can now see!</p>
          </div>
        )}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));