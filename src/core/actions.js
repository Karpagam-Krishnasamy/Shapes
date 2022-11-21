import MovementManager from '../services/MovementManager';
import ShapeManager from '../services/ShapeManager';

const addShape = (context) => ({
	shapes: ShapeManager.addShape(context),
});

const moveShapes = (context) => ({
	shapes: MovementManager.move(context),
});

const reduceLife = (context) => ({
	shapes: MovementManager.reduceLife(context),
});

const removeShapes = (context) => ({
	shapes: MovementManager.remove(context),
});

const actions = {
	addShape,
	moveShapes,
	reduceLife,
	removeShapes,
};

export default actions;
