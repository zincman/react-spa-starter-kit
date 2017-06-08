// @flow

import React, {Component} from 'react'
import Typography from 'material-ui/Typography'

type Props = {
	speech: string,
	text?: string
}
class Welcome extends Component {
	props: Props
	static defaultProps = {
		speech: 'I\'m a react spa start kit',
	}
	constructor(props: Props){
		super(props)
	}
	render(){
		const {speech, text} = this.props
		return(
			<div>
				<Typography type="subheading" gutterBottom>
					{speech}
				</Typography>
				<Typography type="body2" gutterBottom>
					{text}
				</Typography>
			</div>

		)
	}
}

export default Welcome
