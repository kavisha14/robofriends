import React from 'react';

const Scroll = (props) => {
	return (
		<div class="ba b--washed-blue bw3" style={{ overflow: 'auto',height: '800px' }}>
			{props.children}
		</div>
	)
};

export default Scroll;