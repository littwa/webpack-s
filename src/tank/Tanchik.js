import { Mehanika, Enemy } from './Mehanika.js';
import { enem, canv, fntd, superEnem, fntds, score } from '../index.js';
let _ = require('lodash');

export class Tanchik extends Mehanika {
  constructor(fuelConsumption, distance, speed) {
    super(fuelConsumption, distance, speed);
    this.name = 'Tank Tiger';
    this.experience = 0;
    // this.gun =
    // this.mehan.classList.remove('.mehan::after');
    window.addEventListener(
      'keydown',
      _.throttle(this.keyPressFire.bind(this), 500),
    );
  }

  keyPressFire(e) {
    if (e.keyCode === 17) {
      console.log(this.mehan);
      this.mehan.classList.toggle('meh');
      setTimeout(callb.bind(this), 500);
      function callb() {
        this.mehan.classList.toggle('meh');
      }
      // console.log(Number.parseInt(this.mehan.style.top));
      // console.log(Number.parseInt(this.mehan.style.top));
      // this.mehan.style.top === this.divEnemy.style.top

      // console.log();
      let tankTopY = Number.parseInt(this.mehan.style.top);
      let enemyTopY = Number.parseInt(enem.divEnemy.offsetTop);
      let superenemyTopY = Number.parseInt(superEnem.superEnemy.offsetTop);

      let tankLeftX = Number.parseInt(this.mehan.style.left);
      let enemyLeftX = Number.parseInt(enem.divEnemy.offsetLeft);
      let superenemyLeftX = Number.parseInt(superEnem.superEnemy.offsetLeft);

      console.log(tankLeftX, enemyLeftX, this.direction);

      if (
        (tankLeftX === enemyLeftX &&
          enemyTopY > tankTopY &&
          this.direction === 'down') ||
        (tankLeftX === enemyLeftX &&
          enemyTopY < tankTopY &&
          this.direction === 'up') ||
        (tankTopY === enemyTopY &&
          enemyLeftX > tankLeftX &&
          this.direction === 'right') ||
        (tankTopY === enemyTopY &&
          enemyLeftX < tankLeftX &&
          this.direction === 'left')
      ) {
        console.log('Exterminate!!!');
        console.log(enem.divEnemy.style);
        enem.divEnemy.style.background = '#f00';
        enem.divEnemy.style.border = '4px dotted yellow';
        enem.divEnemy.style.borderRadius = '15px';
        enem.divEnemy.style.boxShadow = '0 0 10px 10px yellow';
        // enem.divEnemy.style.background = "url('images/explosion.png')";
        this.experience += 1;
        // console.dir(getComputedStyle(enem.divEnemy));
        score.textContent = `exterminated: ${this.experience} | diesel: ${this._fuel}`;
        setTimeout(cbv, 300);

        function cbv() {
          enem.divEnemy.remove();

          clearTimeout(enem.ids);
          setTimeout(fntd, 2000);
        }
      } else if (
        (tankLeftX === superenemyLeftX &&
          superenemyTopY > tankTopY &&
          this.direction === 'down') ||
        (tankLeftX === superenemyLeftX &&
          superenemyTopY < tankTopY &&
          this.direction === 'up') ||
        (tankTopY === superenemyTopY &&
          superenemyLeftX > tankLeftX &&
          this.direction === 'right') ||
        (tankTopY === superenemyTopY &&
          superenemyLeftX < tankLeftX &&
          this.direction === 'left')
      ) {
        console.log('Exterminate!!! superenemy');
        console.log(superEnem.superEnemy.style);
        superEnem.superEnemy.style.background = '#f00';
        superEnem.superEnemy.style.border = '4px dotted yellow';
        superEnem.superEnemy.style.borderRadius = '15px';
        superEnem.superEnemy.style.boxShadow = '0 0 10px 10px yellow';
        // enem.divEnemy.style.background = "url('images/explosion.png')";
        this.experience += 1;
        score.textContent = `exterminated: ${this.experience} | diesel: ${this._fuel}`;
        // console.dir(getComputedStyle(enem.divEnemy));

        setTimeout(cbvs, 300);
        function cbvs() {
          superEnem.superEnemy.remove();
          clearTimeout(superEnem.idss);
          setTimeout(fntds, 2000);
        }
      }
    }
  }
}
