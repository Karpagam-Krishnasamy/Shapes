import React from 'react';
import Circle from './Circle';
import Square from './Square';
import Triangle from './Triangle';

const ShapeSelector = {
	square: Square,
	circle: Circle,
	triangle: Triangle,
};

const Shape = ({ shape, size, x, y }) => {
	const ShapeComponent = ShapeSelector[shape];

	return <ShapeComponent { ...{ size, x, y } }/>;
};

export default Shape;
