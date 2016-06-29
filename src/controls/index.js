import React, { PropTypes, Component } from 'react';
import style from './style.css'

export default class Controls extends Component {
  static propTypes = {
  }
  componentWillMount() {
  }
  render( ) {
    return (
      <div className={style.contrainer}>
      asdfasdfadsf
        {this.props.children}
      </div>
    );
  }
}
