
class IndecisionApp extends React.Component {
  constructor(props){
    super(props);

    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: [],
    };
  }

  componentDidMount(){
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
  
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e){
      // Do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);

      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
  }

  handleAddOption(option) {
    if (!option){
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({options: [...prevState.options, option]}));
  }

  handlePick(){
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];

    alert(option);
  }

  handleDeleteOptions(){
    this.setState(() => ({ options: []}));
  }

  handleDeleteOption(option){
   this.setState((prevState) => ({options: prevState.options.filter((item) => item !== option)}));
  }

  render(){
    const subtitle = 'Put your life in the hands of a computer.';

    return(
      <div>
        <Header
          subtitle={subtitle} 
        />
        <Action 
          handlePick={this.handlePick} 
          hasOptions={this.state.options.length > 0} 
        />
        <Options 
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption} 
          options={this.state.options} 
        />
        <AddOption 
          handleAddOption={this.handleAddOption} 
        />
      </div>
    );
  }
}

const Action = ({hasOptions, handlePick}) => {
  return (
    <div>
      <button 
        disabled={!hasOptions}
        onClick={handlePick}
      >
        What should I do?
      </button>
    </div>
  );
}

const Options = ({handleDeleteOptions, handleDeleteOption, options}) => {
  return (
    <div>
      <button onClick={handleDeleteOptions}>Remove All</button>
      { options.length === 0 && <p>Please add an option to get started!</p> }
      {
        options.length > 0 && options.map((option, index) => (
          <Option key={index} option={option} handleDeleteOption={handleDeleteOption} />
        ))
      }
    </div>
  )
}

const Option = ({option, handleDeleteOption}) => {
  return (
    <div>
      {option}
      <button onClick={(e) => {
        handleDeleteOption(option);
      }}>remove</button>
    </div>
  );
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

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
        { this.state.error && <p>{this.state.error}</p> }
        <form onSubmit={this.handleAddOption}>
          <input type='text' name="option" />
          <button>Add option</button>
        </form>
      </div>
    )
  }
}
  
const Header = ({title, subtitle}) => {
  return (
    <div>
      <h1>{title}</h1>
      { subtitle && <h2>{subtitle}</h2> }
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision',
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));