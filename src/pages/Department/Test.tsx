import React, {Component} from 'react';
import {connect} from 'dva';
import List from '@/components/List';
import styles from './Test.css';

@connect(({testList}) => ({
  testList
}))
class Test extends Component {
  constructor(props){
    super(props);
  }

  handleDelete = (id) => {
    this.props.dispatch({
      type: 'testList/delete',
      payload: id,
    });
  }

  render() {
    return (
        <div>
          <h2>部门管理</h2>
          <List onDelete={(e) => this.handleDelete(e)} data={this.props.testList}/>
        </div>
    );
  }
}

export default Test;