import React, { Component } from 'react';
import './App.css';
import Page from './components/Page'

class App extends Component {
  state = {
    renderedResponse: ''
  }

  getResponse = async() => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
     console.log(this.getResponse)
    return body; 
  }

  componentDidMount() {
    this.getResponse()
      .then(res => {
        const someData = res;
        this.setState({ renderedResponse: someData });
      })
  }

  render() {
    const { renderedResponse } = this.state;

    return (
      <div className="App">
        <Page/>
        <p>{renderedResponse.express}</p>
        {/* <img src="rule.jpg" alt="lol"/> */}
      </div>
    );
  }
}

export default App;
