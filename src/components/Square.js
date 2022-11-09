import React from 'react';

const Square = ({ size, x, y }) =>
	<div
		style={ {
			position: 'absolute',
			width: `${ size }vmin`,
			height: `${ size }vmin`,
			left: `${ x }vmin`,
			top: `${ y }vmin`,
			backgroundColor: 'black',
			transform: 'translate(-50%, -50%) ',
		} }
	/>;

export default Square;
