import gsap from "gsap";

//Класс танк - переименовать в класс движок
//Создать класс танк который наследуется от класса движок
//танк имеет новые свойства
// Опыт\начисляеться за разные активности изначально 0
// расход топлива на 1 км.
// количество патронов.
// количество топлива изначально 100 литров //при езде бенз трантиться если бенза нет, танк неможет двигаться. пишет нет бенза.//проехав каждые 10 км. танк получает +1 опыт.
// научить танк стрелять.  патроны-- если <1 то писать неосталось патронов. // за выстрел +1 xp // за попадание +5хp

// Создать статический метод для танка createEnemy(x,y) - метод ставит условного противника по заданным координатом.
// Создать статический метод getEnemyInfo - выводит всех созданых противников в виде
// [Enimy {id:1, x:10, y:5, isAlive:true}, Enimy {id:2, x:15, y:5, isAlive:false}]

//Взаимодействие противников и танка. 
// Если танк наезжает на противника (координаты танка === координатам противника) Противник умирает, выводидся сообщение наехали на противнка и раздовили его isAlive противника становить false
// Если противник находиться на лини огня танка то противник умирает.
// На линни огня - это например:
// Tank.x === Enamy.x  && Enamy.x > Tank.x && Tank.side = 'right'
// Tank.x === Enamy.x  && Enamy.x < Tank.x && Tank.side = 'left'

// import EventEmitter from '../engine/EventEmitter.js';

export default class Tank {
  constructor(x, y) {
    this.htmlTank = document.querySelector('#tank');
    document.addEventListener('keydown', this.onKeyDown.bind(this));
    this._x = 0;
    this._y = 0;
    this._side = 0; //0 - up, 1 - right, -1 - left, -2 - down (создал 4 стороны)
    this.drawTank();
    
  }
  onKeyDown(e){
    console.log(e, e.key);
    // EventEmitter.emit('AAA', e);



   if (e && e.code === 'Space'){
    this.move(1);
   }else
   if (e && e.code === 'ArrowUp'){
    this.side = 0;
   }else
   if (e && e.code === 'ArrowDown'){
    this.side = -2;
   }else
   if (e && e.code === 'ArrowLeft'){
    this.side = -1;
   }else
   if (e && e.code === 'ArrowRight'){
    this.side = 1;
   }

  }
get side(){
  return this._side;
}
get x(){
  return this._x;
}
get y(){
  return this._y;
}
  set side(val){
    this._side = val;    
    this.drawTank();
  }
  set x(val){
    this._x = val;
    this.drawTank();
  }
  set y(val){
    this._y = val;
    this.drawTank();
  }
  drawTank(){
   // this.htmlTank.style.left = this.x + 'px';
   // this.htmlTank.style.top = this.y + 'px';
   let rot = 0;
  
   switch (this.side) {
      case 0: //едем вперед
      rot=0;
        break;
      case 1: //едем вправо
      rot=90;
        break;
      case -1: //едем влево
      rot=270;
        break;
      case -2: //едем назад
      rot=180;
        break;
    }

    gsap.to(this.htmlTank, {duration:1.5, x:this.x, y:this.y, rotate:rot});
  }
  rotateLeft() {
    if (this.side !== -2) {
      this.side--;
    } else {
      this.side = 1;
    }
  }

  rotateRight() {
    if (this.side !== 1) {
      this.side++;
    } else {
      this.side = -2;
    }
  }

  move(distance) {
   // console.log(this.side);
   distance = distance * 10;
    switch (this.side) {
      case 0: //едем вперед
        this.y -= distance;
        console.log("going up");

        break;
      case 1: //едем вправо
        this.x += distance;
        console.log("going right");

        break;
      case -1: //едем влево
        this.x -= distance;
        console.log("going left");

        break;
      case -2: //едем назад
        this.y += distance;
        console.log("going down");

        break;
    }
  }
  //исправил проверь
  getCoord() {
    return console.log(`x: ${this.x}, y: ${this.y}`);
  }
}