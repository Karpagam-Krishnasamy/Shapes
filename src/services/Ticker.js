const Ticker = {
	start: ({ config: { timeDelay }, actions }) => setInterval(() => {
		actions.addShape();
		actions.manageMovement();
	},
	timeDelay),
};

export default Ticker;
