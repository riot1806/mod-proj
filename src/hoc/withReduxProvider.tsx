import { Component, FC, ReactNode } from 'react';

import { Provider } from 'react-redux';

import { store } from '@/redux/store';

const withReduxProvider = (BaseComponent: any) =>
  class WithReduxProviderWrapper extends Component {
    constructor(props: any) {
      super(props);
    }

    render(): ReactNode {
      return (
        <Provider store={store}>
          <BaseComponent {...this.props} />
        </Provider>
      );
    }
  };

export default withReduxProvider;
