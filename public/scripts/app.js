'use strict';

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of the computer!'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options!' : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'This is a text'
    )
  )
);
var user = {
  name: 'Christian Geroy',
  age: 31,
  location: 'Philippines'
};
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
