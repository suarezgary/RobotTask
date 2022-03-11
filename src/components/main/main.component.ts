import { Component } from "@angular/core";
import { BoardService } from "src/services/board.service";

@Component({
  selector: "main-component",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent {
  title = "Roomba Robot";

  constructor(public boardService: BoardService) {}

  goForward() {
    this.boardService.doMovement("forward");
  }

  goRight() {
    this.boardService.doMovement("right");
  }
}
