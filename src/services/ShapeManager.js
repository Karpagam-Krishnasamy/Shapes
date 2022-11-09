import { rndBetween } from '@laufire/utils/lib';

const half = 0.5;

const getSpace = (size, backgroundSize) =>
	rndBetween(size * half, backgroundSize - (size * half));

const ShapeManager = {
	addSquare: ({
		state: { shapes },
		config: { size: { min, max }, backgroundSize, maxShapeCount },
	}) => {
		const size = rndBetween(min, max);

		return [...shapes,
			(maxShapeCount > shapes.length)
			&& {
				size: size,
				x: getSpace(size, backgroundSize),
				y: getSpace(size, backgroundSize),
			}];
	},
};

export default ShapeManager;
