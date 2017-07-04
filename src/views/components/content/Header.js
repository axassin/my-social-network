import React from 'react'
import './header.scss'
import AppBar from 'material-ui/AppBar';

const Header = () => {
	return(
		<AppBar
			title="Sex"
			style={styles.appStyle}
			titleStyle={styles.titleStyle}
		/>
	)
}

const styles = {
	appStyle:{
		backgroundColor:"black",
	},
	titleStyle:{
		color:"#33691E"
		// fontStyle:"Comic Sans MS, Comic Sans, cursive"
	}

}

export { Header }

