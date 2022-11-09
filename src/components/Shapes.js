import React from 'react';
import Square from './Square';

const Shapes = ({ state: { shapes }}) =>
	shapes.map(({ size, x, y }, index) =>
		<Square key={ index } { ...{ size, x, y } }/>);

export default Shapes;
