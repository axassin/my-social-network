import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import PostIndex from './Post/PostIndex'
import PostNew from './Post/PostNew'

class Main extends Component {
	render(){
		return(
			<BrowserRouter>
			<div>
				<Switch>
					<Route path="/new" component={PostNew} />
					<Route path="/" component={PostIndex} />
				</Switch>
			</div>
			</BrowserRouter>
		)
	}

}

const style = {
  margin: 12,
};

export { Main }