import { rndValue, rndBetween } from '@laufire/utils/random';

const half = 0.5;
const directions = ['left', 'right', 'top', 'bottom'];
const shapeNames = ['square', 'circle', 'triangle'];

const getSpace = (size, backgroundSize) =>
	rndBetween(size * half, backgroundSize - (size * half));

const generateShape = ({ size: { min, max }, backgroundSize, life }) => {
	const size = rndBetween(min, max);

	return [{
		type: rndValue(shapeNames),
		size: size,
		x: getSpace(size, backgroundSize),
		y: getSpace(size, backgroundSize),
		direction: rndValue(directions),
		life: life,
	}];
};

const ShapeManager = {
	addShape: ({ state: { shapes }, config }) =>
		[...shapes,
			...config.maxShapeCount > shapes.length
				? generateShape(config)
				: []],
};

export default ShapeManager;
