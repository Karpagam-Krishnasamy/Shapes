import { rndValue, rndBetween, rndString } from '@laufire/utils/random';

const half = 0.5;
const directions = ['left', 'right', 'top', 'bottom'];
const shapeNames = ['square', 'circle', 'triangle'];

const getSpace = (size, backgroundSize) =>
	rndBetween(size * half, backgroundSize - (size * half));

const generateShape = ({ size: { min, max },
	backgroundSize,
	life,
	idLength }) => {
	const size = rndBetween(min, max);

	return [{
		id: rndString(idLength),
		type: rndValue(shapeNames),
		size: size,
		x: getSpace(size, backgroundSize),
		y: getSpace(size, backgroundSize),
		direction: rndValue(directions),
		life: life,
		colorCode: 0,
	}];
};

const getRandomColorCode = ({ min, max }) => ({
	colorCode: rndBetween(min, max),
});

const ShapeManager = {
	addShape: ({ state: { shapes }, config }) =>
		[...shapes,
			...config.maxShapeCount > shapes.length
				? generateShape(config)
				: []],

	changeColor: ({ state: { shapes }, config: { colorCode }, data }) =>
		shapes.map((shape) => ({
			...shape,
			...shape.id === data.id && getRandomColorCode(colorCode),
		})),
};

export default ShapeManager;
