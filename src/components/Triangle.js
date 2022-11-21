import React from 'react';

const half = 0.5;

const Triangle = ({	data,	actions }) => {
	const { size, x, y, colorCode } = data;

	return (
		<div
			{ ...{
				className: 'centre',
				style: {
					width: 0,
					height: 0,
					left: `${ x }vmin`,
					top: `${ y }vmin`,
					borderLeft: `${ size * half }vmin solid transparent`,
					borderRight: `${ size * half }vmin solid transparent`,
					borderBottom: `${ size }vmin solid hsl(${ colorCode } 100% 50%)`,
				},
			} }
			onClick={ () => actions.changeColor(data) }
		/>);
};

export default Triangle;
