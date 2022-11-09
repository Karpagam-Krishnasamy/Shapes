import React from 'react';
import Shapes from './Shapes';

const Background = (context) => <div className="background-position">
	<Shapes { ...context }/>
</div>;

export default Background;
