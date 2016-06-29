import paper from 'paper';

export default class Manager {
  constructor( ) {
    this.tool = new paper.Tool( ); 
    this.isPaused = false;
    this.addEvents( );
    this.attributes = {
      speed: 1
    };
  }
  addEvents() {
    this.tool.on("keydown", e => {
      switch(e.key) {
        case 'control':
          paper.project.activeLayer.selected = !paper.project.activeLayer.selected;
        case 'space':
          this.isPaused ? this.unpause() : this.pause();
      }
    })
  }
  pause( ) {
    paper.view.pause( );
    this.isPaused = true;
  }
  unpause( ) {
    paper.view.play( );
    this.isPaused = false;
  }

}
