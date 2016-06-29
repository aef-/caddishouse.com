import paper from 'paper';

export default class MovementInSquares {
  static createData( ) {
    const data = [ ];
    const windowHeight = paper.view.size.height;
    const windowWidth = paper.view.size.width;
    const width = paper.view.size.width;
    const dimension = 40;
    const squaresPerColumn = windowHeight/dimension;
    const squaresPerRow = windowWidth/dimension + 20;

    for( let row = 0; row < squaresPerRow; ++row) {
      data.push(new MovementInSquares({
        row: row,
        dimension, squaresPerColumn
      }));
    }

    return data;
  }
  constructor({x, startX, dimension, squaresPerColumn, row}) {
    this.group = new paper.Group();
    this.dimension = dimension;
    const rowOffset = (row % 2) * this.dimension;
    for(let col = 0; col < squaresPerColumn; ++col) {
      const colOffset = (col % 2) * this.dimension;
      if( (row - col) % 2 == 0)
        this.group.addChild(this.createRectangle({
          width: this.dimension,
          height: this.dimension,
          y: col*this.dimension, 
          x: row*this.dimension
        }));
    }
  }
  createRectangle({width,height,x,y}) {
    const rect = new paper.Path.Rectangle(
      new paper.Rectangle({
        width,
        height,
        x, y
      }));
    rect.fillColor = "#00000";
    return rect;
  }
  update({count, index, attrs, prev}) {
    const group = 15;
    const sinus = Math.sin(count/30 * (attrs.speed/-2) + index/group);
    const offset = prev ? this.dimension - 
      (prev.group.children[0].bounds.width) : 0;
    const newPos = prev ? prev.group.children[0].bounds.width + prev.group.children[0].bounds.x : 0;
    this.group.children.forEach( (r, i) => {
      const newDim = Math.abs(this.dimension * sinus);

      r.replaceWith(this.createRectangle({
        width: newDim,
        height: this.dimension,
        x: newPos, y: r.position.y - this.dimension/2
      }));
    })
  }
};
