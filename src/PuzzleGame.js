let sss = 123;
export default class PuzzleGame {
  constructor(cols, rows, selector, imageUrl) {
    this.gameContainer = document.querySelector(selector);
    this.gameContainer.style.display = 'block';
    this.gameContainer.innerHTML = '';
    this.gameImageUrl = imageUrl;
    this.cols = cols;
    this.rows = rows;
    this.itemsArraySuccess = [];
    this.itemsArray = [];
    this.setBg();
    this.createGamePole();
    this.positionShuffle();
    this.selectedItem = null;
    this.onCliclFunction = this.onItemClick.bind(this);
    this.gameContainer.addEventListener('click', this.onCliclFunction);
    gsap.to(this.gameContainer, { duration: 3, y: 1110 });
  }

  onItemClick(e) {
    // console.log(e.target);
    const item = e.target;
    if (this.selectedItem) {
      if (this.selectedItem != item) {
        this.swapItems(this.selectedItem, item);
        this.selectedItem.classList.remove('selectedItem');
        this.selectedItem = null;
      } else {
        this.selectedItem = null;
        item.classList.remove('selectedItem');
      }
    } else {
      this.selectedItem = item;
      item.classList.add('selectedItem');
      //console.log(item);
    }
  }
  isGameEnd() {
    return this.itemsArray.every(
      el =>
        el.dataset.c_col === el.dataset.i_col &&
        el.dataset.c_row === el.dataset.i_row,
    );
  }
  swapItems(item1, item2) {
    const tmp1 = item1.dataset.c_col;
    const tmp2 = item1.dataset.c_row;
    item1.dataset.c_col = item2.dataset.c_col;
    item1.dataset.c_row = item2.dataset.c_row;
    item2.dataset.c_col = tmp1;
    item2.dataset.c_row = tmp2;
    this.positionItems();
    if (this.isGameEnd()) {
      console.log('WIN');
      this.gameContainer.removeEventListener('click', this.onCliclFunction);
      gsap.to(this.gameContainer, { delay: 2, duration: 3, y: -1000 });
    }
  }
  setBg() {
    const img = document.createElement('img');
    img.style.opacity = 0.2;
    img.src = this.gameImageUrl;
    this.gameContainer.appendChild(img);
  }
  createGamePole() {
    console.dir(this.gameContainer);
    const itemWidth = this.gameContainer.clientWidth / this.cols;
    const itemHeight = this.gameContainer.clientHeight / this.rows;
    let count = 0;
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        count++;
        const cItem = document.createElement('div');

        cItem.dataset.i_col = i;
        cItem.dataset.i_row = j;
        cItem.dataset.c_col = i;
        cItem.dataset.c_row = j;
        cItem.style.width = itemWidth + 'px';
        cItem.style.height = itemHeight + 'px';
        cItem.innerText = count;
        cItem.classList.add('item');
        cItem.style.backgroundImage = `url('${this.gameImageUrl}')`;
        cItem.style.backgroundSize = `${this.gameContainer.clientWidth}px ${this.gameContainer.clientHeight}px`;
        cItem.style.backgroundPositionX = `-${itemWidth * i}px`;
        cItem.style.backgroundPositionY = `-${itemHeight * j}px`;
        this.itemsArraySuccess.push(cItem);
      }
    }
    this.itemsArray = [].concat(this.itemsArraySuccess);
    this.gameContainer.append(...this.itemsArray);
  }
  positionItems() {
    const itemWidth = this.gameContainer.clientWidth / this.cols;
    const itemHeight = this.gameContainer.clientHeight / this.rows;
    this.itemsArray.forEach(cItem => {
      // cItem.style.left = (cItem.dataset.c_col * itemWidth) + 'px';
      // cItem.style.top = (cItem.dataset.c_row * itemHeight) + 'px';
      gsap.to(cItem, {
        duration: 1,
        left: cItem.dataset.c_col * itemWidth,
        top: cItem.dataset.c_row * itemHeight,
      });
    });
  }

  positionShuffle() {
    this.itemsArray.sort((a, b) => {
      return Math.random() - 0.5;
    });
    for (let i = 0; i < this.itemsArraySuccess.length; i++) {
      this.itemsArray[i].dataset.c_col = this.itemsArraySuccess[
        i
      ].dataset.i_col;
      this.itemsArray[i].dataset.c_row = this.itemsArraySuccess[
        i
      ].dataset.i_row;
    }
    this.positionItems();
  }
}
