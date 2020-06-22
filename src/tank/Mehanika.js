import { enem, canv, score } from '../index.js';
import randomInteger from './randominteger.js';

export class Mehanika {
  constructor(fuelConsumption = 0.1, distance = 0, speed = 10) {
    this.fuelConsumption = fuelConsumption;
    this.distance = distance;
    this.speed = speed;
    this._fuel = 100;
    this.mehan = document.querySelector('.mehan');
    window.addEventListener('keydown', this.keyPressDown.bind(this));
    this.mehan.style.transform = 'rotate(0deg)';
    this.mehan.style.top = '0px';
    this.mehan.style.left = '0px';
    this.direction = 'up';
    // if (this._fuel >= 0) {
    //   console.log(111);
    // }
  }

  get fuel() {
    return this._fuel;
  }

  distanceIncr(v) {
    this.distance += v;
    score.textContent = `exterminated: ${this.experience} | diesel: ${this._fuel}`;
  }
  fuelConsumptionToMove() {
    this._fuel = Number((this._fuel - this.fuelConsumption).toFixed(2));
  }

  keyPressDown(ev) {
    if (this._fuel <= this.fuelConsumption) {
      score.textContent = `exterminated: ${this.experience} | diesel: NO DIESEL!!! `;
      return;
    }

    if (ev.keyCode === 40 && this.mehan.offsetTop <= 510) {
      this.mehan.style.top = this.mehan.offsetTop + this.speed + 'px';
      this.mehan.style.transform = 'rotate(180deg)';
      this.direction = 'down';
      this.fuelConsumptionToMove();
      this.distanceIncr(this.speed);
      console.log('down');
      console.log(this._fuel, this.distance, this.mehan.style.transform);
      console.log('top:', this.mehan.style.top, 'left:', this.mehan.style.left);
      // this.rotateLeft();
    }
    if (ev.keyCode === 38 && this.mehan.offsetTop >= 10) {
      this.mehan.style.top = this.mehan.offsetTop - this.speed + 'px';
      this.mehan.style.transform = 'rotate(0deg)';
      this.direction = 'up';
      this.fuelConsumptionToMove();
      this.distanceIncr(this.speed);
      console.log('up');
      console.log(this._fuel, this.distance, this.mehan.style.transform);
      console.log('top:', this.mehan.style.top, 'left:', this.mehan.style.left);
    }
    if (ev.keyCode === 39 && this.mehan.offsetLeft <= 610) {
      this.mehan.style.left = this.mehan.offsetLeft + this.speed + 'px';
      this.mehan.style.transform = 'rotate(90deg)';
      this.direction = 'right';
      this.fuelConsumptionToMove();
      this.distanceIncr(this.speed);
      console.log('right');
      console.log(this._fuel, this.distance, this.mehan.style.transform);
      console.log('top:', this.mehan.style.top, 'left:', this.mehan.style.left);
    }
    if (ev.keyCode === 37 && this.mehan.offsetLeft >= 10) {
      this.mehan.style.left = this.mehan.offsetLeft - this.speed + 'px';
      this.mehan.style.transform = 'rotate(270deg)';
      this.direction = 'left';
      this.fuelConsumptionToMove();
      this.distanceIncr(this.speed);
      console.log('left');
      console.log(this._fuel, this.distance, this.mehan.style.transform);
      console.log('top:', this.mehan.style.top, 'left:', this.mehan.style.left);
    }
    //----------------------------------------------------------------
    if (ev.keyCode === 90) {
      this.rotateLeft();
    }
    if (ev.keyCode === 88) {
      this.rotateRight();
    }
    if (ev.keyCode === 32) {
      this.move();
    }
  }

  rotateLeft() {
    let r = /\d+/; //Выражение \d+ означает "одно или несколько цифр".
    let s = this.mehan.style.transform;

    let p = s.match(r); // Регулярные выражения по умолчанию жадные, означающие, что они будут хватать как можно больше.
    let deg = Number(p[0]);
    // console.log(deg);

    this.mehan.style.transform = `rotate(${-deg - 90}deg)`;
  }
  rotateRight() {
    let r = /\d+/; //Выражение \d+ означает "одно или несколько цифр".
    let s = this.mehan.style.transform;
    let p = s.match(/\d+/); // Регулярные выражения по умолчанию жадные, означающие, что они будут хватать как можно больше.
    let deg = Number(p[0]);
    this.mehan.style.transform = `rotate(${deg + 90}deg)`;
  }
  move() {
    let currentDegr = Number(this.mehan.style.transform.match(/\d+/)[0]);
    // console.log(currentDegr % 360 === 180);
    if (currentDegr % 360 === 180 && this.mehan.offsetTop <= 510) {
      this.mehan.style.top = this.mehan.offsetTop + this.speed + 'px';

      this.fuelConsumptionToMove();
      this.distanceIncr(this.speed);
      console.log(this._fuel, this.distance);
      console.log('down');
      console.log(this.mehan.style.transform);
    }
  }
}

export class Enemy {
  constructor() {
    this.divEnemy = document.createElement('div');
    this.divEnemy.classList.add('enemy');
    this.divEnemy.style.top = randomInteger(1, 51) * 10 + 'px';
    this.divEnemy.style.left = randomInteger(1, 61) * 10 + 'px';
    // this.divEnemy.style.background = "url('images/enemy.png')"; //???????????????????????? не работает
    // this.divEnemy.style.background = '#f00';

    // this.divEnemy.style.top = '500px';
    // this.divEnemy.style.left = '620px';

    canv.append(this.divEnemy);
    this.ids = setInterval(this.test.bind(this), 1500);
    // this.test();
    this.randomMove = [
      () => {
        this.divEnemy.style.top = this.divEnemy.offsetTop + 10 + 'px';
        return 'down';
      },
      () => {
        this.divEnemy.style.top = this.divEnemy.offsetTop - 10 + 'px';
        return 'up';
      },
      () => {
        this.divEnemy.style.left = this.divEnemy.offsetLeft + 10 + 'px';
        return 'right';
      },
      () => {
        this.divEnemy.style.left = this.divEnemy.offsetLeft - 10 + 'px';
        return 'left';
      },
    ];
  }

  test() {
    if (
      this.divEnemy.offsetTop <= 510 &&
      this.divEnemy.offsetTop >= 10 &&
      this.divEnemy.offsetLeft <= 610 &&
      this.divEnemy.offsetLeft >= 10
    ) {
      let arrow = this.randomMove[Math.floor(Math.random() * 4)]();
      this.direction = arrow;

      // console.log(this.divEnemy.style.background);
      // console.dir(getComputedStyle(this.divEnemy));

      switch (arrow) {
        case 'down':
          this.divEnemy.style.transform = 'rotate(0deg)';
          break;
        case 'up':
          this.divEnemy.style.transform = 'rotate(180deg)';
          break;
        case 'left':
          this.divEnemy.style.transform = 'rotate(90deg)';
          break;
        case 'right':
          this.divEnemy.style.transform = 'rotate(270deg)';
          break;
      }
    } else {
      this.divEnemy.style.top = randomInteger(1, 51) * 10 + 'px';
      this.divEnemy.style.left = randomInteger(1, 61) * 10 + 'px';
    }
  }
}
