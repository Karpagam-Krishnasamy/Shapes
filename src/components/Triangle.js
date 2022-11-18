import React from 'react';

const half = 0.5;

const Triangle = ({
	data: { size, x, y, life },
	config: { backgroundColors },
}) =>
	<div { ...{
		className: 'centre',
		style: {
			width: 0,
			height: 0,
			left: `${ x }vmin`,
			top: `${ y }vmin`,
			borderLeft: `${ size * half }vmin solid transparent`,
			borderRight: `${ size * half }vmin solid transparent`,
			borderBottom: `${ size }vmin solid ${ backgroundColors[life] }`,
		},
	}
	}
	/>;

export default Triangle;
