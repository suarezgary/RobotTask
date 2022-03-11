import { TestBed } from "@angular/core/testing";

import { BoardService } from "./board.service";

describe("BoardService", () => {
  let service: BoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("shouldTurnOnWall", () => {
    service.robotPosition$$.next({ x: 9, y: 0 });
    service.move();
    expect(service.robotPosition$$.value).toEqual({ x: 9, y: 0 });
    expect(service.robotDirection$$.value).toEqual("down");
  });

  it("should go Forward", () => {
    service.robotPosition$$.next({ x: 8, y: 0 });
    service.move();
    expect(service.robotPosition$$.value).toEqual({ x: 9, y: 0 });
    expect(service.robotDirection$$.value).toEqual("right");
  });

  it("should turn right -> down", () => {
    service.robotPosition$$.next({ x: 8, y: 0 });
    service.rotate();
    expect(service.robotPosition$$.value).toEqual({ x: 8, y: 0 });
    expect(service.robotDirection$$.value).toEqual("down");
  });

  it("should turn right -> left", () => {
    service.robotPosition$$.next({ x: 8, y: 0 });
    service.robotDirection$$.next("down");
    service.rotate();
    expect(service.robotPosition$$.value).toEqual({ x: 8, y: 0 });
    expect(service.robotDirection$$.value).toEqual("left");
  });

  it("should double turn right", () => {
    service.rotate();
    service.rotate();
    expect(service.robotDirection$$.value).toEqual("left");
  });
});
