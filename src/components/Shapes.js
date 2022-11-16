import React from 'react';
import Shape from './Shape';

const Shapes = (context) => {
	const { state: { shapes }} = context;

	return shapes.map((shape, index) =>
		<Shape key={ index } { ...{ ...context, data: shape } }/>);
};

export default Shapes;
