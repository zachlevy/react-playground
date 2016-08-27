import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.css';
import React from 'react';
import { render } from 'react-dom';
import { NavBar } from "./NavBar"


const blueTheme = {
  primaryColor: "darkblue",
  secondaryColor: "blue",
  tertiaryColor: "lightblue"
}
const redTheme = {
  primaryColor: "darkred",
  secondaryColor: "red",
  tertiaryColor: "lightred"
}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: blueTheme,
      name: "Joe"
    }
  }
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log(data))
  }
  handleChangeTheme() {
    this.changeTheme()
  }
  changeTheme() {
    this.setState({
      theme: redTheme
    })
  }
  render() {
    return (
      <div>
        <NavBar />
        <h1 style={{color: this.state.theme.primaryColor}}>It Works! {this.state.name}</h1>
        <p>This React project just works including <span className={styles.blueBg}>module</span> local styles.</p>
        <p>Global bootstrap css import works too as you can see on the following button.</p>
        <p><a className="btn btn-primary btn-lg" onClick={this.handleChangeTheme.bind(this)}>ChangeTheme</a></p>
      </div>
    )
  }

}

render(<App/>, document.querySelector("#app"));
