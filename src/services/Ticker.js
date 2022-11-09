const Ticker = {
	start: ({ config: { timeDelay }, actions }) => setInterval(() =>
		actions.addSquare(), timeDelay),
};

export default Ticker;
