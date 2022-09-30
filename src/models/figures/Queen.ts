import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../../assets/chessmen/black/queen.png";
import whiteLogo from "../../assets/chessmen/white/queen.png";

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.QUEEN;
  }

  canMove(target: Cell) : boolean {
    if(!super.canMove(target)) return false;
    if(this.cell.isEmptyVertical(target)) return true;
    if(this.cell.isEmptyHorizontal(target)) return true;
    return this.cell.isEmptyDiagonal(target);

  }
}