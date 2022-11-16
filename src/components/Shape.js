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
	const { data: { type }} = context;
	const ShapeComponent = ShapeSelector[type];

	return <ShapeComponent { ...context }/>;
};

export default Shape;
