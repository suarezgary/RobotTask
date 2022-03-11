import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import Position from "src/models/position.model";
import { Direction, Movements } from "src/models/types";

const initPosition = { x: 0, y: 0 };
const possibleMoves = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
};

@Injectable({
  providedIn: "root",
})
export class BoardService {
  boardSize = 10;
  grid$$ = new BehaviorSubject<Array<Array<boolean>>>([]);
  robotPosition$$ = new BehaviorSubject<Position>(initPosition);
  robotDirection$$ = new BehaviorSubject<Direction>("right");

  constructor() {
    let array = new Array(this.boardSize).fill(
      new Array(this.boardSize).fill(false)
    );
    this.grid$$.next(array);
  }

  doMovement(movement: Movements) {
    switch (movement) {
      case "forward":
        this.move();
        break;
      case "right":
        this.rotate();
    }
  }

  rotate() {
    switch (this.robotDirection$$.value) {
      case "up":
        this.robotDirection$$.next("right");
        break;
      case "right":
        this.robotDirection$$.next("down");
        break;
      case "down":
        this.robotDirection$$.next("left");
        break;
      case "left":
        this.robotDirection$$.next("up");
        break;
    }
  }

  move() {
    const currentDirection = this.robotDirection$$.value;
    const newX =
      this.robotPosition$$.value.x + possibleMoves[currentDirection].x;
    const newY =
      this.robotPosition$$.value.y + possibleMoves[currentDirection].y;

    if (
      newX > this.boardSize - 1 ||
      newX < 0 ||
      newY > this.boardSize - 1 ||
      newY < 0
    ) {
      this.rotate();
    } else {
      this.robotPosition$$.next({ x: newX, y: newY });
    }
  }
}
