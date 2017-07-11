/**
 * Created by derek on 11/07/2017.
 */
import React from 'react'
import Transition from 'react-transition-group/Transition'
import PropTypes from 'prop-types'

const duration = 300

const defaultStyle = {
	transition: `opacity ${duration}ms ease-in-out`,
	opacity: 0,
}

const transitionStyles = {
	entering: {opacity: 1},
	entered: {opacity: 1},
}

const Fade = ({in: inProp, children}) => (
	<Transition
		in={inProp}
		timeout={duration}
		appear={true}>
		{(state) => (
			<div style={{...defaultStyle, ...transitionStyles[state]}}>
				{children}
			</div>
		)}
	</Transition>
)

Fade.propTypes = {
	in: PropTypes.bool,
	children: PropTypes.element,
}
Fade.defaultProps = {
	in: true,
}

export default Fade