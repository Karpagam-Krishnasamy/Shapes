import ShapeManager from '../services/ShapeManager';

const addShape = (context) => ({
	shapes: ShapeManager.addShape(context),
});

const actions = {
	addShape,
};

export default actions;
