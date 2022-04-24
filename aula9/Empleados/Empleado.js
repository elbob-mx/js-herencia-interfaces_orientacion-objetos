// clase generalizada para empleados ***

export class Empleado {
    #nombre;
    #ocr;
    #salario;
    #clave;
    
    constructor(nombre, ocr, salario) {
        this.#nombre = nombre;
        this.#ocr = ocr;
        this.#salario = salario;
        this.#clave= "";
    };

    asignarClave(clave) {
        this.#clave = clave;
    };

    autenticable(clave) {
        return clave == this.#clave;
    };

    verBonificacion() {
        return ("$ " + (this.#salario) + " MXN");
    };

    _verBonificacion(bono){
        return ("$ " + (this.#salario + this.#salario*bono/100) + " MXN");
    };
};