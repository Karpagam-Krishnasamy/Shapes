/* eslint-disable max-len */
import { find } from '@laufire/utils/collection';

const half = 0.5;

const DirectionProps = {
	left: { x: -1, y: 0, direction: 'right', border: 0 },
	right: { x: 1, y: 0, direction: 'left', border: 100 },
	top: { x: 0, y: -1, direction: 'bottom', border: 0 },
	bottom: { x: 0, y: 1, direction: 'top', border: 100 },
};

const getCollidePosition = (
	shape, distance, backgroundSize
) => {
	const newPosition = moveNext(shape, distance);

	newPosition.x += DirectionProps[shape.direction].x * (shape.size * half);
	newPosition.y += DirectionProps[shape.direction].y * (shape.size * half);

	return find(newPosition, (value) => value < 0 || value > backgroundSize);
};

const bounceBack = (
	shape, collidedPosition, backgroundSize
) => ({
	...moveNext({
		...shape,
		direction: DirectionProps[shape.direction].direction,
		life: shape.life--,
		...resetBorder(shape),
	}
	, Math.abs(collidedPosition % backgroundSize)),
});

const moveNext = (shape, distance) => ({
	...shape,
	x: shape.x + (DirectionProps[shape.direction].x * distance),
	y: shape.y + (DirectionProps[shape.direction].y * distance),
});

const resetBorder = ({ x, y, direction, size }) => ({
	x: DirectionProps[direction].x
		? DirectionProps[direction].border - (DirectionProps[direction].x * (size * half))
		: x,
	y: DirectionProps[direction].y
		? DirectionProps[direction].border - (DirectionProps[direction].y * (size * half))
		: y,
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
						shape, distance, collidedPosition, backgroundSize
					)
					: moveNext(shape, distance),
			};
		}).filter((shape) =>
			shape.life),
};

export default MovementManager;
