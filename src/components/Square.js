import React from 'react';

const Square = ({ size, x, y }) =>
	<div
		style={ {
			width: `${ size }vmin`,
			height: `${ size }vmin`,
			left: `${ x }vmin`,
			top: `${ y }vmin`,
			backgroundColor: 'black',
		} }
		className="centre"
	/>;

export default Square;
