import React, { PropTypes, Component } from 'react';
import style from './style.css'
import paper from 'paper';

export default class Graph extends Component {
  static propTypes = {
  }
  componentDidMount() {
    /*const canvas = document.getElementById('graph-control');
    paper.setup(canvas);
    paper.view.draw();
    const path = new paper.Path({
      strokeColor: "#000000",
      strokeWidth: 6
    });
    for (var i = 0; i <= 10; ++i) {
      const sin = Math.sin(i + x/this.resolution);
      path.add(new paper.Point(paper.view.size.width/this.resolution* i, this.A * sin + shift)); 
    }
    path.smooth();
   */

  }
  render( ) {
    return (
      <div className={style.contrainer}>
        <canvas id="graph-control"></canvas>
      </div>
    );
  }
}
