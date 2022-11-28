import MasterLoop from './masterloop';

const Ticker = {
	start: ({ config: { timeDelay }, actions }) =>
		setInterval(() => MasterLoop.runMasterLoop(actions),
			timeDelay),
};

export default Ticker;
