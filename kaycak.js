class Kaycak {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 1;
        this.movement = 0
    }



    sksvel() {
        matrix[this.y][this.x] = 0;

        this.x = Math.floor(Math.random() * matrix.length);
        this.y = Math.floor(Math.random() * matrix[1].length);

        if (matrix[this.y][this.x] == 1) {
            for (var i in grassArr) {
                if (this.y == grassArr[i].y && this.x == grassArr[i].x) {
                    grassArr.splice(i, 1);
                    break;
                }

            }
        }
        else if (matrix[this.y][this.x] == 2) {
            for (var i in xotakerArr) {
                if (this.y == xotakerArr[i].y && this.x == xotakerArr[i].x) {
                    xotakerArr.splice(i, 1);
                    break;
                }

            }
        }

        else if (matrix[this.y][this.x] == 3) {
            for (var i in gishatichArr) {
                if (this.y == gishatichArr[i].y && this.x == gishatichArr[i].x) {
                    gishatichArr.splice(i, 1);
                    break;
                }

            }

        }


        else if (matrix[this.y][this.x] == 4) {
            for (var i in amenakerArr) {
                if (this.y == amenakerArr[i].y && this.x == amenakerArr[i].x) {
                    amenakerArr.splice(i, 1);
                    break;
                }

            }

        }



    }
}