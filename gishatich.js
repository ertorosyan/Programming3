class Gishatich extends Base {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 5;
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
        var norVandak = this.yntrelVandak(2);
        var yntrelVandak = random(norVandak)
        if (yntrelVandak) {
            this.energy++;
            matrix[this.y][this.x] = 0;
            this.y = yntrelVandak[1];
            this.x = yntrelVandak[0];
            matrix[this.y][this.x] = 3

            for (var i in xotakerArr) {
                if (this.y == xotakerArr[i].y && this.x == xotakerArr[i].x) {
                    xotakerArr.splice(i, 1);
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
        var norVandak = this.yntrelVandak1(1, 0);
        var yntrelVandak = random(norVandak)
        if (yntrelVandak) {
            this.energy--;
            matrix[this.y][this.x] = 0;
            this.y = yntrelVandak[1];
            this.x = yntrelVandak[0];
            matrix[this.y][this.x] = 3;



        }


    }

    Bazmanal() {
        this.multyply++;
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            if (this.energy >= 10) {
                var norGishatich = new Gishatich(norVandak[0], norVandak[1]);
                gishatichArr.push(norGishatich);
                matrix[norVandak[1]][norVandak[0]] = 3;
                this.energy = 6;
            }
        }

    }



    Satkel() {
        if (this.energy == -30) {
            matrix[this.y][this.x] = 0;
            for (var i in gishatichArr) {
                if (this.y == gishatichArr[i].y && this.x == gishatichArr[i].x) {
                    gishatichArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}