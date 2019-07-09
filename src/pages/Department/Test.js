import React, {Component} from 'react';
import {connect} from 'dva';
import List from '@/components/List';
import styles from './Test.css';

@connect(({testList}) => ({
  testList
}))
class Test extends Component {
  // constructor(props){
  //   super(props);
  // }

  handleDelete = (id) => {
    this.props.dispatch({
      type: 'testList/delete',
      payload: id,
    });
  }

  render() {
    const {testList} = this.props;
    return (
      <div className={styles.main}>
        <h2>部门管理</h2>
        <List onDelete={(e) => this.handleDelete(e)} data={testList} />
      </div>
    );
  }
}

export default Test;