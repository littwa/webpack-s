//######################### CAR #################################
// import Car from './engine/Car.js';
// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000

//######################### Tank #################################

// Есть танк - это класс - наследуеться от Car
//Список функций: rotateLeft() rotateRight() move(col)  getCoord()
//Все действия танка записываются в историю
//повороты всегда 90 градусов

// const tank = new Tank();//Танк появляется по координам x:0 y:0, и смотрит вверх;
// tank.rotateRight();
// tank.move(10);
// tank.getCoord(); // x:10 y:0
// tank.rotateRight();
// tank.move(10);
// tank.getCoord(); // x:10 y:10
// tank.rotateRight();
// tank.rotateRight();
// tank.move(5);
// tank.getCoord(); // x:10 y:5
// tank.rotateLeft();
// tank.move(5);
// tank.getCoord(); // x:5 y:5

//====================================================================================================

import Tank from "./server/Tank.js";

const tank = new Tank(); //Танк появляется по координам x:0 y:0, и смотрит вверх;

const commands = [];

commands.unshift(tank.rotateRight.bind(tank));
commands.unshift(tank.move.bind(tank, 10)); //едет вправо x+10

commands.unshift(tank.rotateRight.bind(tank));
commands.unshift(tank.move.bind(tank, 10)); //еще вправо, значит уже назад y-10

commands.unshift(tank.rotateRight.bind(tank));
commands.unshift(tank.rotateRight.bind(tank));
commands.unshift(tank.move.bind(tank, 5)); //дважды вправо, значит вперед y+5

commands.unshift(tank.rotateLeft.bind(tank));
commands.unshift(tank.move.bind(tank, 5)); //налево, x-5
commands.unshift(tank.rotateRight.bind(tank)); //налево, x-5

//console.log(commands);

setTimeout(proccessor, 1000);

function proccessor() {
 if (commands.length > 0) {
  const currentCommand = commands.pop();
  run(currentCommand);
  setTimeout(proccessor, 1800);
 } else {
  console.log("END OF COMMANSD");
 }
}

function run(command) {
 command();
}

//import Car from './engine/Car.js';
// import FireCar from './engine/FireCar.js';

// const mercedesFire = new FireCar({ maxSpeed: 110, price: 10000 });
// FireCar.getSpecs(mercedesFire);
// mercedesFire.turnOn();
// mercedesFire.accelerate(25);
// mercedesFire.drive(2);
// mercedesFire.turnOff();
// mercedesFire.outFire(250);

// const mercedesFire = new FireCar({ maxSpeed: 110, price: 10000 });

// mercedesFire.turnOn();
// mercedesFire.accelerate(25);
// mercedesFire.drive(2);
// FireCar.getSpecs(mercedesFire);
// mercedesFire.turnOff();
// mercedesFire.outFire(250);

// import EventEmitter from './engine/EventEmitter.js';

// EventEmitter.subscribe('AAA', (some)=>{console.log('EMITTED!!!!!!!!!');})
