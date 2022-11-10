import React from 'react';
import Shape from './Shape';

const Shapes = ({ state: { shapes }}) =>
	shapes.map(({ shape, size, x, y }, index) =>
		<Shape key={ index } { ...{ shape, size, x, y } }/>);

export default Shapes;
