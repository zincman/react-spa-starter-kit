import React, {Component} from 'react'
import Button from 'material-ui/Button'
import { Link, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'

import styles from './Inbox.css'
import Message from './Message'

class Inbox extends Component {
	static propTypes = {
		match: PropTypes.object,
	}

	render(){
		const {match} = this.props

		return(
			<section styleName="container">
				<Link to={`${match.url}/AABBCCDD`}>
					<Button primary raised>Refresh</Button>
				</Link>
				<Route path={`${match.url}/:id`} component={Message} />
			</section>
		)
	}
}

export default CSSModules(Inbox, styles)
