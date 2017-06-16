// @flow

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import CSSModules from 'react-css-modules'
import styles from './Home.css'
import Welcome from './Welcome'

type Props = {
	token: string,
}

class Home extends Component {
	props: Props
	static propTypes = {
		token: PropTypes.string.isRequired,
	}
	static defaultProps = {
		token: 'my token',
	}
	constructor(props: Props){
		super(props)
	}
	render(){
		return(
			<section styleName="container">
				<Welcome speech={undefined} />
				<p>{moment().format()}</p>
				<p>{this.props.token}</p>
			</section>
		)
	}
}


export default CSSModules(Home, styles)
