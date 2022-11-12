const OperationSelector = {
	left: { x: -1, y: 0 },
	right: { x: 1, y: 0 },
	top: { x: 0, y: -1 },
	bottom: { x: 0, y: 1 },
};

const MovementManager = {
	manageMove: ({ state: { shapes = [] }, config: { distance }}) =>
		shapes.map((shape) =>
			({
				...shape,
				x: shape.x + (OperationSelector[shape.direction].x * distance),
				y: shape.y + (OperationSelector[shape.direction].y * distance),
			})),
};

export default MovementManager;
