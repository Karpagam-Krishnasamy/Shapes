import { rndBetween } from '@laufire/utils/lib';

const size = {
	min: 5,
	max: 11,
};

const config = {
	size: rndBetween(size.min, size.max),
	backgroundSize: 100,
};

export default config;
