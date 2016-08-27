import styles from './index.css';
import React from 'react';
import { render } from 'react-dom';
import NavBar from "./NavBar"
import Page from "./Page"
import ThemeSelector from "./ThemeSelector"

const themes = [
  {
    name: "Red",
    primaryColor: "darkred",
    secondaryColor: "red",
    tertiaryColor: "lightred"
  }, {
    name: "Blue",
    primaryColor: "darkblue",
    secondaryColor: "blue",
    tertiaryColor: "lightblue"
  }
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: themes[0],
      name: "Joe"
    }
  }
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log(data))
  }
  handleChangeTheme(theme) {
    this.setState({
      theme: theme
    })
  }
  render() {
    return (
      <div>
        <ThemeSelector themes={themes} handleChangeTheme={this.handleChangeTheme.bind(this)}/>
        <NavBar />
        <div className="container">
          <h1 style={{color: this.state.theme.primaryColor}}>It Works! {this.state.name}</h1>
          <Page />
        </div>
      </div>
    )
  }

}

render(<App/>, document.querySelector("#app"));
