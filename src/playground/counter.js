// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
//   console.log('addOne', count);
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
//   console.log('minusOne', count);
// }
// const reset = () => {
//   count = 0;
//   renderCounterApp();
//   console.log('reset', count);
// }

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
//   ReactDOM.render(templateTwo, appRoot);
// }



// renderCounterApp();

class Counter extends React.Component {
  constructor(props){
    super(props);
    
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: 0,
    };
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }

  reset(){
    this.setState(() => {
      return {
        count: 0
      };
    });
  }

  render() {
    return(
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));