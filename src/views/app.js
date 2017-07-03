import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Header, Footer, Main} from './components/content'

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Main />
				<Footer />
			</div>
		)
	}
}

ReactDom.render(
	<App />
	, document.getElementById("app")
);