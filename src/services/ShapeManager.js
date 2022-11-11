import { rndBetween } from '@laufire/utils/lib';
import { rndValue } from '@laufire/utils/random';

const half = 0.5;
const directions = ['left', 'right', 'top', 'bottom'];

const getSpace = (size, backgroundSize) =>
	rndBetween(size * half, backgroundSize - (size * half));

const ShapeManager = {

	addSquare: ({
		state: { shapes },
		config: { size: { min, max }, backgroundSize, maxShapeCount },
	}) => {
		const size = rndBetween(min, max);

		return [...shapes,
			...maxShapeCount > shapes.length
				? [{
					shape: 'square',
					size: size,
					x: getSpace(size, backgroundSize),
					y: getSpace(size, backgroundSize),
					direction: rndValue(directions),
				}]
				: []];
	},

	addCircle: ({
		state: { shapes },
		config: { size: { min, max }, backgroundSize, maxShapeCount },
	}) => {
		const size = rndBetween(min, max);

		return [...shapes,
			...maxShapeCount > shapes.length
				? [{
					shape: 'circle',
					size: size,
					x: getSpace(size, backgroundSize),
					y: getSpace(size, backgroundSize),
					direction: rndValue(directions),
				}]
				: []];
	},

	addTriangle: ({
		state: { shapes },
		config: { size: { min, max }, backgroundSize, maxShapeCount },
	}) => {
		const size = rndBetween(min, max);

		return [...shapes,
			...maxShapeCount > shapes.length
				? [{
					shape: 'triangle',
					size: size,
					x: rndBetween(size, backgroundSize - size),
					y: getSpace(size, backgroundSize),
					direction: rndValue(directions),
				}]
				: []];
	},

	getShape: (context) => rndValue([
		ShapeManager.addSquare(context),
		ShapeManager.addCircle(context),
		ShapeManager.addTriangle(context),
	]),

};

export default ShapeManager;
