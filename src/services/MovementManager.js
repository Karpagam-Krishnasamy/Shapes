const MovementManager = {
	manageMove: ({ state: { shapes = [] }, config: { distance }}) =>
		shapes.map((shape) => ({
			...shape,
			x: shape.x + distance,
		})),

};

export default MovementManager;
