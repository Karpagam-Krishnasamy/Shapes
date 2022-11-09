import { rndBetween } from '@laufire/utils/lib';

const half = 0.5;

const getSpace = (size, backgroundSize) =>
	rndBetween(size * half, backgroundSize - (size * half));

const ShapeManager = {
	addSquare: ({
		state: { shapes },
		config: { size: { min, max }, backgroundSize },
	}) => {
		const size = rndBetween(min, max);

		return [...shapes,
			{
				size: size,
				x: getSpace(size, backgroundSize),
				y: getSpace(size, backgroundSize),
			}];
	},
};

export default ShapeManager;
