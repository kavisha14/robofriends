import React from 'react';

const Scroll = (props) => {
	return (
		<div class="ba b--silver bw5"  style={{ overflow: 'scroll', height: '800px' }}>
			{props.children}
		</div>
	)
};

export default Scroll;