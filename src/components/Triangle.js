import React from 'react';

const half = 0.5;

const Triangle = ({
	data: { size, x, y, life },
	config: { backgroundColor },
}) =>
	<div
		style={ {
			width: `${ 0 }vmin`,
			height: `${ 0 }vmin`,
			left: `${ x }vmin`,
			top: `${ y }vmin`,
			borderLeft: `${ size * half }vmin solid transparent`,
			borderRight: `${ size * half }vmin solid transparent`,
			borderBottom: `${ size }vmin solid ${ backgroundColor[life] }`,
		} }
		className="centre"
	/>;

export default Triangle;
