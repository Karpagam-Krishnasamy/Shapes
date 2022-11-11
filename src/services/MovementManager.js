const moveShape = {
	left: (shape, distance) => ({ ...shape, x: shape.x - distance }),
	right: (shape, distance) => ({ ...shape, x: shape.x + distance }),
	top: (shape, distance) => ({ ...shape, y: shape.y - distance }),
	bottom: (shape, distance) => ({ ...shape, y: shape.y + distance }),
};

const MovementManager = {
	manageMove: ({ state: { shapes = [] }, config: { distance }}) =>
		shapes.map((shape) =>
			moveShape[shape.direction](shape, distance)),

};

export default MovementManager;
