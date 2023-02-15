import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Options from './Options';
import Header from './Header';

class IndecisionApp extends React.Component {
  state = {
    options: [],
  };

  handleAddOption = (option) => {
    if (!option){
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({options: [...prevState.options, option]}));
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];

    alert(option);
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: []}));
  }

  handleDeleteOption = (option) => {
   this.setState((prevState) => ({options: prevState.options.filter((item) => item !== option)}));
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
};

export default IndecisionApp;
