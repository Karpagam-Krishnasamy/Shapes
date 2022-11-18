import React from 'react';

const Circle = ({ data: { size, x, y, life }, config: { backgroundColors }}) =>
	<div { ...{
		className: 'centre',
		style: {
			width: `${ size }vmin`,
			height: `${ size }vmin`,
			left: `${ x }vmin`,
			top: `${ y }vmin`,
			backgroundColor: `${ backgroundColors[life] }`,
			borderRadius: '50%',
		},
	}
	}
	/>;

export default Circle;
