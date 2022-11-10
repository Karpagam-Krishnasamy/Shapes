import React from 'react';

const Triangle = ({ size, x, y }) =>
	<div
		style={ {
			position: 'absolute',
			width: `${ 0 }vmin`,
			height: `${ 0 }vmin`,
			left: `${ x }vmin`,
			top: `${ y }vmin`,
			borderLeft: `${ size }vmin solid transparent`,
			borderRight: `${ size }vmin solid transparent`,
			borderBottom: `${ size }vmin solid black`,
			transform: 'translate(-50%, -50%) ',
		} }
	/>;

export default Triangle;
