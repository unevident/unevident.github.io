import { Vector } from "../types";

export class Brick {

    constructor(
        private brickWidth: number,
        private brickHeight: number,
        private position: Vector,
        private brickEnergy: number,
    ) {
        this.brickWidth = brickWidth;
        this.brickHeight = brickHeight;
        this.position = position;
        this.brickEnergy = brickEnergy;
    }

    //Getters
    get width() : number {
        return this.brickWidth;
    }

    get height() : number {
        return this.brickHeight;
    }

    get pos() : Vector {
        return this.position;
    }

    get energy() : number {
        return this.brickEnergy;
    }

    //Setter
    set energy(energy: number) {
        this.brickEnergy = energy;
    }


}