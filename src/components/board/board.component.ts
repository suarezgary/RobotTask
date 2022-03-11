import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import Position from "src/models/position.model";
import { Direction } from "src/models/types";
import { BoardService } from "src/services/board.service";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"],
})
export class BoardComponent {
  grid$: Observable<Array<Array<boolean>>>;
  robotPosition$: Observable<Position>;
  robotDirection$: Observable<Direction>;

  constructor(public boardService: BoardService) {
    this.grid$ = this.boardService.grid$$.asObservable();
    this.robotPosition$ = this.boardService.robotPosition$$.asObservable();
    this.robotDirection$ = this.boardService.robotDirection$$.asObservable();
  }

  getDirectionClass(robotDirection: Direction) {
    return {
      up: robotDirection === "up",
      down: robotDirection === "down",
      right: robotDirection === "right",
      left: robotDirection === "left",
    };
  }
}
