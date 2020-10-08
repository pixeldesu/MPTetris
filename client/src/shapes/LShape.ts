import {AbstractShape} from 'shapes/AbstractShape'
import {Cell} from 'shapes/Cell'

export class LShape extends AbstractShape {
    cells = [
        [new Cell(1, 1)],
        [new Cell(2, 1), new Cell(2, 2), new Cell(2, 3)],
    ]
}