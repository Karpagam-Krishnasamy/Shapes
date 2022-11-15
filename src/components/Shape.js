import React from 'react';
import Circle from './Circle';
import Square from './Square';
import Triangle from './Triangle';

const ShapeSelector = {
	square: Square,
	circle: Circle,
	triangle: Triangle,
};

const Shape = (context) => {
	const { shape: { shape }} = context;
	const ShapeComponent = ShapeSelector[shape];

	return <ShapeComponent { ...context }/>;
};

export default Shape;
