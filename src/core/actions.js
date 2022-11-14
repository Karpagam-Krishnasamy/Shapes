import MovementManager from '../services/MovementManager';
import ShapeManager from '../services/ShapeManager';

const addShape = (context) => ({
	shapes: ShapeManager.addShape(context),
});

const manageMovement = (context) => ({
	shapes: MovementManager.move(context),
});

const actions = {
	addShape,
	manageMovement,
};

export default actions;
