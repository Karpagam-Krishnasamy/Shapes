import React from 'react';
import Square from './Square';

const Background = (context) => <div className="background-position">
	<Square { ...context }/>
</div>;

export default Background;
