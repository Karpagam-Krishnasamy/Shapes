import { rndBetween } from '@laufire/utils/lib';
import { rndValue } from '@laufire/utils/random';

const half = 0.5;
const directions = ['left', 'right', 'top', 'bottom'];

const getSpace = (size, backgroundSize) =>
	rndBetween(size * half, backgroundSize - (size * half));

const ShapeManager = {

	addShape: ({
		state: { shapes },
		config: { size: { min, max }, backgroundSize, maxShapeCount, life },
	}) => {
		const size = rndBetween(min, max);
		const shape = rndValue(['square', 'circle', 'triangle']);

		return [...shapes,
			...maxShapeCount > shapes.length
				? [{
					shape: shape,
					size: size,
					x: getSpace(size, backgroundSize),
					y: getSpace(size, backgroundSize),
					direction: rndValue(directions),
					life: life,
				}]
				: []];
	},

};

export default ShapeManager;
