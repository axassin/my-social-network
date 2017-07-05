import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const PostItem = (props) => {
	const { title, message, _id } = props.post
	return(
		<div>
			<Card>
				<CardHeader
				title={title}
				subtitle="Subtitle"
				actAsExpander={true}
				showExpandableButton={true}
				/>
				<CardText expandable={true}>
					{message}
				</CardText>
			</Card>
		</div>
	)
}

const style = {
	
}
export default PostItem