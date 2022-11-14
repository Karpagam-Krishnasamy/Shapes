import { find } from '@laufire/utils/collection';

const half = 0.5;

const DirectionProps = {
	left: { x: -1, y: 0, direction: 'right' },
	right: { x: 1, y: 0, direction: 'left' },
	top: { x: 0, y: -1, direction: 'bottom' },
	bottom: { x: 0, y: 1, direction: 'top' },
};

const checkBorder = (
	shape, distance, backgroundSize
) => {
	const newPosition = moveNext(shape, distance);

	newPosition.x += DirectionProps[shape.direction].x * (shape.size * half);
	newPosition.y += DirectionProps[shape.direction].y * (shape.size * half);

	return find(newPosition, (value) => value < 0 || value > backgroundSize);
};

const bounceBack = (shape, distance) => ({
	...moveNext({
		...shape,
		direction: DirectionProps[shape.direction].direction,
	}
	, distance),
});

const moveNext = (shape, distance) => ({
	...shape,
	x: shape.x + (DirectionProps[shape.direction].x * distance),
	y: shape.y + (DirectionProps[shape.direction].y * distance),
});

const MovementManager = {
	move: ({ state: { shapes = [] }, config: { distance, backgroundSize }}) =>
		shapes.map((shape) =>
			({
				...shape,
				...checkBorder(
					shape, distance, backgroundSize
				)
					? bounceBack(shape, distance)
					: moveNext(shape, distance),
			})),
};

export default MovementManager;
