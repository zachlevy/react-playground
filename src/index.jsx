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

const content = [
  {
    id: 1,
    slug: "about",
    menu: "About",
    title: "About Us",
    body: "Our company was founded in 2015"
  }, {
    id: 2,
    slug: "contact",
    menu: "Contact",
    title: "Contact Us",
    body: "Feel free to contact us",
    form: {
      mailto: "zacharyalevy+dev@gmail.com",
      subject: true,
      body: true,
      button: "Send"
    }
  }, {
    id: 3,
    slug: "services",
    menu: "Services",
    title: "Services",
    body: [
      {
        id: 4,
        slug: "investment-advice",
        title: "Investment Advice",
        body: "We'll give you the best advice for real."
      },{
        id: 5,
        slug: "year-end-accounting",
        title: "Year End Accounting",
        body: "Don't worry about a thing, just ring your accountant."
      }
    ]
  }
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: themes[0],
      content: content[2]
    }
  }
  // componentDidMount() {
  //   fetch("http://jsonplaceholder.typicode.com/posts/1")
  //   .then(response => response.json())
  //   .then(data => {
  //     this.setState({
  //       content: {
  //         about: {
  //           title: data.title,
  //           body: data.body
  //         }
  //       }
  //     })
  //     console.log(data)
  //   })
  // }
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
          <Page content={this.state.content} />
        </div>
      </div>
    )
  }

}

render(<App/>, document.querySelector("#app"));
