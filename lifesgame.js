class LifeGame {
    constructor (rows, colums) {
      this.rows = rows;
      this.colums = colums;
      this.board = this.createBoard(this.rows, this.colums);
    }
    createBoard(rows, colums) {
       let board = new Array(rows);
       for (let i = 0; i < rows; i++) {
           board[i] = new Array(colums);
           for (let j = 0; j < colums; j++) {
               let randomValue = Math.random();
               if (randomValue >= 0.7 && i != 0 && i != rows - 1 && j != 0 && j != colums - 1) {
                    board[i][j] = '*';
               } else {
                   board[i][j] = '.';
               }
           }
       }
       return board;
    }
    
    countLives(x, y) {
        // Movimiento hacia los vecinos
        let moveX = new Array(0, 0, 1, -1, -1, -1, 1, 1);
        let moveY = new Array(1, -1, 0, 0, 1, -1, -1, 1);
        let cnt = 0;
        for (let cell = 0; cell < 8; cell++) {
            let mox = x + moveX[cell];
            let moy = y + moveY[cell];
            if (this.board[mox][moy] == '*') 
                cnt += 1;
        }
        return cnt;
    }

    nextGeneration () {
        let boardCopy = this.board.slice();

        for (let i = 1; i < this.rows - 1; i++) {
            for (let j = 1; j < this.colums - 1; j++) {
                let dato = this.countLives(i, j);
                if (dato == 3 && this.board[i][j] == ".") {
                    boardCopy[i][j] = "*";
                }
                if (dato < 2 && this.board[i][j] == "*") {
                    boardCopy[i][j] = ".";
                }
                if (dato > 3 && this.board[i][j] == "*") {
                    boardCopy[i][j] = ".";
                }
                /*if (dato.vecinosvivos == 3 || dato.vecinosvivos == 2 && dato.caracter == "*") {
                    array[x][y] = "*";
                }*/
            }
        }
        this.board = boardCopy.slice();
        this.toString();
    }

    toString () {
        for (let row of this.board) {
            console.log(row.join(''));
        }
    }
  }

  lifeGame = new LifeGame(10, 10);