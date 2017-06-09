import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './About.css'

class About extends Component {
	render(){
		return(
			<div>
				<section styleName="red-wrap">
					<h1>{'It\'s a web starter kits by Derek Lu'}</h1>
					<h3>The subtitle</h3>
				</section>
				<section>
					<h1>Get started from here!</h1>
				</section>
			</div>
		)
	}
}

export default CSSModules(About, styles)
