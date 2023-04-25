let 과자리스트 = ['메모장 만들기', '이이이', '포트폴리오 사이트', '밴딩머신구현']

let s = new Set(과자리스트);
console.log(s);


class Sausage {
    constructor (el1, el2) {
        this.el1 = el1;
        this.el2 = el2;
    }

    taste () {
        console.log(`${this.el1} 맛과 ${this.el2}맛 소세지`);
    }
}
class fireSausage extends Sausage {
    constructor(el1, el2, el3) {
        super(el1, el2);
        this.el3 = el3;
    } 

    taste() {
        console.log(`${this.el1} 가 ${this.el2} 가 ${this.el3} 맛 소세지`);
    }

}

let mySausage = new fireSausage('fire', 'water', 'earth');
let yourSausage = new Sausage('water', 'earth');
mySausage.taste();
yourSausage.taste();