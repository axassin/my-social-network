import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import reducers from './reducers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './styles/app.scss'
import { Header, Footer, Main} from './components'


injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
class App extends Component {
	render() {
		return (
			<Provider store={createStoreWithMiddleware(reducers)}>
				<MuiThemeProvider  muiTheme={getMuiTheme(darkBaseTheme)}>
					<div>
						<Header />
						<Main />
						<Footer />
					</div>
				</MuiThemeProvider>
			</Provider>
		)
	}
}

ReactDom.render(
	<App />
	, document.getElementById("app")
);