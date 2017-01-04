import styles from './index.scss';
import React from 'react';

export default class App extends React.Component {
	constructor(){
		super();
	}

	render() {
		var text = '## dasd ' +
			'\n **markdown**';

		return (
			<div>
				<Markdown source="**Markdown is awesome!**" />
				<Markdown source={text}>
				</Markdown>
			</div>
		)
	}
}
