// @flow
// $FlowFixMe

/*global module*/

import normalizeCSS from 'normalize.css/normalize.css'	// eslint-disable-line no-unused-vars
import 'typeface-roboto'
import './reset.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './views/app/App'

const render = () => {
	const mountNode = document.getElementById('root')
	ReactDOM.render(<App />, mountNode)
}

render()

if (module.hot) {
	module.hot.accept('./views/app/App', ()=>{
		/*eslint no-console: ["error", { allow: ["warn", "error"] }] */
		console.warn('Accepting the updated App module')
		render()
	})
}