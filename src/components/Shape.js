import React from 'react';
import Square from './Square';

const ShapeSelector = {
	square: Square,
};

const Shape = ({ shape, size, x, y }) => {
	const ShapeComponent = ShapeSelector[shape];

	return <ShapeComponent { ...{ size, x, y } }/>;
};

export default Shape;
