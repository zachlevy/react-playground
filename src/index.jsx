import styles from './css/index.css';
import React from 'react';
import { render } from 'react-dom';
import NavBar from "./NavBar"
import Page from "./Page"
import ThemeSelector from "./ThemeSelector"

const themes = [
  {
    name: "Red",
    slug: "theme-red",
    primaryColor: "darkred",
    secondaryColor: "red",
    tertiaryColor: "lightred"
  }, {
    name: "Blue",
    slug: "theme-blue",
    primaryColor: "darkblue",
    secondaryColor: "blue",
    tertiaryColor: "lightblue"
  }
]

const pageContent = {
  title: "Services",
  body: "content content content \n great content"
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: themes[0],
      name: "Joe",
      content: {
        about: {
          title: "Services",
          body: "content content content \n great content"
        }
      }
    }
  }
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => {
      this.setState({
        content: {
          about: {
            title: data.title,
            body: data.body
          }
        }
      })
      console.log(data)
    })
  }
  handleChangeTheme(theme) {
    this.setState({
      theme: theme
    })
  }
  render() {
    return (
      <div className={this.state.theme.slug}>
        <ThemeSelector themes={themes} handleChangeTheme={this.handleChangeTheme.bind(this)}/>
        <NavBar />
        <div className="container">
          <h1>It Works! {this.state.name}</h1>
          <Page content={this.state.content.about} />
        </div>
      </div>
    )
  }

}

render(<App/>, document.querySelector("#app"));
