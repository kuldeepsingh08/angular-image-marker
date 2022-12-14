import { Component, OnInit, VERSION } from '@angular/core';

interface MATRIX_ARR  {
  id: number;
  isMarked: boolean;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  // 25-colomns x 20-row;
  name = 'Angular ' + VERSION.major;
  items = Array.from(Array(30).keys()); // colomn
  grid = Array.from(Array(12).keys()); // row
  itemsArr = [];
  gridArr = [];
  matrixArr = [];
  containerHeigth = 0;
  
  ngOnInit(): void {
    setTimeout(() => {
      const myImg = document.querySelector("#my-img");
    console.log('check>>>', myImg.clientHeight);
    }, 3000)
    // this.items.forEach(element => this.itemsArr.push({ id: element, isMarked: false }))
    // this.grid.forEach(element => this.gridArr.push({ id: element, isMarked: false }))
    this.grid.forEach((element, i) => {
      this.matrixArr.push([]);
      this.items.forEach(element2 => {
        this.matrixArr[i].push([{ x: element2, y: element }])
      })
    });
    console.log('checkMatrix', this.matrixArr)
  }

  checkPosition(x: number, y: number, isMarked: boolean): void {
    this.gridArr[x].isMarked = !this.gridArr[x].isMarked;
    this.itemsArr[y].isMarked = !this.itemsArr[y].isMarked;
    console.log('x,y: ', x,y, isMarked);
  }

  checkPositionNew(cell: any): void {
    console.log('cell', cell);
  }
}
