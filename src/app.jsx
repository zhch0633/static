import styles from './index.scss';
import React from 'react';
var Markdown = require('react-remarkable');
import { DatePicker } from 'antd';

export default class App extends React.Component {
  render() {
		var text = '## dasd ' +
			'\n **markdown**';
    return (
      <div>
        <h1>It Works!</h1>
        <p>This React project just works including <span className={styles.redBg}>module</span> local styles.</p>
        <p>Enjoy!</p>
				<Markdown source="**Markdown is awesome!**" />
				<Markdown source={text}>
				</Markdown>
				<DatePicker></DatePicker>
      </div>
    )
  }
}
