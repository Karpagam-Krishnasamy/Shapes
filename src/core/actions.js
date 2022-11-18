import MovementManager from '../services/MovementManager';
import ShapeManager from '../services/ShapeManager';

const addShape = (context) => ({
	shapes: ShapeManager.addShape(context),
});

const moveShapes = (context) => ({
	shapes: MovementManager.move(context),
});

const removeShapes = (context) => ({
	shapes: MovementManager.remove(context),
});

const actions = {
	addShape,
	moveShapes,
	removeShapes,
};

export default actions;
