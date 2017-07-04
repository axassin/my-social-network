import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import './main.scss'
const Main = (props) => {
	return(
		<div className="content">
			<div className="content-inside">
				<RaisedButton label="Default" style={style} />
			</div>
		</div>
	)
}

const style = {
  margin: 12,
};

export { Main }