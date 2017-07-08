import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link, Route } from 'react-router-dom'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import Button from 'material-ui/Button'
import CSSModules from 'react-css-modules'

import styles from './Inbox.css'
import Message from './Message'

const jsStyle = createStyleSheet('Inbox', {
	bouton: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
	},
})

class Inbox extends Component {
	static propTypes = {
		match: PropTypes.object,
		classes: PropTypes.object,
	}

	render(){
		const {match, classes} = this.props

		return(
			<section className={classes.bouton} styleName="container">
				<Link to={`${match.url}/AABBCCDD`}>
					<Button color="primary" raised>Refresh</Button>
				</Link>
				<Route path={`${match.url}/:id`} component={Message} />
			</section>
		)
	}
}

export default withStyles(jsStyle)(CSSModules(Inbox, styles))