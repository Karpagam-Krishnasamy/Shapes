const Ticker = {
	start: ({ config: { timeDelay }, actions }) => setInterval(() => {
		actions.addShape();
		actions.moveShapes();
		actions.reduceLife();
		actions.removeShapes();
	},
	timeDelay),
};

export default Ticker;
