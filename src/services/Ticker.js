const Ticker = {
	start: ({ config: { timeDelay }, actions }) => setInterval(() => {
		actions.addShape();
		actions.moveShapes();
		actions.removeShapes();
	},
	timeDelay),
};

export default Ticker;
