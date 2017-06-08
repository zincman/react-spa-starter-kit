// @flow

// $FlowFixMe
import normalizeCSS from 'normalize.css/normalize.css'	// eslint-disable-line no-unused-vars
// import 'typeface-roboto'
import './reset.css'
import { MuiThemeProvider } from 'material-ui/styles'
import React from 'react'
import ReactDOM from 'react-dom'
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Link,
} from 'react-router-dom'
import Button from 'material-ui/Button'
import CSSModules from 'react-css-modules'
import styles from './index.css'
import Home from './views/home/Home'
import Inbox from './views/inbox/Inbox'
import About from './views/about/About'
import immutable from './utilities/immutable'

class ReactApp extends React.Component {
	componentDidMount(){
		immutable()
		// Test babel compile
		const objOne = { id: 1, name: 'one', shoes: 'Playboy' }
		const objTwo = {id: 2, name: 'two', wrap: 'fur' }
		/*eslint no-console: ["error", { allow: ["warn", "error"] }] */
		console.warn({...objOne, ...objTwo})
	}

	render(){
		return (
			<MuiThemeProvider>
				<Router>
					<div styleName="container">
						<div styleName="navigation">
							<Link to="/home">
								<Button>Home</Button>
							</Link>
							<Link to="/inbox">
								<Button>Inbox</Button>
							</Link>
							<Link to="/about">
								<Button>About</Button>
							</Link>

						</div>
						<Route exact path="/" render={()=>(
							<Redirect to="/home" />
						)} />
						<Route path="/home" component={Home} />
						<Route path="/inbox" component={Inbox} />
						<Route path="/about" component={About} />
					</div>
				</Router>
			</MuiThemeProvider>
		)
	}
}

const ReactAppWrap = CSSModules(ReactApp, styles)

const mountNode = document.getElementById('root')
ReactDOM.render(<ReactAppWrap />, mountNode)
