class Xotaker extends Base {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
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
        var norVandak = this.yntrelVandak(1);
        var yntrelVandak = random(norVandak)
        if (yntrelVandak) {
            this.energy++;
            matrix[this.y][this.x] = 0;
            this.y = yntrelVandak[1];
            this.x = yntrelVandak[0];
            matrix[this.y][this.x] = 2

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
            matrix[this.y][this.x] = 2;



        }


    }

    Bazmanal() {
        this.multyply++;
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            if (this.energy >= 10) {
                var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
                xotakerArr.push(norXotaker);
                matrix[norVandak[1]][norVandak[0]] = 2;
                this.energy = 6;
            }
        }

    }



    Satkel() {
        if (this.energy == 0) {
            matrix[this.y][this.x] = 0;
            for (var i in xotakerArr) {
                if (this.y == xotakerArr[i].y && this.x == xotakerArr[i].x) {
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}