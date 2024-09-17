import { Grid } from "./grid.js";
import { Sprite } from "./sprite.js";
import { Vector2 } from "./vector_2.js";

export class Level1
{
    constructor(skyImg, groundImg)
    {
        this.grid = new Grid(16);
        this.obstacles = [
            {col: 3, numCols: 13, row: 7, numRows: 1},
            {col: 7, numCols:  4, row: 5, numRows: 1},
            {col: 4, numCols:  2, row: 4, numRows: 2},
        ];
        this.skySprite = new Sprite
        ({
            sourceImage: skyImg,
            frameSize: new Vector2(320, 180),
            position: this.grid.cellToPos(0, 0),
        });
        this.groundSprite = new Sprite
        ({
            sourceImage: groundImg,
            frameSize: new Vector2(320, 180),
            position: this.grid.cellToPos(0, 0),
        });
    }

    draw(drawingContext)
    {
        this.skySprite.draw(drawingContext);
        this.groundSprite.draw(drawingContext);
    }

    isObstacle(position)
    {
        let [col, row] = this.grid.posToCell(position);
        for (const obst of this.obstacles)
            if (row >= obst.row && row < obst.row + obst.numRows &&
                col >= obst.col && col < obst.col + obst.numCols)
                return true;

        return false;
    }
}