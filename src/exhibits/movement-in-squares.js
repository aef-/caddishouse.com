import React, { PropTypes, Component } from 'react';
import MovementInSquaresPlug from '../MeAtBeNdEr/plugs/movement-in-squares';
import MeAtBeNdEr from '../MeAtBeNdEr';
import style from './style.css';

export default class MovementInSquares extends Component {
  static propTypes = {
  }
  componentWillMount() {
    const mB = new MeAtBeNdEr({
      plug: MovementInSquaresPlug,
      canvas: document.getElementById("meatbender")
    });
  }
  render( ) {
    return (
      <div>
        <div className={style.header}>
          <span className={style.title}>
            Movement In Squares
          </span>
          <span className={style.subtitle}>
            ????
          </span>
        </div>
        <div className={style.content}>
          Hola!
        </div>
      </div>
    );
  }
}
