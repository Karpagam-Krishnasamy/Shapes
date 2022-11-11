import React from 'react';
import Shape from './Shape';

const Shapes = ({ state: { shapes }}) =>
	shapes.map((shape, index) =>
		<Shape key={ index } { ...shape }/>);

export default Shapes;
