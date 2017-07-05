import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';

import PostIndex from './Post/PostIndex'

class Main extends Component {
	render(){
				return(
			<div className="content">
				<div className="content-inside">
					<PostIndex />
				</div>
			</div>
		)
	}

}

const style = {
  margin: 12,
};

export { Main }