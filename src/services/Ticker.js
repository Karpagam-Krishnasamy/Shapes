const Ticker = {
	start: ({ config: { timeDelay }, actions }) => setInterval(() => {
		actions.addShape();
		actions.manageMovement();
		actions.removeShapes();
	},
	timeDelay),
};

export default Ticker;
