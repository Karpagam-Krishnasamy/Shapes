import React from 'react';
import Circle from './Circle';
import Square from './Square';

const ShapeSelector = {
	square: Square,
	circle: Circle,
};

const Shape = ({ shape, size, x, y }) => {
	const ShapeComponent = ShapeSelector[shape];

	return <ShapeComponent { ...{ size, x, y } }/>;
};

export default Shape;
