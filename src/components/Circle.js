import React from 'react';

const Circle = ({ size, x, y }) =>
	<div
		style={ {
			position: 'absolute',
			width: `${ size }vmin`,
			height: `${ size }vmin`,
			left: `${ x }vmin`,
			top: `${ y }vmin`,
			backgroundColor: 'black',
			transform: 'translate(-50%, -50%) ',
			borderRadius: '50%',
		} }
	/>;

export default Circle;
