import React from 'react';

const Circle = ({ shape: { size, x, y, life }, config: { backgroundColor }}) =>
	<div
		style={ {
			width: `${ size }vmin`,
			height: `${ size }vmin`,
			left: `${ x }vmin`,
			top: `${ y }vmin`,
			backgroundColor: `${ backgroundColor[life] }`,
			borderRadius: '50%',
		} }
		className="centre"
	/>;

export default Circle;
