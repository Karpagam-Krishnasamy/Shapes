import { find } from '@laufire/utils/collection';

const half = 0.5;

const DirectionProps = {
	left: { x: -1, y: 0, direction: 'right', border: 0, axis: 'x' },
	right: { x: 1, y: 0, direction: 'left', border: 100, axis: 'x' },
	top: { x: 0, y: -1, direction: 'bottom', border: 0, axis: 'y' },
	bottom: { x: 0, y: 1, direction: 'top', border: 100, axis: 'y' },
};

const getCollidePosition = (
	shape, distance, backgroundSize
) => {
	const newPosition = moveNext(shape, distance);

	newPosition.x += DirectionProps[shape.direction].x * (shape.size * half);
	newPosition.y += DirectionProps[shape.direction].y * (shape.size * half);

	return find(newPosition, (value) => value < 0 || value > backgroundSize);
};

const getBounceDistance = (
	shape, collidedPosition, backgroundSize, distance
) =>
	shape[DirectionProps[shape.direction].axis]
	- ((DirectionProps[shape.direction].x || DirectionProps[shape.direction].y)
	* (DirectionProps[shape.direction].border
		- (collidedPosition % backgroundSize)
		- (shape.size * half)));

const bounceBack = (
	shape, collidedPosition, backgroundSize, distance
) => ({
	...moveNext({
		...shape,
		direction: DirectionProps[shape.direction].direction,
		life: shape.life--,
	}
	, getBounceDistance(
		shape, collidedPosition, backgroundSize, distance
	)),
});

const moveNext = (shape, distance) => ({
	...shape,
	x: shape.x + (DirectionProps[shape.direction].x * distance),
	y: shape.y + (DirectionProps[shape.direction].y * distance),
});

const MovementManager = {
	move: ({ state: { shapes = [] }, config: { distance, backgroundSize }}) =>
		shapes.map((shape) => {
			const collidedPosition = getCollidePosition(
				shape, distance, backgroundSize
			);

			return {
				...shape,
				...collidedPosition
					? bounceBack(
						shape, collidedPosition, backgroundSize, distance
					)
					: moveNext(shape, distance),
			};
		}).filter((shape) =>
			shape.life),
};

export default MovementManager;
