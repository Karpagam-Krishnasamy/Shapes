import ShapeManager from '../services/ShapeManager';

const addShape = (context) => ({
	shapes: ShapeManager.getShape(context),
});

const actions = {
	addShape,
};

export default actions;
