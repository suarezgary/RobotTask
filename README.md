# SpaceShip

Advanced coding challenge
Say, the Canadian Space Agency is building an unmanned spacecraft that’ll go to the moon.

Here’s some more info about the project.

The ship’s starting coordinates are (0, 0), which is on Earth.
The ship’s destination is (0, 250), which is on the moon.
The ship will be controlled over a CLI using a standard keyboard as follows:

The ship starts at (0, 0) at 0 speed, i.e. at complete rest.
The ship only moves when a valid key is pressed.
Pressing W increases the ship’s speed and then moves it forward by speed units.
The ship’s maximum speed is 5.
Pressing S decreases the ship’s speed and then moves it forward by speed units.
The ship’s minimum speed is 0.
After launch, the ship cannot go below speed 1, i.e. it always moves forward until it reaches the moon.
Pressing A and D move the ship left and right by one unit respectively.
The ship also moves forward by speed units.
Problem
Write a CLI program in your preferred language to simulate the above spacecraft. Display output as follows:

Begin with (0, 0) ready for launch.
After every movement, display the updated position.
If the ship goes more than 5 points to the left/right, display wrong trajectory.
If the ship tries to decrease the speed below 1, display minimum speed.
If the ship tries to increase the speed over 5, display maximum speed.
When the ship reaches (0, 250) display on the moon.
If the ship goes beyond 250 on the y-axis, display contact lost.
Sample output
(0, 0) # Begin with original position.
(0, 1) # W increases the speed to 1 and moves forward.
(0, 3) # W increases the speed to 2 and moves forward.
(-1, 5) # A moves the ship left and forward.
(0, 7) # D moves the ship right and forward.
(0, 8) # S decreases the speed to 1 and moves forward.
...
(0, 250) on the moon # Ship reaches the moon.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
