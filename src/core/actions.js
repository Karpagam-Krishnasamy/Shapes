import MovementManager from '../services/MovementManager';
import ShapeManager from '../services/ShapeManager';

const addShape = (context) => ({
	shapes: ShapeManager.getShape(context),
});

const manageMovement = (context) => ({
	shapes: MovementManager.manageMove(context),
});

const actions = {
	addShape,
	manageMovement,
};

export default actions;
