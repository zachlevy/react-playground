import styles from './css/index.css';
import React from 'react';
import { render } from 'react-dom';
import NavBar from "./NavBar"
import Page from "./Page"
import ThemeSelector from "./ThemeSelector"
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

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
      content: content,
      sidebar: "left"
    }
  }
  componentWillMount() {
    fetch("http://localhost:3000/pages")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({
        content: data
      })
    })
    fetch("http://localhost:3000/themes")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({
        themes: data
      })
    })
  }
  handleChangeTheme(theme) {
    this.setState({
      theme: theme
    })
  }
  handleChangeSidebar(side) {
    this.setState({
      sidebar: side
    })
  }
  render() {
    return (
      <div className={this.state.theme.slug}>
        <ThemeSelector themes={themes} handleChangeTheme={this.handleChangeTheme.bind(this)} handleChangeSidebar={this.handleChangeSidebar.bind(this)}/>
        <NavBar content={this.state.content}/>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }

}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Page} />
      <Route path="pages/:id" component={Page} sidebar="left"/>
    </Route>
  </Router>
), document.querySelector("#app"))
// render(<App/>, document.querySelector("#app"));
