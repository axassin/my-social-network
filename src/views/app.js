import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactDom from 'react-dom';
import { Header, Footer, Main} from './components/content'

injectTapEventPlugin();

class App extends Component {
	render() {
		return (
			<MuiThemeProvider  muiTheme={getMuiTheme(darkBaseTheme)}>
				<div>
					<Header />
					<Main />
					<Footer/>
				</div>
			</MuiThemeProvider>
		)
	}
}

ReactDom.render(
	<App />
	, document.getElementById("app")
);