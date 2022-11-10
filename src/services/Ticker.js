const Ticker = {
	start: ({ config: { timeDelay }, actions }) => setInterval(() =>
		actions.addShape(), timeDelay),
};

export default Ticker;
