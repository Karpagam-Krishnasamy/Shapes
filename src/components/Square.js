import React from 'react';

const Square = ({ shape: { size, x, y, life }, config: { backgroundColor }}) =>
	<div
		style={ {
			width: `${ size }vmin`,
			height: `${ size }vmin`,
			left: `${ x }vmin`,
			top: `${ y }vmin`,
			backgroundColor: `${ backgroundColor[life] }`,
		} }
		className="centre"
	/>;

export default Square;
