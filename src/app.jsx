import styles from './index.scss';
import React from 'react';
import MobileHome from './component/mobileHome.jsx';
var Markdown = require('react-remarkable');
import { NavBar, Icon } from 'antd-mobile';

export default class App extends React.Component {

	constructor() {
		super();
		this.state = {
			val: 0,
		};
	}

  render(){
    return (
      <div>
				<MobileHome/>
      </div>
    )
  }
}
