// @flow
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import classNames from 'classnames/bind'
import Chip from 'material-ui/Chip'

import styles from './Message.css'

// type Props = {
// 	params: { id: string },
// 	tip: string,
// }

type mouseState = 'static' | 'hover' | 'active'

class Message extends Component {
	// props: Props
	state: {display: mouseState } = { display: 'static' }

	static propTypes = {
		match: PropTypes.object
	}

	// static defaultProps = {
	// 	params: { id: '-10000' },
	// }

	componentWillMount(){
		this.cx = classNames.bind(styles)
	}


	// props: Props
	constructor(props){
		super(props)
		const self: any = this
		self._setDisplay = this._setDisplay.bind(this)
		self._onMouseEnter = this._onMouseEnter.bind(this)
		self._onMouseLeave = this._onMouseLeave.bind(this)
		self._onMouseDown = this._onMouseDown.bind(this)
	}

	_setDisplay(display: mouseState){
		this.setState({display})
	}
	_onMouseEnter(){
		this._setDisplay('hover')
	}
	_onMouseLeave(){
		this._setDisplay('static')
	}
	_onMouseDown(){
		this._setDisplay('active')
	}
	render(){
		const {match} = this.props
		const chipClass = this.cx({
			normal: true,
			active: this.state.display === 'active'
		})
		/*eslint no-console: ["error", { allow: ["warn", "error"] }] */
		console.warn(chipClass)
		return(
			<section id="message" styleName="container">
				<Chip
					classes={{root: chipClass}}
					label={`Message:${match.params.id}`}
					onMouseEnter={this._onMouseEnter}
					onMouseLeave={this._onMouseLeave}
					onMouseDown={this._onMouseDown} />
				<h2>{this.state.display}</h2>

			</section>
		)
	}
}

export default CSSModules(Message, styles)
