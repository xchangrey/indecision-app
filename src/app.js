var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of the computer!',
};

var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options!' : 'No options'}</p>
    <ol>
      <li>This is a text</li>
    </ol>
  </div>
);
var user = {
  name: 'Christian Geroy',
  age: 31,
  location: 'Philippines',
};
var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
