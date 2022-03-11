import { DummyService } from "./Dummy.service";

// Straight Jasmine testing without Angular's testing support
describe("Space Service", () => {
  let service: DummyService;
  beforeEach(() => {
    service = new DummyService();
  });

  it("Init value should be true", () => {
    expect(service.boolSubject$$.value).toBe(false);
  });

  // it("Array check", () => {
  //   expect(service.arraySubject$$.value).toEqual(18);
  // });

  // it('#getObservableValue should return value', (done: DoneFn) => {
  //   service.getObservableValue().subscribe((value) => {
  //     expect(value).toBe('Observable value');
  //     done();
  //   });
  // });
});
