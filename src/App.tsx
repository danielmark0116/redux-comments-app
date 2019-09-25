import React, { Fragment } from 'react';

import Comments from './Containers/CommentsContainer';

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <Fragment>
        <h1>REACT REDUX TS APP</h1>
        <Comments />
      </Fragment>
    );
  }
}
