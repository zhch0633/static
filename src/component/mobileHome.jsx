var Markdown = require('react-remarkable');
import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { Popup, List, Button } from 'antd-mobile';

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
	// Note: the popup content will not scroll.
	wrapProps = {
		// onTouchStart: e => e.preventDefault(),
	};
}

export default class MobileHome extends React.Component {

	constructor() {
		super();
		this.addRecordClick = this.addRecordClick.bind(this);
		this.onClick=this.onClick.bind(this);
		this.onClose=this.onClose.bind(this);
	}

	render() {
		return (
			<div>
				<NavBar leftContent="返回" mode="light" onLeftClick={this.addRecordClick()}
								rightContent={<Icon key="1" type="ellipsis" />}
				>又重了</NavBar>
				<div style={{ padding: '0.15rem' }}>
					<Button onClick={this.onClick}>显示</Button>
				</div>
			</div>
		)
	}


	addRecordClick(){
	}


	onClick() {
		Popup.show(<div>
			<List renderHeader={() => (
        <div style={{ position: 'relative' }}>
          委托买入
          <span
            style={{
              position: 'absolute', right: 3, top: -5,
            }}
            onClick={() => this.onClose('cancel')}
          >
            <Icon type="cross" />
          </span>
        </div>)}
						className="popup-list"
			>
				{['股票名称', '股票代码', '买入价格', '买入数量', '更多', '更多'].map((i, index) => (
					<List.Item key={index}>{i}</List.Item>
				))}
			</List>
			<ul style={{ padding: '0.18rem 0.3rem' }}>
				<li>投资说明投资说明...</li>
				<li style={{ marginTop: '0.18rem' }}>
					<Button type="primary" onClick={() => this.onClose('cancel')}>买入</Button>
				</li>
			</ul>
		</div>, { animationType: 'slide-up', wrapProps, maskClosable: false })
	}

	onClose(sel) {
		this.setState({ sel });
		Popup.hide();
	}
}
