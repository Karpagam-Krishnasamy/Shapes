const masterLoop = [
	'addShape',
	'moveShapes',
	'reduceLife',
	'removeShapes',
];

const runMasterLoop = (actions) =>
	masterLoop.map((data) => actions[data]());

const master = {
	runMasterLoop,
	masterLoop,
};

export default master;
