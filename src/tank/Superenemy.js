import { canv } from '../index.js';
import randomInteger from './randominteger.js';
export default class SuperEnemy {
  constructor() {
    this.superEnemy = document.createElement('div');
    this.superEnemy.classList.add('enemysuper');
    this.superEnemy.style.top = randomInteger(1, 51) * 10 + 'px';
    this.superEnemy.style.left = randomInteger(1, 61) * 10 + 'px';
    this.arrow = '';
    canv.append(this.superEnemy);
    this.idss = setInterval(this.move.bind(this), 500);

    this.randomMove = [
      function hhh() {
        // console.log(1, this);
        if (this.superEnemy.offsetTop <= 510) {
          this.superEnemy.style.top = this.superEnemy.offsetTop + 10 + 'px';
          this.superEnemy.style.transform = 'rotate(180deg)';
          // console.log(2, this);
        }

        return 'down';
      },
      () => {
        if (this.superEnemy.offsetTop >= 0) {
          this.superEnemy.style.top = this.superEnemy.offsetTop - 10 + 'px';
          this.superEnemy.style.transform = 'rotate(0deg)';
        }
        return 'up';
      },
      () => {
        this.superEnemy.style.left = this.superEnemy.offsetLeft + 10 + 'px';
        this.superEnemy.style.transform = 'rotate(90deg)';
        return 'right';
      },
      () => {
        this.superEnemy.style.left = this.superEnemy.offsetLeft - 10 + 'px';
        this.superEnemy.style.transform = 'rotate(270deg)';
        return 'left';
      },
    ];
  }
  move() {
    // console.log(ar);
    if (this.arrow === 'down' && this.superEnemy.offsetTop <= 520) {
      this.randomMove[0].call(this);
      if (Math.floor(Math.random() * 5) === 0) {
        console.log(0);
        this.superEnemy.style.top = this.superEnemy.offsetTop - 10 + 'px';
        this.superEnemy.style.transform = 'rotate(0deg)';
        this.arrow = 'up';
      }

      return;
    }

    if (
      this.superEnemy.offsetTop <= 520 &&
      this.superEnemy.offsetTop >= 0 &&
      this.superEnemy.offsetLeft <= 620 &&
      this.superEnemy.offsetLeft >= 0
    ) {
      // console.log(this.randomMove[0].call(this));
      this.arrow = this.randomMove[Math.floor(Math.random() * 2)].call(this);
    }
    // this.randomMove[0].bind(this);
  }
}
