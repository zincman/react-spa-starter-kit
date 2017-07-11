import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import CSSTransition from 'react-transition-group/CSSTransition'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import styles from './About.css'
import Fade from './Fade'

class About extends Component {
	constructor(props){
		super(props)
		this.handleAdd = this.handleAdd.bind(this)
		this.handleRemove = this.handleRemove.bind(this)
		this.state={
			show: true,
			items: ['hello', 'world', 'click', 'me']
		}
	}

	componentDidMount(){
		// this.intervId = setInterval(()=>{
		// 	this.setState((prevState, props)=>({
		// 		show: !prevState.show
		// 	}))
		// }, 2500)
	}

	componentWillUnmount(){
		// clearInterval(this.intervId)
	}

	handleAdd(){
		const newItems = this.state.items.concat([
			prompt('Enter some text')
		])
		this.setState({items: newItems})
	}

	handleRemove(i){
		/*
		 * The slice() method returns a shallow copy of a portion of an array
		 * into a new array object selected from begin to end (end not included).
		 * The original array will not be modified.
		 */
		let newItems = this.state.items.slice()
		newItems.splice(i, 1)
		this.setState({items: newItems})
	}

	render(){
		return(
			<div>
				<section className="global-class" styleName="red-wrap bold">
					<h1>{'It\'s a web starter kits by Derek Lu'}</h1>
					<h3>The subtitle</h3>
				</section>
				<section styleName="main-body">
					<CSSTransition
						in={this.state.show}
						appear={true}
						timeout={2500}
						classNames="fade">
						<h1>There is main body text.</h1>
					</CSSTransition>
				</section>
				<section>
					<button onClick={this.handleAdd}>Add Item</button>
					<TransitionGroup appear={true}>
						{this.state.items.map((item, i) => (
							<Fade key={item+1}>
								<div>
									{item}{' '}
									<button onClick={()=>this.handleRemove(i)}>
										remove
									</button>
								</div>
							</Fade>
						))}
					</TransitionGroup>
				</section>
			</div>
		)
	}
}

// Note: avoid using multiple CSS Modules to describe a single element.
// Composition and Mixin are preferable
export default CSSModules(About, styles, {allowMultiple: true})