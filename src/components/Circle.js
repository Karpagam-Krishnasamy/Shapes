import React from 'react';

const Circle = ({ size, x, y }) =>
	<div
		style={ {
			width: `${ size }vmin`,
			height: `${ size }vmin`,
			left: `${ x }vmin`,
			top: `${ y }vmin`,
			backgroundColor: 'black',
			borderRadius: '50%',
		} }
		className="centre"
	/>;

export default Circle;
