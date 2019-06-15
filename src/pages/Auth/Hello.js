import React, { Component } from 'react';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

@connect(({ loading }) => ({
  loading: loading.effects['profile/fetchBasic'],
}))
class Hello extends Component {
  render() {
    const { loading } = this.props;
    return (
      <PageHeaderWrapper title="欢迎页" loading={loading} id="app.auth.header">
        <p id="app.auth.text">Hello, world!</p>
      </PageHeaderWrapper>
    );
  }
}

export default Hello;
