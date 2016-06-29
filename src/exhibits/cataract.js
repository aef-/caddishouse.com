import React, { PropTypes, Component } from 'react';
import CataractPlug from '../MeAtBeNdEr/plugs/cataract';
import MeAtBeNdEr from '../MeAtBeNdEr';
import Controls from '../controls';
import Graph from '../controls/graph';
import style from './style.css';

export default class Cataract extends Component {
  static propTypes = {
  }
  componentWillMount() {
    const mB = new MeAtBeNdEr({
      plug: CataractPlug,
      canvas: document.getElementById("meatbender")
    });
  }
  render( ) {
    return (
      <div>
        <div className={style.header}>
          <span className={style.title}>
            Cataract 3
          </span>
          <span className={style.subtitle}>
            1967
          </span>
        </div>
        <Controls>
          <Graph></Graph>
        </Controls>
        <div className={style.content}>
          Hola!
        </div>
      </div>
    );
  }
}
