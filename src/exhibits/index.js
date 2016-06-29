import React, { PropTypes, Component } from 'react';
import style from './style.css'

export default class Exhibits extends Component {
  static propTypes = {
  }
  componentWillMount() {
  }
  render( ) {
    return (
      <div className={style.container}>
        {this.props.children}
        <div className={style.footer}>
          Built by homfrie
        </div>
      </div>
    );
  }
}
