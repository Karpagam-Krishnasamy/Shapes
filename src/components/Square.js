import React from 'react';

const Square = ({ data, actions }) => {
	const { size, x, y, colorCode } = data;

	return (
		<div
			{ ...{
				className: 'centre',
				style: {
					width: `${ size }vmin`,
					height: `${ size }vmin`,
					left: `${ x }vmin`,
					top: `${ y }vmin`,
					backgroundColor: `hsl(${ colorCode } 100% 50%)`,
				},
			} }
			onClick={ () => actions.changeColor(data) }
		/>);
};

export default Square;
