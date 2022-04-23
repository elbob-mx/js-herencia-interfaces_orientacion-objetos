export class Empleado {
    #nombre;
    #ocr;
    #salario;
    
    constructor(nombre, ocr, salario) {
        this.#nombre = nombre;
        this.#ocr = ocr;
        this.#salario = salario;
    }

    verBonificacion(bono){
        return this.#salario + this.#salario*bono/100;
    }
};