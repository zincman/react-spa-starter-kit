import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './About.css'

class About extends Component {
	render(){
		return(
			<div>
				<section className="global-class" styleName="red-wrap bold">
					<h1>{'It\'s a web starter kits by Derek Lu'}</h1>
					<h3>The subtitle</h3>
				</section>
				<section styleName="main-body">
					<h1>There is main body text</h1>
				</section>
			</div>
		)
	}
}

// Note: avoid using multiple CSS Modules to describe a single element.
// Composition and Mixin are preferable
export default CSSModules(About, styles, {allowMultiple: true})