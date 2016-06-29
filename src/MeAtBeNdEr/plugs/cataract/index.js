import paper from 'paper';
import Color from 'color';
import colorTransform from '../../color-transform';

export default class Cataract {
  static createData( ) {
    const height = paper.view.size.height;
    const resolution = 30;
    const padding = 12;
    const A = 21; //21
    const waveHeight = 2*A;

    const n = height/10;

    const data = [ ];
    const steps = n/2;
    const constantBlue = new Color("#199cdb");
    const constantRed = new Color("#e1414f");

    let movingColor = constantBlue.clone();
    for( let i = -A/2; i < n; i += 1) {
      data.push(new Cataract({
        color1: constantBlue.clone(), 
        color2: constantRed.clone(), 
        x: i*padding, 
        y: i*padding,
        A, resolution
      }));
    }

    return data;
  }
  constructor({color1, color2, x, y, A, resolution}) {
    this.A = A;
    this.resolution = resolution;
    this.color1 = color1;
    this.color2 = color2;

    this.group = 
      new paper.Group([
        this.createPath({color: this.color1.rgbString(), x: x, y: y}),
        this.createPath({color: this.color2.rgbString(), x: x+2, y: y+3}),
        this.createPath({color: "#ffffff", x: x+5, y: y+6}),
        this.createPath({color: "#ffffff", x: x+8, y: y+9})
      ]);
  }
  createPath({x,y,color}) {
    const path = new paper.Path({
      strokeColor: color,
      strokeWidth: 6
    });

    const shift = y;
    for (var i = 0; i <= this.resolution; i++) {
      const sin = Math.sin(i + x/this.resolution);
      path.add(new paper.Point(paper.view.size.width/this.resolution* i, this.A * sin + shift)); 
    }
    path.smooth();
    return path;
  }
  update({count, index, attrs}) {
    const group = 20;
    const sinus = Math.sin(count/5 * attrs.speed + index/group);
    this.group.children[1].strokeColor = 
      colorTransform(this.color2, this.color1, sinus).rgbString()
  }
};
