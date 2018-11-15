class Amenaker extends Base {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
        this.movement = 0
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch)

    }


    utel() {
        this.stanalNorKordinatner();
        var norVandak = this.yntrelVandak(3, 2, 1);
        var yntrelVandak = random(norVandak)
        if (yntrelVandak) {
            this.energy++;
            matrix[this.y][this.x] = 0;
            this.y = yntrelVandak[1];
            this.x = yntrelVandak[0];
            matrix[this.y][this.x] = 4

            for (var i in gishatichArr) {
                if (this.y == gishatichArr[i].y && this.x == gishatichArr[i].x) {
                    gishatichArr.splice(i, 1);
                    break;
                }

            }
            for (var i in xotakerArr) {
                if (this.y == xotakerArr[i].y && this.x == xotakerArr[i].x) {
                    xotakerArr.splice(i, 1);
                    break;
                }

            }


            for (var i in grassArr) {
                if (this.y == grassArr[i].y && this.x == grassArr[i].x) {
                    grassArr.splice(i, 1);
                    break;
                }

            }

        }
        else {
            this.Move();

        }

    }



    Move() {
        this.stanalNorKordinatner();
        var norVandak = this.yntrelVandak(0);
        var yntrelVandak = random(norVandak)
        if (yntrelVandak) {
            this.energy--;
            matrix[this.y][this.x] = 0;
            this.y = yntrelVandak[1];
            this.x = yntrelVandak[0];
            matrix[this.y][this.x] = 4;



        }


    }

    Bazmanal() {
        this.movement++;
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            if (this.energy >= 30) {
                var noramenaker = new Amenaker(norVandak[0], norVandak[1]);
                amenakerArr.push(noramenaker);
                matrix[norVandak[1]][norVandak[0]] = 4;
                this.energy = 6;
            }
        }

    }



    Satkel() {
        if (this.energy == 7) {
            matrix[this.y][this.x] = 0;
            for (var i in amenakerArr) {
                if (this.y == amenakerArr[i].y && this.x == amenakerArr[i].x) {
                    amenakerArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}