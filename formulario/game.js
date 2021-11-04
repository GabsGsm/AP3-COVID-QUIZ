export class game {
    constructor (A, B, C, D, res, img, titulo){
        this.A = A;
        this.B = B;
        this.C = C;
        this.D = D;
        this.res = res;
        this.img =img;
        this.titulo = titulo
    }

    validador(valor) {
        if(valor == this.res){
            return true;
        }
        else{
            return false;
        }
    }

}