import React, { Component } from "react";
import "./App.css";
import Nav from './Navigation/Navigation'
import Display from './DisplayContent/DisplayContent'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // greeting: '',
      show: ''
    }
  };
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.show !== nextState.show) {
      return true;
    }
    return false;
  }
  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('[App.js] componentWillUnmount')
    alert('unMounted')
  }

  click = param => {
    if (param === 'home') {
      this.setState({
        // greeting: 'You are in Home Section',
        show: 'This Page designed using Basic ReactJS'
      })
    } else if (param === 'about') {
      this.setState({
        // greeting: 'You are in About Us Section',
        show: 'These contents are changing becauase of States and props'
      })
    } else if (param === 'contact') {
      this.setState({
        // greeting: 'You are in Contact Us Section',
        show: 'Navigation and Display are the 2 components and sharing data through props'
      })
    } else {
      // this.setState({ greeting: 'Welcome Alien' })
    }
  }
  render() {
    console.log("[App.js] rendering...")
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome User</h2>
        </div>
        {/* <div className='navDiv'>
          <ul className='navList'>
            <li onClick={() => this.click('home')}>Home</li>
            <li onClick={() => this.click('about')}>About Us</li>
            <li onClick={() => this.click('contact')}>Contact Us</li>
          </ul>
        </div> */}
        <Nav click={this.click} />
        <Display
          //  display={this.state.greeting}
          showMore={this.state.show}></Display>
      </div>
    );
  }
}

export default App;
