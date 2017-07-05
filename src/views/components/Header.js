import React from 'react'
import '../styles/header.scss'
import AppBar from 'material-ui/AppBar';

const Header = () => {
	return(
		<div className="head">
			<AppBar
				title="Sex"
				style={styles.appStyle}
				titleStyle={styles.titleStyle}
			/>
		</div>
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

