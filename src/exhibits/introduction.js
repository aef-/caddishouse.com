import React, { PropTypes, Component } from 'react';
import style from './style.css'

export default class Introduction extends Component {
  static propTypes = {
  }
  componentWillMount() {
  }
  render( ) {
    return (
      <div>
        <div className={style.header}>
          <span className={style.title}>
            Bridgette Riley
          </span>
          <span className={style.subtitle}>
            an exhibition
          </span>
        </div>
        <div className={style.content}>
        Hola!
        </div>
      </div>
    );
  }
}
