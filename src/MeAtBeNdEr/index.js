import paper from 'paper';
import Manager from './manager';

export default class MeAtBeNdEr {
  static defaults = { speed : 10 };
  constructor({canvas, plug, options = MeAtBeNdEr.defaults}) { 
    if(!plug)
      throw new Error("MeAtBeNdEr requires a plug to be passed");
    if(!canvas)
      throw new Error("MeAtBeNdEr requires a canvas element to be passed");

    this.manager = new Manager( ); 
    this.options = options;

    paper.setup(canvas);
    paper.view.draw();
    paper.view.onFrame = this.onFrame.bind(this);
    //this.manager.pause( );

    this.data = plug.createData( );
    this.total = this.data.length;
  }
  onFrame(e) {
    let prev = null;
    this.data.forEach( (plug, index) => {
      plug.update({
        attrs: this.manager.attributes, 
        total: this.total,
        ...e,
        prev, index
      });
      prev = plug;
    });
  }
}
