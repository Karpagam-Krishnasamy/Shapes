import ShapeManager from '../services/ShapeManager';

const addSquare = (context) => ({
	shapes: ShapeManager.addSquare(context),
});

const actions = {
	addSquare,
};

export default actions;
