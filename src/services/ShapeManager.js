import { rndBetween } from '@laufire/utils/lib';
import { rndValue } from '@laufire/utils/random';

const half = 0.5;

const getSpace = (size, backgroundSize) =>
	rndBetween(size * half, backgroundSize - (size * half));

const ShapeManager = {
	addShape: ({
		state: { shapes },
		config: { size: { min, max }, backgroundSize, maxShapeCount },
	}) => {
		const size = rndBetween(min, max);
		const shape = rndValue(['square', 'circle']);

		return [...shapes,
			...maxShapeCount > shapes.length
				? [{
					shape: shape,
					size: size,
					x: getSpace(size, backgroundSize),
					y: getSpace(size, backgroundSize),
				}]
				: []];
	},
};

export default ShapeManager;
