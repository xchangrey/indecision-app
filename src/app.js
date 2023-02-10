
class IndecisionApp extends React.Component {
  constructor(props){
    super(props);

    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: [],
    };
  }

  handleAddOption(option) {
    if (!option){
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => {
      return {
        options: [...prevState.options, option]
      };
    });
  }

  handlePick(){
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];

    alert(option);
  }

  handleDeleteOptions(){
    this.setState(() => {
      return {
        options: [],
      };
    });
  }

  render(){
    const title =  'Indecision';
    const subtitle = 'Put your life in the hands of a computer.';

    return(
      <div>
        <Header 
          title={title} 
          subtitle={subtitle} 
        />
        <Action 
          handlePick={this.handlePick} 
          hasOptions={this.state.options.length > 0} 
        />
        <Options 
          handleDeleteOptions={this.handleDeleteOptions} 
          options={this.state.options} 
        />
        <AddOption 
          handleAddOption={this.handleAddOption} 
        />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    const { title, subtitle } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button 
          disabled={!this.props.hasOptions}
          onClick={this.props.handlePick}
        >
          What should I do?
        </button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    const { options } = this.props;

    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {
          options.length > 0 && options.map((option, index) => <Option key={index} option={option} />)
        }
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return <p>{this.props.option}</p>
  }
}

class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return { error }
    });

    e.target.elements.option.value = '';
  }
  render() {
    return (
      <div>
        { this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type='text' name="option" />
          <button>Add option</button>
        </form>
      </div>
    )
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));