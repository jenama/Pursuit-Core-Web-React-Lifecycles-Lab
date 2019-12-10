import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import TodosList from './Components/TodosList'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todo: 'go grocery shopping'
    }
  }

  componentDidMount() {
  console.log('the component was mounted')

  }

  handleFormSubmission = (e) => {
    e.preventDefault()
    console.log('form was submitted')

  }

  render(){
    return (
      <div className="App">
        <Form
          handleFormSubmission={this.handleFormSubmission}
        />
        <TodosList/>
        

      </div>
    );
  }
  
}

export default App;
