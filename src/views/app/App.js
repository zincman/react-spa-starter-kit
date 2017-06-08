/**
 * Created by derek on 08/06/2017.
 */
import React from 'react'
import { MuiThemeProvider } from 'material-ui/styles'
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Link,
} from 'react-router-dom'
import Button from 'material-ui/Button'
import CSSModules from 'react-css-modules'
import styles from './app.css'
import Home from '../home/Home'
import Inbox from '../inbox/Inbox'
import About from '../about/About'
import immutable from '../../utilities/immutable'

class App extends React.Component {
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

export default CSSModules(App, styles)