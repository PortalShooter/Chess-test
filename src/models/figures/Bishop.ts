import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from '../../assets/chessmen/black/elephant.png'
import whiteLogo from '../../assets/chessmen/white/elephant.png'

export class Bishop extends Figure {

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.BISHOP;
  }

  canMove(target: Cell) : boolean {
    if(!super.canMove(target)) return false;
    return this.cell.isEmptyDiagonal(target);

  }
}